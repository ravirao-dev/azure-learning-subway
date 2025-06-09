class SubwayMap {
    constructor() {
        this.svg = document.getElementById('subway-map');
        this.stationPanel = document.getElementById('station-panel');
        this.completedStations = JSON.parse(localStorage.getItem('completedStations') || '[]');
        this.init();
    }

    init() {
        this.drawTracks();
        this.drawArrows();
        this.drawStations();
        this.setupEventListeners();
        this.updateProgress();
    }

    drawTracks() {
        const tracks = learningData.tracks;
        
        // Silicon track (horizontal lines)
        this.drawTrackLine('silicon', [
            {x: 100, y: 150}, {x: 400, y: 150}, // Top horizontal
            {x: 100, y: 250}, {x: 400, y: 250}, // Middle horizontal  
            {x: 100, y: 350}, {x: 400, y: 350}, // Bottom horizontal
            {x: 100, y: 450}, {x: 400, y: 450}  // Lowest horizontal
        ]);

        // Silicon vertical connections
        this.drawTrackLine('silicon', [
            {x: 100, y: 150}, {x: 100, y: 450}, // Left vertical
            {x: 250, y: 150}, {x: 250, y: 450}, // Middle vertical
            {x: 400, y: 150}, {x: 400, y: 450}  // Right vertical
        ]);

        // Virtualization track
        this.drawTrackLine('virtualization', [
            {x: 600, y: 150}, {x: 850, y: 150}, // Top horizontal
            {x: 550, y: 250}, {x: 850, y: 250}, // Middle horizontal
            {x: 600, y: 350}, {x: 850, y: 350}, // Bottom horizontal
            {x: 600, y: 450}, {x: 850, y: 450}  // Lowest horizontal
        ]);

        // Virtualization vertical connections
        this.drawTrackLine('virtualization', [
            {x: 600, y: 150}, {x: 600, y: 450},
            {x: 750, y: 150}, {x: 750, y: 450},
            {x: 850, y: 150}, {x: 850, y: 450}
        ]);

        // Security track
        this.drawTrackLine('security', [
            {x: 1000, y: 150}, {x: 1250, y: 150}, // Top horizontal
            {x: 950, y: 250}, {x: 1250, y: 250},   // Middle horizontal
            {x: 1000, y: 350}, {x: 1250, y: 350}, // Bottom horizontal
            {x: 950, y: 450}, {x: 1250, y: 450},   // Lower horizontal
            {x: 950, y: 550}, {x: 1250, y: 550}    // Lowest horizontal
        ]);

        // Security vertical connections
        this.drawTrackLine('security', [
            {x: 1000, y: 150}, {x: 1000, y: 350},
            {x: 1150, y: 150}, {x: 1150, y: 350},
            {x: 1250, y: 150}, {x: 1250, y: 550}
        ]);

        // Intersection connections
        this.drawIntersectionLines();
    }

    drawTrackLine(trackType, points) {
        for (let i = 0; i < points.length - 1; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', points[i].x);
            line.setAttribute('y1', points[i].y);
            line.setAttribute('x2', points[i + 1].x);
            line.setAttribute('y2', points[i + 1].y);
            line.setAttribute('class', `track-line ${trackType}`);
            this.svg.appendChild(line);
        }
    }

    drawArrows() {
        // Define arrow paths for each track showing learning progression
        const arrowPaths = {
            silicon: [
                // Horizontal arrows
                {from: {x: 175, y: 140}, to: {x: 175, y: 160}, direction: 'right'},
                {from: {x: 325, y: 140}, to: {x: 325, y: 160}, direction: 'right'},
                {from: {x: 175, y: 240}, to: {x: 175, y: 260}, direction: 'right'},
                {from: {x: 325, y: 240}, to: {x: 325, y: 260}, direction: 'right'},
                // Vertical arrows  
                {from: {x: 90, y: 200}, to: {x: 110, y: 200}, direction: 'down'},
                {from: {x: 240, y: 200}, to: {x: 260, y: 200}, direction: 'down'},
                {from: {x: 390, y: 200}, to: {x: 410, y: 200}, direction: 'down'},
                {from: {x: 90, y: 300}, to: {x: 110, y: 300}, direction: 'down'},
                {from: {x: 240, y: 300}, to: {x: 260, y: 300}, direction: 'down'},
                {from: {x: 390, y: 300}, to: {x: 410, y: 300}, direction: 'down'},
                {from: {x: 90, y: 400}, to: {x: 110, y: 400}, direction: 'down'},
                {from: {x: 240, y: 400}, to: {x: 260, y: 400}, direction: 'down'},
                {from: {x: 390, y: 400}, to: {x: 410, y: 400}, direction: 'down'}
            ],
            virtualization: [
                // Horizontal arrows
                {from: {x: 675, y: 140}, to: {x: 675, y: 160}, direction: 'right'},
                {from: {x: 775, y: 140}, to: {x: 775, y: 160}, direction: 'right'},
                {from: {x: 650, y: 240}, to: {x: 650, y: 260}, direction: 'right'},
                {from: {x: 775, y: 240}, to: {x: 775, y: 260}, direction: 'right'},
                // Vertical arrows
                {from: {x: 590, y: 200}, to: {x: 610, y: 200}, direction: 'down'},
                {from: {x: 740, y: 200}, to: {x: 760, y: 200}, direction: 'down'},
                {from: {x: 840, y: 200}, to: {x: 860, y: 200}, direction: 'down'}
            ],
            security: [
                // Horizontal arrows
                {from: {x: 1075, y: 140}, to: {x: 1075, y: 160}, direction: 'right'},
                {from: {x: 1175, y: 140}, to: {x: 1175, y: 160}, direction: 'right'},
                {from: {x: 1025, y: 240}, to: {x: 1025, y: 260}, direction: 'right'},
                {from: {x: 1175, y: 240}, to: {x: 1175, y: 260}, direction: 'right'},
                // Vertical arrows
                {from: {x: 990, y: 200}, to: {x: 1010, y: 200}, direction: 'down'},
                {from: {x: 1140, y: 200}, to: {x: 1160, y: 200}, direction: 'down'},
                {from: {x: 1240, y: 200}, to: {x: 1260, y: 200}, direction: 'down'}
            ]
        };

        // Draw arrows for each track
        Object.entries(arrowPaths).forEach(([trackType, arrows]) => {
            arrows.forEach(arrow => {
                this.drawArrow(arrow.from, arrow.to, arrow.direction, trackType);
            });
        });

        // Add START and END labels
        this.addDirectionLabels();
    }

    drawArrow(from, to, direction, trackType) {
        const arrowGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        arrowGroup.setAttribute('class', `arrow ${trackType}`);

        let arrowPath;
        if (direction === 'right') {
            arrowPath = `M ${from.x-8} ${from.y-4} L ${to.x-8} ${to.y+4} L ${from.x-8} ${from.y+4}`;
        } else if (direction === 'down') {
            arrowPath = `M ${from.x-4} ${from.y-8} L ${to.x+4} ${to.y-8} L ${from.x+4} ${from.y-8}`;
        }

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', arrowPath);
        path.setAttribute('class', `arrow ${trackType}`);
        
        arrowGroup.appendChild(path);
        this.svg.appendChild(arrowGroup);
    }

    addDirectionLabels() {
        const labels = [
            {text: "START", x: 50, y: 120, track: "silicon"},
            {text: "END", x: 450, y: 480, track: "silicon"},
            {text: "START", x: 550, y: 120, track: "virtualization"},
            {text: "END", x: 900, y: 480, track: "virtualization"},
            {text: "START", x: 950, y: 120, track: "security"},
            {text: "END", x: 1300, y: 580, track: "security"}
        ];

        labels.forEach(label => {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', label.x);
            text.setAttribute('y', label.y);
            text.setAttribute('class', `direction-label ${label.track}`);
            text.textContent = label.text;
            this.svg.appendChild(text);
        });
    }

    drawIntersectionLines() {
        // Connect intersection points with dotted lines
        const intersections = [
            {from: {x: 400, y: 150}, to: {x: 550, y: 250}}, // modern-cpu to cpu-virtualization
            {from: {x: 250, y: 250}, to: {x: 700, y: 250}}, // memory-systems to memory-virtualization
            {from: {x: 850, y: 350}, to: {x: 1000, y: 350}}, // kernel-integration to vbs-arch
            {from: {x: 400, y: 450}, to: {x: 1250, y: 450}}, // azure-silicon to azure-confidential
            {from: {x: 850, y: 450}, to: {x: 1250, y: 550}}  // container-virt to confidential-containers
        ];

        intersections.forEach(intersection => {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', intersection.from.x);
            line.setAttribute('y1', intersection.from.y);
            line.setAttribute('x2', intersection.to.x);
            line.setAttribute('y2', intersection.to.y);
            line.setAttribute('class', 'track-line intersection');
            line.setAttribute('stroke', '#805ad5');
            line.setAttribute('stroke-dasharray', '5,5');
            line.setAttribute('stroke-width', '3');
            this.svg.appendChild(line);
        });
    }

    drawStations() {
        Object.values(learningData.tracks).forEach(track => {
            track.stations.forEach(station => {
                this.createStation(station, track.color);
            });
        });
    }

    createStation(station, trackColor) {
        const stationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        stationGroup.setAttribute('class', 'station');
        stationGroup.setAttribute('data-station-id', station.id);
        
        // Add special classes for start/end stations
        if (station.isStart) stationGroup.classList.add('start-station');
        if (station.isEnd) stationGroup.classList.add('end-station');

        // Station circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', station.x);
        circle.setAttribute('cy', station.y);
        circle.setAttribute('r', station.isStart || station.isEnd ? '12' : '8');
        
        if (station.isStart) {
            circle.setAttribute('fill', '#ffd700');
            circle.setAttribute('stroke', '#ff8c00');
        } else if (station.isEnd) {
            circle.setAttribute('fill', '#ff1493');
            circle.setAttribute('stroke', '#dc143c');
        } else {
            circle.setAttribute('fill', 'white');
            circle.setAttribute('stroke', trackColor);
        }
        circle.setAttribute('stroke-width', '3');

        // Station label
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', station.x);
        text.setAttribute('y', station.y - 20);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', '#2d3748');
        text.setAttribute('class', station.isStart || station.isEnd ? 'station-label-large' : 'station-label');
        text.textContent = station.name;

        // Check if station is completed
        if (this.completedStations.includes(station.id)) {
            stationGroup.classList.add('completed');
        }

        // Check if station has prerequisites
        if (station.prerequisites && !this.arePrerequisitesMet(station.prerequisites)) {
            circle.setAttribute('opacity', '0.5');
            text.setAttribute('opacity', '0.5');
        }

        stationGroup.appendChild(circle);
        stationGroup.appendChild(text);
        this.svg.appendChild(stationGroup);
    }

    arePrerequisitesMet(prerequisites) {
        return prerequisites.every(prereq => this.completedStations.includes(prereq));
    }

    setupEventListeners() {
        // Station click events
        this.svg.addEventListener('click', (e) => {
            const station = e.target.closest('.station');
            if (station) {
                const stationId = station.getAttribute('data-station-id');
                this.showStationDetails(stationId);
            }
        });

        // Close panel
        document.getElementById('close-panel').addEventListener('click', () => {
            this.stationPanel.classList.remove('active');
        });

        // Click outside to close panel
        document.addEventListener('click', (e) => {
            if (!this.stationPanel.contains(e.target) && !e.target.closest('.station')) {
                this.stationPanel.classList.remove('active');
            }
        });
    }

    showStationDetails(stationId) {
        const station = this.findStationById(stationId);
        if (!station) return;

        const title = document.getElementById('station-title');
        const content = document.getElementById('panel-content');

        title.textContent = station.name;

        let html = '';

        // Station info
        if (station.description) {
            html += `<div class="station-info">
                <strong>About this topic:</strong><br>
                ${station.description}
            </div>`;
        }

        // Prerequisites
        if (station.prerequisites) {
            html += '<div class="resource-section">';
            html += '<h4>🔗 Prerequisites</h4>';
            html += '<div>';
            station.prerequisites.forEach(prereq => {
                const prereqStation = this.findStationById(prereq);
                const isCompleted = this.completedStations.includes(prereq);
                html += `<span class="prerequisite-tag ${isCompleted ? 'completed' : ''}">${prereqStation?.name || prereq}</span>`;
            });
            html += '</div></div>';
        }

        // Intersections
        if (station.intersections) {
            html += '<div class="resource-section">';
            html += '<h4>🔄 Related Topics</h4>';
            html += '<div>';
            station.intersections.forEach(intersection => {
                const intersectionStation = this.findStationById(intersection);
                html += `<span class="intersection-tag">${intersectionStation?.name || intersection}</span>`;
            });
            html += '</div></div>';
        }

        // Resources
        if (station.resources) {
            Object.entries(station.resources).forEach(([category, resources]) => {
                html += '<div class="resource-section">';
                html += `<h4>${this.formatCategory(category)}</h4>`;
                html += '<div class="resource-grid">';
                resources.forEach(resource => {
                    html += `
                        <div class="resource-item" onclick="window.open('${resource.url}', '_blank')">
                            <div class="resource-title">${resource.title} <span class="external-link-icon">↗</span></div>
                            <div class="resource-type">${resource.type}</div>
                            ${resource.description ? `<div class="resource-description">${resource.description}</div>` : ''}
                        </div>`;
                });
                html += '</div></div>';
            });
        }

        // Complete button
        const isCompleted = this.completedStations.includes(stationId);
        const canComplete = !station.prerequisites || this.arePrerequisitesMet(station.prerequisites);
        
        html += `<button class="complete-btn" ${!canComplete || isCompleted ? 'disabled' : ''} onclick="subwayMap.toggleStationCompletion('${stationId}')">
            ${isCompleted ? 'Completed ✓' : 'Mark as Complete'}
        </button>`;

        content.innerHTML = html;
        this.stationPanel.classList.add('active');
    }

    findStationById(stationId) {
        for (const track of Object.values(learningData.tracks)) {
            const station = track.stations.find(s => s.id === stationId);
            if (station) return station;
        }
        return null;
    }

    formatCategory(category) {
        const categoryNames = {
            primary: '📚 Primary Resources',
            documentation: '📋 Official Documentation', 
            videos: '🎥 Video Content',
            labs: '🧪 Hands-on Labs'
        };
        return categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
    }

    toggleStationCompletion(stationId) {
        const station = this.findStationById(stationId);
        if (!station) return;

        if (!station.prerequisites || this.arePrerequisitesMet(station.prerequisites)) {
            const index = this.completedStations.indexOf(stationId);
            if (index > -1) {
                this.completedStations.splice(index, 1);
            } else {
                this.completedStations.push(stationId);
            }

            localStorage.setItem('completedStations', JSON.stringify(this.completedStations));
            this.updateStationVisuals();
            this.updateProgress();
            this.showStationDetails(stationId); // Refresh panel
        }
    }

    updateStationVisuals() {
        document.querySelectorAll('.station').forEach(stationElement => {
            const stationId = stationElement.getAttribute('data-station-id');
            const isCompleted = this.completedStations.includes(stationId);
            
            if (isCompleted) {
                stationElement.classList.add('completed');
            } else {
                stationElement.classList.remove('completed');
            }
        });
    }

    updateProgress() {
        Object.entries(learningData.tracks).forEach(([trackKey, track]) => {
            const completedInTrack = track.stations.filter(station => 
                this.completedStations.includes(station.id)
            ).length;
            
            const totalInTrack = track.stations.length;
            const percentage = (completedInTrack / totalInTrack) * 100;
            
            const progressFill = document.querySelector(`.progress-fill.${trackKey}`);
            const progressText = progressFill?.parentElement.parentElement.querySelector('.progress-text');
            
            if (progressFill && progressText) {
                progressFill.style.width = `${percentage}%`;
                progressText.textContent = `${completedInTrack}/${totalInTrack}`;
            }
        });
    }
}

// Initialize the subway map when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.subwayMap = new SubwayMap();
});
