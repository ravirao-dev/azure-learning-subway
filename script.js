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
        
        // Silicon track - spread out more horizontally and vertically
        this.drawTrackLine('silicon', [
            {x: 120, y: 180}, {x: 320, y: 180}, {x: 520, y: 180}, // Top horizontal - more spacing
            {x: 120, y: 280}, {x: 320, y: 280}, {x: 520, y: 280}, // Middle horizontal
            {x: 120, y: 380}, {x: 320, y: 380}, {x: 520, y: 380}, // Bottom horizontal
            {x: 120, y: 480}, {x: 320, y: 480}, {x: 520, y: 480}  // Lowest horizontal
        ]);

        // Silicon vertical connections
        this.drawTrackLine('silicon', [
            {x: 120, y: 180}, {x: 120, y: 480}, // Left vertical
            {x: 320, y: 180}, {x: 320, y: 480}, // Middle vertical
            {x: 520, y: 180}, {x: 520, y: 480}  // Right vertical
        ]);

        // Virtualization track - more spacing
        this.drawTrackLine('virtualization', [
            {x: 620, y: 180}, {x: 820, y: 180}, {x: 1020, y: 180}, // Top horizontal
            {x: 620, y: 280}, {x: 820, y: 280}, {x: 1020, y: 280}, // Middle horizontal
            {x: 620, y: 380}, {x: 820, y: 380}, {x: 1020, y: 380}, // Bottom horizontal
            {x: 620, y: 480}, {x: 820, y: 480}, {x: 1020, y: 480}  // Lowest horizontal
        ]);

        // Virtualization vertical connections
        this.drawTrackLine('virtualization', [
            {x: 620, y: 180}, {x: 620, y: 480},
            {x: 820, y: 180}, {x: 820, y: 480},
            {x: 1020, y: 180}, {x: 1020, y: 480}
        ]);

        // Security track - more spacing
        this.drawTrackLine('security', [
            {x: 1120, y: 180}, {x: 1320, y: 180}, // Top horizontal
            {x: 1120, y: 280}, {x: 1320, y: 280}, // Middle horizontal
            {x: 1120, y: 380}, {x: 1320, y: 380}, // Bottom horizontal
            {x: 1120, y: 480}, {x: 1320, y: 480}, // Lower horizontal
            {x: 1120, y: 580}, {x: 1320, y: 580}  // Lowest horizontal
        ]);

        // Security vertical connections
        this.drawTrackLine('security', [
            {x: 1120, y: 180}, {x: 1120, y: 580},
            {x: 1320, y: 180}, {x: 1320, y: 580}
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
        // Create proper arrow markers
        this.createArrowMarkers();
        
        // Define clearer arrow paths showing progression
        const progressionArrows = [
            // Silicon track progression arrows
            {from: {x: 220, y: 180}, to: {x: 270, y: 180}, track: 'silicon'}, // arch-basics to processor-fundamentals
            {from: {x: 420, y: 180}, to: {x: 470, y: 180}, track: 'silicon'}, // processor-fundamentals to modern-cpu
            {from: {x: 120, y: 230}, to: {x: 120, y: 250}, track: 'silicon'}, // arch-basics down to platform-arch
            {from: {x: 220, y: 280}, to: {x: 270, y: 280}, track: 'silicon'}, // platform-arch to memory-systems
            {from: {x: 420, y: 280}, to: {x: 470, y: 280}, track: 'silicon'}, // memory-systems to interconnects
            {from: {x: 220, y: 380}, to: {x: 270, y: 380}, track: 'silicon'}, // gpu-arch to ai-hardware
            {from: {x: 420, y: 380}, to: {x: 470, y: 380}, track: 'silicon'}, // ai-hardware to silicon-lifecycle
            {from: {x: 220, y: 480}, to: {x: 270, y: 480}, track: 'silicon'}, // hw-validation to vendor-partnership
            {from: {x: 420, y: 480}, to: {x: 470, y: 480}, track: 'silicon'}, // vendor-partnership to azure-silicon

            // Virtualization track progression arrows
            {from: {x: 720, y: 180}, to: {x: 770, y: 180}, track: 'virtualization'}, // virt-basics to hypervisor-arch
            {from: {x: 920, y: 180}, to: {x: 970, y: 180}, track: 'virtualization'}, // hypervisor-arch to cpu-virt
            {from: {x: 720, y: 280}, to: {x: 770, y: 280}, track: 'virtualization'}, // memory-virt to io-virt
            {from: {x: 720, y: 380}, to: {x: 770, y: 380}, track: 'virtualization'}, // hyperv-arch to enlightenments
            {from: {x: 920, y: 380}, to: {x: 970, y: 380}, track: 'virtualization'}, // enlightenments to kernel-integration

            // Security track progression arrows
            {from: {x: 1220, y: 180}, to: {x: 1270, y: 180}, track: 'security'}, // security-basics to os-security
            {from: {x: 1220, y: 280}, to: {x: 1270, y: 280}, track: 'security'}, // tpm to hw-security
            {from: {x: 1220, y: 380}, to: {x: 1270, y: 380}, track: 'security'}, // vbs-arch to device-guard
            {from: {x: 1220, y: 480}, to: {x: 1270, y: 480}, track: 'security'} // confidential-computing to hardware-tees
        ];

        // Draw progression arrows
        progressionArrows.forEach(arrow => {
            this.drawProgressionArrow(arrow.from, arrow.to, arrow.track);
        });
    }

    createArrowMarkers() {
        // Create SVG defs for arrow markers
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        
        const tracks = ['silicon', 'virtualization', 'security'];
        const colors = { silicon: '#3182ce', virtualization: '#e53e3e', security: '#38a169' };
        
        tracks.forEach(track => {
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', `arrow-${track}`);
            marker.setAttribute('viewBox', '0 0 10 10');
            marker.setAttribute('refX', '8');
            marker.setAttribute('refY', '3');
            marker.setAttribute('markerWidth', '6');
            marker.setAttribute('markerHeight', '6');
            marker.setAttribute('orient', 'auto');
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M0,0 L0,6 L9,3 z');
            path.setAttribute('fill', colors[track]);
            
            marker.appendChild(path);
            defs.appendChild(marker);
        });
        
        this.svg.appendChild(defs);
    }

    drawProgressionArrow(from, to, track) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', from.x);
        line.setAttribute('y1', from.y);
        line.setAttribute('x2', to.x);
        line.setAttribute('y2', to.y);
        line.setAttribute('stroke-width', '3');
        line.setAttribute('stroke', track === 'silicon' ? '#3182ce' : track === 'virtualization' ? '#e53e3e' : '#38a169');
        line.setAttribute('marker-end', `url(#arrow-${track})`);
        line.setAttribute('opacity', '0.8');
        this.svg.appendChild(line);
    }

    drawIntersectionLines() {
        // Connect intersection points with dotted lines - updated coordinates
        const intersections = [
            {from: {x: 520, y: 180}, to: {x: 620, y: 280}}, // modern-cpu to cpu-virtualization
            {from: {x: 320, y: 280}, to: {x: 820, y: 280}}, // memory-systems to memory-virtualization
            {from: {x: 1020, y: 380}, to: {x: 1120, y: 380}}, // kernel-integration to vbs-arch
            {from: {x: 520, y: 480}, to: {x: 1320, y: 480}}, // azure-silicon to azure-confidential
            {from: {x: 1020, y: 480}, to: {x: 1320, y: 580}}  // container-virt to confidential-containers
        ];

        intersections.forEach(intersection => {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', intersection.from.x);
            line.setAttribute('y1', intersection.from.y);
            line.setAttribute('x2', intersection.to.x);
            line.setAttribute('y2', intersection.to.y);
            line.setAttribute('stroke', '#805ad5');
            line.setAttribute('stroke-dasharray', '5,5');
            line.setAttribute('stroke-width', '3');
            line.setAttribute('opacity', '0.7');
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

        // Station label - positioned to avoid overlap
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', station.x);
        
        // Position text above or below based on row to reduce overlap
        const textY = this.getTextYPosition(station.y, station.x);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', '#2d3748');
        text.setAttribute('font-size', '10px');
        text.setAttribute('font-weight', '600');
        
        // Break long text into multiple lines
        const words = station.name.split(' ');
        if (words.length > 2) {
            // Create tspan for multi-line text
            const firstLine = words.slice(0, 2).join(' ');
            const secondLine = words.slice(2).join(' ');
            
            const tspan1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
            tspan1.setAttribute('x', station.x);
            tspan1.setAttribute('dy', '0');
            tspan1.textContent = firstLine;
            
            const tspan2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
            tspan2.setAttribute('x', station.x);
            tspan2.setAttribute('dy', '12');
            tspan2.textContent = secondLine;
            
            text.appendChild(tspan1);
            text.appendChild(tspan2);
        } else {
            text.textContent = station.name;
        }

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

    getTextYPosition(stationY, stationX) {
        // Alternate text position above/below to reduce overlap
        // Top row stations: text below
        if (stationY <= 200) return stationY + 25;
        // Bottom row stations: text above  
        if (stationY >= 450) return stationY - 15;
        // Middle stations: alternate based on x position
        return stationX % 400 < 200 ? stationY - 15 : stationY + 25;
    }

    // ... rest of the methods remain the same as before
    arePrerequisitesMet(prerequisites) {
        return prerequisites.every(prereq => this.completedStations.includes(prereq));
    }

    setupEventListeners() {
        this.svg.addEventListener('click', (e) => {
            const station = e.target.closest('.station');
            if (station) {
                const stationId = station.getAttribute('data-station-id');
                this.showStationDetails(stationId);
            }
        });

        document.getElementById('close-panel').addEventListener('click', () => {
            this.stationPanel.classList.remove('active');
        });

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

        if (station.description) {
            html += `<div class="station-info">
                <strong>About this topic:</strong><br>
                ${station.description}
            </div>`;
        }

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
            this.showStationDetails(stationId);
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

document.addEventListener('DOMContentLoaded', () => {
    window.subwayMap = new SubwayMap();
});
