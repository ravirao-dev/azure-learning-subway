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
        const trackHeight = 120;
        const startX = 50;
        const stationSpacing = 150;
        
        tracks.forEach((track, trackIndex) => {
            const y = 100 + (trackIndex * trackHeight);
            this.drawTrack(track, startX, y, stationSpacing);
        });
    }

    drawTrack(track, startX, y, stationSpacing) {
        const stations = track.stations;
        const trackLength = (stations.length - 1) * stationSpacing;
        
        // Draw track line
        const trackLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        trackLine.setAttribute('x1', startX);
        trackLine.setAttribute('y1', y);
        trackLine.setAttribute('x2', startX + trackLength);
        trackLine.setAttribute('y2', y);
        trackLine.setAttribute('stroke', track.color);
        trackLine.setAttribute('stroke-width', '6');
        trackLine.setAttribute('stroke-linecap', 'round');
        this.svg.appendChild(trackLine);

        // Draw direction arrows
        this.drawArrows(startX, y, trackLength, track.color, stationSpacing);

        // Draw stations
        stations.forEach((station, index) => {
            const x = startX + (index * stationSpacing);
            this.drawStation(station, x, y, track.color, index === 0, index === stations.length - 1);
        });

        // Draw track label
        const trackLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        trackLabel.setAttribute('x', startX - 30);
        trackLabel.setAttribute('y', y + 5);
        trackLabel.setAttribute('text-anchor', 'end');
        trackLabel.setAttribute('font-family', 'Arial, sans-serif');
        trackLabel.setAttribute('font-size', '14');
        trackLabel.setAttribute('font-weight', 'bold');
        trackLabel.setAttribute('fill', track.color);
        trackLabel.textContent = track.name;
        this.svg.appendChild(trackLabel);
    }

    drawArrows(startX, y, trackLength, color, spacing) {
        const arrowCount = Math.floor(trackLength / spacing);
        for (let i = 0; i < arrowCount; i++) {
            const arrowX = startX + (spacing / 2) + (i * spacing);
            this.drawArrow(arrowX, y, color);
        }
    }

    drawArrow(x, y, color) {
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const points = `${x-5},${y-5} ${x+5},${y} ${x-5},${y+5}`;
        arrow.setAttribute('points', points);
        arrow.setAttribute('fill', color);
        arrow.setAttribute('opacity', '0.7');
        this.svg.appendChild(arrow);
    }

    drawStation(station, x, y, color, isStart, isEnd) {
        // Station circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', isStart || isEnd ? '12' : '8');
        circle.setAttribute('fill', 'white');
        circle.setAttribute('stroke', color);
        circle.setAttribute('stroke-width', '3');
        circle.setAttribute('cursor', 'pointer');
        circle.addEventListener('click', () => this.showStationDetails(station));
        this.svg.appendChild(circle);

        // Station label
        if (this.showLabels) {
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', x);
            label.setAttribute('y', y - 20);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('font-family', 'Arial, sans-serif');
            label.setAttribute('font-size', '11');
            label.setAttribute('font-weight', 'bold');
            label.setAttribute('fill', '#333');
            label.setAttribute('cursor', 'pointer');
            label.addEventListener('click', () => this.showStationDetails(station));
            
            // Split long station names into multiple lines
            const words = station.name.split(' ');
            if (words.length > 2) {
                const tspan1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                tspan1.setAttribute('x', x);
                tspan1.setAttribute('dy', '0');
                tspan1.textContent = words.slice(0, 2).join(' ');
                label.appendChild(tspan1);
                
                const tspan2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                tspan2.setAttribute('x', x);
                tspan2.setAttribute('dy', '12');
                tspan2.textContent = words.slice(2).join(' ');
                label.appendChild(tspan2);
            } else {
                label.textContent = station.name;
            }
            
            this.svg.appendChild(label);
        }

        // Start/End indicators
        if (isStart) {
            const startIndicator = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            startIndicator.setAttribute('x', x);
            startIndicator.setAttribute('y', y + 35);
            startIndicator.setAttribute('text-anchor', 'middle');
            startIndicator.setAttribute('font-family', 'Arial, sans-serif');
            startIndicator.setAttribute('font-size', '10');
            startIndicator.setAttribute('font-weight', 'bold');
            startIndicator.setAttribute('fill', color);
            startIndicator.textContent = 'START';
            this.svg.appendChild(startIndicator);
        }

        if (isEnd) {
            const endIndicator = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            endIndicator.setAttribute('x', x);
            endIndicator.setAttribute('y', y + 35);
            endIndicator.setAttribute('text-anchor', 'middle');
            endIndicator.setAttribute('font-family', 'Arial, sans-serif');
            endIndicator.setAttribute('font-size', '10');
            endIndicator.setAttribute('font-weight', 'bold');
            endIndicator.setAttribute('fill', color);
            endIndicator.textContent = 'END';
            this.svg.appendChild(endIndicator);
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
                    <a href="${resource.url}" target="_blank">${resource.title}</a>
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
        this.drawMap();
    }
}

// Initialize the subway map when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SubwayMap();
});
