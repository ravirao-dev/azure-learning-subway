class SubwayMap {
  constructor(containerId, data) {
    this.container = document.getElementById(containerId);
    this.data = data;
    this.labelsVisible = true;
    this.scale = 1;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    
    this.init();
  }
  
  init() {
    this.createSVG();
    this.addEventListeners();
    this.render();
  }
  
  createSVG() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', '100%');
    this.svg.setAttribute('height', '100%');
    this.svg.setAttribute('viewBox', '0 0 1000 1000');
    this.svg.style.cursor = 'grab';
    
    // Create defs for arrowheads
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    
    this.data.tracks.forEach(track => {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', `arrow-${track.id}`);
      marker.setAttribute('viewBox', '0 0 10 10');
      marker.setAttribute('refX', '8');
      marker.setAttribute('refY', '3');
      marker.setAttribute('markerWidth', '6');
      marker.setAttribute('markerHeight', '6');
      marker.setAttribute('orient', 'auto');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M0,0 L0,6 L9,3 z');
      path.setAttribute('fill', track.color);
      
      marker.appendChild(path);
      defs.appendChild(marker);
    });
    
    this.svg.appendChild(defs);
    this.container.appendChild(this.svg);
  }
  
  addEventListeners() {
    // Pan and zoom functionality
    this.svg.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
      this.svg.style.cursor = 'grabbing';
    });
    
    this.svg.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.lastMouseX;
        const deltaY = e.clientY - this.lastMouseY;
        this.offsetX += deltaX / this.scale;
        this.offsetY += deltaY / this.scale;
        this.updateViewBox();
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }
    });
    
    this.svg.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.svg.style.cursor = 'grab';
    });
    
    this.svg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      this.scale *= delta;
      this.scale = Math.max(0.3, Math.min(3, this.scale));
      this.updateViewBox();
    });
    
    // Control buttons
    document.getElementById('toggleLabels').addEventListener('click', () => {
      this.labelsVisible = !this.labelsVisible;
      this.toggleLabels();
    });
    
    document.getElementById('resetView').addEventListener('click', () => {
      this.scale = 1;
      this.offsetX = 0;
      this.offsetY = 0;
      this.updateViewBox();
    });
    
    // Close station info
    document.getElementById('close-info').addEventListener('click', () => {
      document.getElementById('station-info').classList.add('hidden');
    });
  }
  
  updateViewBox() {
    const width = 1000 / this.scale;
    const height = 1000 / this.scale;
    const x = -this.offsetX;
    const y = -this.offsetY;
    this.svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
  }
  
  render() {
    this.svg.innerHTML = this.svg.querySelector('defs').outerHTML;
    
    this.data.tracks.forEach(track => {
      this.renderTrack(track);
    });
  }
  
  renderTrack(track) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', `track track-${track.id}`);
    
    // Render connections first (so they appear behind stations)
    track.connections.forEach(connection => {
      this.renderConnection(group, track, connection);
    });
    
    // Render stations
    track.stations.forEach(station => {
      this.renderStation(group, track, station);
    });
    
    this.svg.appendChild(group);
  }
  
  renderConnection(group, track, connection) {
    const fromStation = track.stations.find(s => s.id === connection.from);
    const toStation = track.stations.find(s => s.id === connection.to);
    
    if (!fromStation || !toStation) return;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', fromStation.x);
    line.setAttribute('y1', fromStation.y);
    line.setAttribute('x2', toStation.x);
    line.setAttribute('y2', toStation.y);
    line.setAttribute('stroke', track.color);
    line.setAttribute('stroke-width', '4');
    line.setAttribute('marker-end', `url(#arrow-${track.id})`);
    line.setAttribute('class', 'connection-line');
    
    group.appendChild(line);
  }
  
  renderStation(group, track, station) {
    const stationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    stationGroup.setAttribute('class', 'station');
    stationGroup.setAttribute('transform', `translate(${station.x}, ${station.y})`);
    
    // Station circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', station.type === 'start' || station.type === 'end' ? '12' : '8');
    circle.setAttribute('fill', station.type === 'end' ? '#333' : 'white');
    circle.setAttribute('stroke', track.color);
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('class', 'station-circle');
    
    // Station label background
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '0');
    text.setAttribute('y', '-20');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'station-label');
    text.setAttribute('fill', '#333');
    text.setAttribute('font-size', '11');
    text.setAttribute('font-weight', 'bold');
    text.textContent = station.name;
    
    // Label background for readability
    const textBBox = text.getBBox ? text.getBBox() : { x: -30, y: -8, width: 60, height: 16 };
    const labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    labelBg.setAttribute('x', textBBox.x - 2);
    labelBg.setAttribute('y', textBBox.y - 2);
    labelBg.setAttribute('width', textBBox.width + 4);
    labelBg.setAttribute('height', textBBox.height + 4);
    labelBg.setAttribute('fill', 'rgba(255, 255, 255, 0.9)');
    labelBg.setAttribute('stroke', track.color);
    labelBg.setAttribute('stroke-width', '1');
    labelBg.setAttribute('rx', '3');
    labelBg.setAttribute('class', 'label-background');
    
    stationGroup.appendChild(labelBg);
    stationGroup.appendChild(text);
    stationGroup.appendChild(circle);
    
    // Click handler for station info
    stationGroup.addEventListener('click', () => {
      this.showStationInfo(station, track);
    });
    
    stationGroup.style.cursor = 'pointer';
    group.appendChild(stationGroup);
  }
  
  showStationInfo(station, track) {
    const infoPanel = document.getElementById('station-info');
    const title = document.getElementById('station-title');
    const content = document.getElementById('station-content');
    
    title.textContent = station.name;
    
    let html = `
      <div class="station-track-info">
        <span class="track-indicator" style="background-color: ${track.color}"></span>
        <strong>${track.name}</strong>
      </div>
      <p class="station-description">${station.description}</p>
    `;
    
    if (station.resources && station.resources.length > 0) {
      html += '<div class="resources"><h4>Learning Resources:</h4><ul>';
      station.resources.forEach(resource => {
        const icon = this.getResourceIcon(resource.type);
        html += `<li><span class="resource-icon">${icon}</span><a href="${resource.url}" target="_blank">${resource.title}</a></li>`;
      });
      html += '</ul></div>';
    }
    
    content.innerHTML = html;
    infoPanel.classList.remove('hidden');
  }
  
  getResourceIcon(type) {
    const icons = {
      'article': '📄',
      'video': '📹',
      'book': '📚',
      'course': '🎓',
      'documentation': '📋'
    };
    return icons[type] || '🔗';
  }
  
  toggleLabels() {
    const labels = this.svg.querySelectorAll('.station-label, .label-background');
    labels.forEach(label => {
      label.style.display = this.labelsVisible ? 'block' : 'none';
    });
  }
}

// Initialize the subway map when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const subwayMap = new SubwayMap('subway-map', learningData);
});
