class SubwayMap {
    constructor() {
        this.svg = document.getElementById('mapSvg');
        this.modal = document.getElementById('modal');
        this.showLabels = true;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.drawMap();
    }

    setupEventListeners() {
        document.getElementById('toggleLabels').addEventListener('click', () => {
            this.showLabels = !this.showLabels;
            this.drawMap();
        });

        document.getElementById('resetView').addEventListener('click', () => {
            this.resetView();
        });

        // Modal event listeners
        this.modal.querySelector('.close').addEventListener('click', () => {
            this.closeModal();
        });

        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });
    }

    drawMap() {
        // Clear existing content
        this.svg.innerHTML = '';
        
        const tracks = Object.values(learningTracks);
        const trackSpacing = 120; // Vertical spacing between tracks
        const startX = 80;
        const stationSpacing = 160; // Horizontal spacing between stations
        
        tracks.forEach((track, trackIndex) => {
            const y = 60 + (trackIndex * trackSpacing);
            this.drawTrack(track, startX, y, stationSpacing);
        });
    }

    drawTrack(track, startX, y, stationSpacing) {
        const stations = track.stations;
        const maxStations = Math.max(...Object.values(learningTracks).map(t => t.stations.length));
        const trackLength = (maxStations - 1) * stationSpacing;
        
        // Draw track line
        const trackLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        trackLine.setAttribute('x1', startX);
        trackLine.setAttribute('y1', y);
        trackLine.setAttribute('x2', startX + (stations.length - 1) * stationSpacing);
        trackLine.setAttribute('y2', y);
        trackLine.setAttribute('stroke', track.color);
        trackLine.setAttribute('stroke-width', '4');
        trackLine.setAttribute('stroke-linecap', 'round');
        this.svg.appendChild(trackLine);

        // Draw direction arrows
        for (let i = 0; i < stations.length - 1; i++) {
            const arrowX = startX + (i * stationSpacing) + (stationSpacing / 2);
            this.drawArrow(arrowX, y, track.color);
        }

        // Draw stations
        stations.forEach((station, index) => {
            const x = startX + (index * stationSpacing);
            this.drawStation(station, x, y, track.color, index === 0, index === stations.length - 1);
        });

        // Draw track label on the left
        const trackLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        trackLabel.setAttribute('x', 10);
        trackLabel.setAttribute('y', y + 5);
        trackLabel.setAttribute('text-anchor', 'start');
        trackLabel.setAttribute('font-family', 'Arial, sans-serif');
        trackLabel.setAttribute('font-size', '12');
        trackLabel.setAttribute('font-weight', 'bold');
        trackLabel.setAttribute('fill', track.color);
        trackLabel.textContent = track.name;
        this.svg.appendChild(trackLabel);
    }

    drawArrow(x, y, color) {
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const points = `${x-6},${y-4} ${x+6},${y} ${x-6},${y+4}`;
        arrow.setAttribute('points', points);
        arrow.setAttribute('fill', color);
        arrow.setAttribute('opacity', '0.8');
        this.svg.appendChild(arrow);
    }

    drawStation(station, x, y, color, isStart, isEnd) {
        // Station circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', isStart || isEnd ? '10' : '7');
        circle.setAttribute('fill', 'white');
        circle.setAttribute('stroke', color);
        circle.setAttribute('stroke-width', '3');
        circle.setAttribute('cursor', 'pointer');
        circle.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))';
        circle.addEventListener('click', () => this.showStationDetails(station));
        this.svg.appendChild(circle);

        // Station label (only if labels are enabled)
        if (this.showLabels) {
            const labelGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            labelGroup.setAttribute('cursor', 'pointer');
            labelGroup.addEventListener('click', () => this.showStationDetails(station));
            
            // Background rectangle for better readability
            const bbox = this.getTextBBox(station.name);
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x - bbox.width/2 - 4);
            rect.setAttribute('y', y - 35);
            rect.setAttribute('width', bbox.width + 8);
            rect.setAttribute('height', bbox.height + 4);
            rect.setAttribute('fill', 'rgba(255,255,255,0.9)');
            rect.setAttribute('stroke', color);
            rect.setAttribute('stroke-width', '1');
            rect.setAttribute('rx', '3');
            labelGroup.appendChild(rect);
            
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', x);
            label.setAttribute('y', y - 25);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('font-family', 'Arial, sans-serif');
            label.setAttribute('font-size', '9');
            label.setAttribute('font-weight', '600');
            label.setAttribute('fill', '#333');
            
            // Handle long text by breaking it into lines
            const words = station.name.split(' ');
            if (words.length > 2 && station.name.length > 15) {
                const midPoint = Math.ceil(words.length / 2);
                const firstLine = words.slice(0, midPoint).join(' ');
                const secondLine = words.slice(midPoint).join(' ');
                
                const tspan1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                tspan1.setAttribute('x', x);
                tspan1.setAttribute('dy', '0');
                tspan1.textContent = firstLine;
                label.appendChild(tspan1);
                
                const tspan2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                tspan2.setAttribute('x', x);
                tspan2.setAttribute('dy', '10');
                tspan2.textContent = secondLine;
                label.appendChild(tspan2);
                
                // Adjust rectangle height for two lines
                rect.setAttribute('height', bbox.height + 14);
                rect.setAttribute('y', y - 40);
            } else {
                label.textContent = station.name;
            }
            
            labelGroup.appendChild(label);
            this.svg.appendChild(labelGroup);
        }

        // Start/End indicators
        if (isStart) {
            const startIndicator = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            startIndicator.setAttribute('x', x);
            startIndicator.setAttribute('y', y + 25);
            startIndicator.setAttribute('text-anchor', 'middle');
            startIndicator.setAttribute('font-family', 'Arial, sans-serif');
            startIndicator.setAttribute('font-size', '8');
            startIndicator.setAttribute('font-weight', 'bold');
            startIndicator.setAttribute('fill', color);
            startIndicator.textContent = 'START';
            this.svg.appendChild(startIndicator);
        }

        if (isEnd) {
            const endIndicator = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            endIndicator.setAttribute('x', x);
            endIndicator.setAttribute('y', y + 25);
            endIndicator.setAttribute('text-anchor', 'middle');
            endIndicator.setAttribute('font-family', 'Arial, sans-serif');
            endIndicator.setAttribute('font-size', '8');
            endIndicator.setAttribute('font-weight', 'bold');
            endIndicator.setAttribute('fill', color);
            endIndicator.textContent = 'END';
            this.svg.appendChild(endIndicator);
        }
    }

    getTextBBox(text) {
        // Approximate width calculation for text
        const avgCharWidth = 6;
        const lineHeight = 12;
        const words = text.split(' ');
        
        if (words.length > 2 && text.length > 15) {
            const midPoint = Math.ceil(words.length / 2);
            const firstLine = words.slice(0, midPoint).join(' ');
            const secondLine = words.slice(midPoint).join(' ');
            const maxWidth = Math.max(firstLine.length, secondLine.length) * avgCharWidth;
            return { width: maxWidth, height: lineHeight * 2 };
        } else {
            return { width: text.length * avgCharWidth, height: lineHeight };
        }
    }

    showStationDetails(station) {
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = station.name;
        
        let resourcesHtml = `
            <p><strong>Description:</strong> ${station.description}</p>
            <h3>Learning Resources:</h3>
            <ul>
        `;

        station.resources.forEach(resource => {
            resourcesHtml += `
                <li>
                    <strong>${resource.type.toUpperCase()}:</strong> 
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.title}</a>
                </li>
            `;
        });

        resourcesHtml += '</ul>';
        modalBody.innerHTML = resourcesHtml;
        modal.style.display = 'block';
    }

    closeModal() {
        this.modal.style.display = 'none';
    }

    resetView() {
        this.showLabels = true;
        this.drawMap();
    }
}

// Initialize the subway map when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SubwayMap();
});
