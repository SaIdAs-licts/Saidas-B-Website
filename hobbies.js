// =========================================================================
// Hobbies 3D Sphere & Double Helix Gallery Engine (Refined Bounds & Physics)
// =========================================================================

class HobbiesEngine {
    constructor() {
        this.container = null;
        this.canvas = null;
        this.scene = null;
        this.camera = null;
        this.renderer = null;

        // Interactive 3D Objects
        this.cardGroup = null;
        this.cardMeshes = [];
        this.activeCategory = 'philately'; // Default category
        this.filteredData = [];

        // Interaction state
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(-999, -999);
        this.hoveredMesh = null;
        this.selectedItem = null;
        this.isModalOpen = false;

        // Pointer Drag & Rotation Inertia
        this.isDragging = false;
        this.previousMousePosition = { x: 0, y: 0 };
        this.rotationVelocity = { x: 0, y: 0.002 }; // Gentle auto-spin
        this.targetRotation = { x: 0, y: 0 };
        this.currentRotation = { x: 0, y: 0 };
        this.dampingFactor = 0.05;

        // Animation target coordinates for camera
        // Camera positioned at Z=19 with FOV 42 for complete viewport clearance
        this.defaultCameraPos = new THREE.Vector3(0, 0, 19);
        this.cameraTargetPos = new THREE.Vector3(0, 0, 19);

        // Morph Animation State
        this.isTransitioning = false;

        // Textures Cache
        this.textureCache = new Map();

        // Custom Follower Cursor
        this.cursorEl = null;

        this.initialized = false;
    }

    init() {
        if (this.initialized) return;

        this.container = document.getElementById('hobbies-canvas-container');
        if (!this.container || typeof THREE === 'undefined') return;

        this.cursorEl = document.getElementById('custom-cursor');

        // Scene Setup
        this.scene = new THREE.Scene();

        // Camera Setup (Strict Bounds Setup)
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 1000);
        this.camera.position.copy(this.defaultCameraPos);

        // Renderer Setup
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        this.canvas = this.renderer.domElement;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
        dirLight.position.set(20, 30, 20);
        this.scene.add(dirLight);

        const fillLight = new THREE.DirectionalLight(0xb8fb01, 0.25);
        fillLight.position.set(-20, -20, -10);
        this.scene.add(fillLight);

        // Group container for all 3D cards
        this.cardGroup = new THREE.Group();
        this.scene.add(this.cardGroup);

        // Bind Category Switcher Buttons
        this.bindCategoryButtons();

        // Bind Mouse & Touch Pointer Events
        this.bindEvents();

        // Build Initial 3D Formation
        this.switchCategory(this.activeCategory);

        // Setup Modal Listeners
        this.setupModalListeners();

        // Start Animation Loop
        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);

        this.initialized = true;
    }

    bindCategoryButtons() {
        const btns = document.querySelectorAll('.hobby-cat-pill');
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.currentTarget.getAttribute('data-category');
                if (cat && cat !== this.activeCategory) {
                    btns.forEach(b => b.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    this.switchCategory(cat);
                }
            });
        });
    }

    switchCategory(category) {
        this.activeCategory = category;

        // Filter data items
        const rawData = window.hobbiesData || [];
        this.filteredData = rawData.filter(d => d.category === category);

        // Replicate dataset to populate ~28-32 cards for rich 3D density
        let displayList = [...this.filteredData];
        while (displayList.length < 28 && displayList.length > 0) {
            displayList = displayList.concat(this.filteredData);
        }

        this.build3DFormation(displayList, category);
    }

    build3DFormation(items, category) {
        // Clear previous card meshes
        while (this.cardGroup.children.length > 0) {
            const child = this.cardGroup.children[0];
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
                else child.material.dispose();
            }
            this.cardGroup.remove(child);
        }
        this.cardMeshes = [];

        const count = items.length;
        // World unit plane geometry (1.15 x 1.45)
        const planeGeo = new THREE.PlaneGeometry(1.15, 1.45);

        items.forEach((item, i) => {
            const texture = this.generateCardTexture(item, i);
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true
            });

            const mesh = new THREE.Mesh(planeGeo, material);
            mesh.userData = { item, index: i, originalCategory: category };

            let pos = new THREE.Vector3();
            let rot = new THREE.Euler();

            if (category === 'philately') {
                // 1. FLOATING GLOBE / SPHERE FORMATION (Philately & Numismatics)
                // Target radius = 5.0
                const radius = 5.0;
                const phi = Math.acos(-1 + (2 * (i + 0.5)) / count);
                const theta = Math.sqrt(count * Math.PI) * phi;

                pos.x = radius * Math.cos(theta) * Math.sin(phi);
                pos.y = radius * Math.sin(theta) * Math.sin(phi);
                pos.z = radius * Math.cos(phi);

                mesh.position.copy(pos);
                // Orient card facing directly outwards from sphere origin
                mesh.lookAt(0, 0, 0);
                mesh.rotation.y += Math.PI; // 180° flip so front faces out
            } else {
                // 2. DOUBLE HELIX / VERTICAL SPIRAL FORMATION (Sketching & Art)
                // Target radius = 4.6, Height clamped strictly between y = -3.4 and y = 3.4
                const radius = 4.6;
                const angle = i * 0.48;
                const y = -3.4 + (i / count) * 6.8;
                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);

                pos.set(x, y, z);
                mesh.position.copy(pos);

                // Tangent rotation facing outward along spiral arc
                mesh.rotation.y = -angle + Math.PI / 2;
            }

            // Save target positions for smooth lerp
            mesh.userData.baseScale = new THREE.Vector3(1, 1, 1);
            mesh.userData.targetScale = new THREE.Vector3(1, 1, 1);

            this.cardGroup.add(mesh);
            this.cardMeshes.push(mesh);
        });
    }

    generateCardTexture(item, instanceIdx) {
        const cacheKey = `${item.id}-${instanceIdx}`;
        if (this.textureCache.has(cacheKey)) {
            return this.textureCache.get(cacheKey);
        }

        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 646;
        const ctx = canvas.getContext('2d');

        // Outer Frame (Deckled Cream Paper / Stamp Frame)
        ctx.fillStyle = '#f7f6f2';
        ctx.fillRect(0, 0, 512, 646);

        // Outer Dark Border Line
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 6;
        ctx.strokeRect(6, 6, 500, 634);

        // Inner Graphic Stage Area
        const innerX = 32;
        const innerY = 32;
        const innerW = 448;
        const innerH = 460;

        // Draw Graphic Gradient Background
        const grad = ctx.createLinearGradient(innerX, innerY, innerX + innerW, innerY + innerH);
        grad.addColorStop(0, item.cardColor || '#1c2833');
        grad.addColorStop(1, '#050a0e');
        ctx.fillStyle = grad;
        ctx.fillRect(innerX, innerY, innerW, innerH);

        // Stamp Perforations for Philately Items
        if (item.category === 'philately') {
            ctx.fillStyle = '#f7f6f2';
            const perfCountX = 14;
            const perfCountY = 16;
            const stepX = innerW / perfCountX;
            const stepY = innerH / perfCountY;

            for (let x = 0; x <= perfCountX; x++) {
                ctx.beginPath();
                ctx.arc(innerX + x * stepX, innerY, 8, 0, Math.PI * 2);
                ctx.arc(innerX + x * stepX, innerY + innerH, 8, 0, Math.PI * 2);
                ctx.fill();
            }
            for (let y = 0; y <= perfCountY; y++) {
                ctx.beginPath();
                ctx.arc(innerX, innerY + y * stepY, 8, 0, Math.PI * 2);
                ctx.arc(innerX + innerW, innerY + y * stepY, 8, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Inner Artwork Graphics & Fine Line Patterns
        ctx.save();
        ctx.rect(innerX + 10, innerY + 10, innerW - 20, innerH - 20);
        ctx.clip();

        ctx.strokeStyle = item.accentColor || '#b8fb01';
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.35;

        if (item.category === 'sketching') {
            for (let l = 0; l < 18; l++) {
                ctx.beginPath();
                ctx.moveTo(innerX + 20, innerY + l * 25);
                ctx.lineTo(innerX + innerW - 20, innerY + innerH - (l * 15));
                ctx.stroke();
            }
        } else {
            for (let i = 0; i < 8; i++) {
                ctx.beginPath();
                ctx.ellipse(innerX + innerW / 2, innerY + innerH / 2, 80 + i * 15, 50 + i * 20, Math.PI / 4, 0, Math.PI * 2);
                ctx.stroke();
            }
        }

        ctx.globalAlpha = 1.0;
        ctx.restore();

        // Title & Badge Text on Canvas
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 22px "Manrope", sans-serif';
        ctx.fillText(item.badge || item.categoryLabel, innerX + 20, innerY + 45);

        ctx.fillStyle = item.accentColor || '#b8fb01';
        ctx.font = 'bold 16px "Noto Sans Mono", monospace';
        ctx.fillText(`#0${item.index || instanceIdx + 1} // ARCHIVE SPECIMEN`, innerX + 20, innerY + 75);

        // Center Icon Symbol
        ctx.fillStyle = item.accentColor || '#ffffff';
        ctx.font = '64px "Font Awesome 6 Free", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const iconChar = item.category === 'philately' ? '🏷️' : '✏️';
        ctx.fillText(iconChar, innerX + innerW / 2, innerY + innerH / 2 + 10);

        // Bottom Metadata Caption (Paper / Polaroid Margin)
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 18px "Manrope", sans-serif';

        const truncateTitle = item.title.length > 28 ? item.title.substring(0, 26) + '...' : item.title;
        ctx.fillText(truncateTitle, innerX, innerY + innerH + 42);

        ctx.fillStyle = '#666666';
        ctx.font = 'bold 12px "Noto Sans Mono", monospace';
        ctx.fillText(`${item.era || 'VINTAGE ARCHIVE'} • ${item.categoryLabel}`, innerX, innerY + innerH + 68);

        ctx.fillStyle = '#b8fb01';
        ctx.fillRect(innerX, innerY + innerH + 82, innerW, 4);

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        this.textureCache.set(cacheKey, texture);
        return texture;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.onResize());

        const dom = this.container;

        dom.addEventListener('pointerdown', (e) => {
            this.isDragging = true;
            this.previousMousePosition = { x: e.clientX, y: e.clientY };
            if (this.cursorEl) this.cursorEl.classList.add('is-dragging');
        });

        window.addEventListener('pointermove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

            if (this.isDragging) {
                const deltaX = e.clientX - this.previousMousePosition.x;
                const deltaY = e.clientY - this.previousMousePosition.y;

                this.rotationVelocity.y = deltaX * 0.004;
                this.rotationVelocity.x = deltaY * 0.004;

                this.targetRotation.y += deltaX * 0.004;
                this.targetRotation.x += deltaY * 0.004;

                this.previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        window.addEventListener('pointerup', () => {
            this.isDragging = false;
            if (this.cursorEl) this.cursorEl.classList.remove('is-dragging');
        });

        // Click event for selecting cards
        dom.addEventListener('click', () => {
            if (this.isModalOpen) return;

            this.raycaster.setFromCamera(this.mouse, this.camera);
            const intersects = this.raycaster.intersectObjects(this.cardMeshes);

            if (intersects.length > 0) {
                const clickedMesh = intersects[0].object;
                this.openDetailModal(clickedMesh.userData.item, clickedMesh);
            }
        });
    }

    onResize() {
        if (!this.camera || !this.renderer) return;

        const aspect = window.innerWidth / window.innerHeight;
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();

        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate);

        // Smooth rotation damping inertia
        if (!this.isDragging) {
            this.rotationVelocity.y *= 0.95;
            this.rotationVelocity.x *= 0.95;
            this.targetRotation.y += this.rotationVelocity.y + 0.0012; // Slow ambient spin
            this.targetRotation.x += this.rotationVelocity.x;
        }

        this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * this.dampingFactor;
        this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * this.dampingFactor;

        if (this.cardGroup) {
            this.cardGroup.rotation.x = this.currentRotation.x;
            this.cardGroup.rotation.y = this.currentRotation.y;
        }

        // Raycast Hover & Scale Interpolation
        if (!this.isModalOpen) {
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const intersects = this.raycaster.intersectObjects(this.cardMeshes);

            if (intersects.length > 0) {
                const topMesh = intersects[0].object;
                if (this.hoveredMesh !== topMesh) {
                    if (this.hoveredMesh) {
                        this.hoveredMesh.userData.targetScale.set(1, 1, 1);
                    }
                    this.hoveredMesh = topMesh;
                    this.hoveredMesh.userData.targetScale.set(1.15, 1.15, 1.15);
                    if (this.cursorEl) this.cursorEl.setAttribute('data-cursor-text', 'CLICK ↗');
                }
            } else {
                if (this.hoveredMesh) {
                    this.hoveredMesh.userData.targetScale.set(1, 1, 1);
                    this.hoveredMesh = null;
                }
                if (this.cursorEl) this.cursorEl.removeAttribute('data-cursor-text');
            }

            this.cardMeshes.forEach(m => {
                m.scale.lerp(m.userData.targetScale, 0.1);
            });
        }

        // Camera position lerp
        this.camera.position.lerp(this.cameraTargetPos, 0.05);

        // Render
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    // =========================================================================
    // Detail View Modal Logic
    // =========================================================================

    setupModalListeners() {
        const closeBtn = document.getElementById('hobbies-modal-close');
        const prevBtn = document.getElementById('modal-prev-btn');
        const nextBtn = document.getElementById('modal-next-btn');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeDetailModal());
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.navigateModal(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.navigateModal(1));
        }

        window.addEventListener('keydown', (e) => {
            if (!this.isModalOpen) return;
            if (e.key === 'Escape') this.closeDetailModal();
            else if (e.key === 'ArrowLeft') this.navigateModal(-1);
            else if (e.key === 'ArrowRight') this.navigateModal(1);
        });

        // 3D Cursor Tilt Effect on Modal Showcase Card
        const artFrame = document.getElementById('modal-art-frame');
        if (artFrame) {
            artFrame.addEventListener('mousemove', (e) => {
                const rect = artFrame.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotX = -(y / (rect.height / 2)) * 12;
                const rotY = (x / (rect.width / 2)) * 12;
                artFrame.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
            });

            artFrame.addEventListener('mouseleave', () => {
                artFrame.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1.0)';
            });
        }
    }

    openDetailModal(item, targetMesh) {
        this.selectedItem = item;
        this.isModalOpen = true;

        if (targetMesh) {
            const worldPos = new THREE.Vector3();
            targetMesh.getWorldPosition(worldPos);
            // Fly camera closer in world coordinates (Z = 4.5)
            this.cameraTargetPos.copy(worldPos).add(new THREE.Vector3(0, 0, 4.5));
        }

        this.updateModalUI(item);
        this.buildFilmstripCarousel(item);

        const modal = document.getElementById('hobbies-modal');
        if (modal) {
            modal.classList.add('is-active');
            modal.style.display = 'flex';
        }

        if (this.cursorEl) this.cursorEl.removeAttribute('data-cursor-text');
    }

    closeDetailModal() {
        this.isModalOpen = false;
        this.selectedItem = null;

        this.cameraTargetPos.copy(this.defaultCameraPos);

        const modal = document.getElementById('hobbies-modal');
        if (modal) {
            modal.classList.remove('is-active');
            setTimeout(() => {
                if (!this.isModalOpen) modal.style.display = 'none';
            }, 300);
        }
    }

    navigateModal(direction) {
        if (!this.selectedItem || this.filteredData.length === 0) return;

        const currentIndex = this.filteredData.findIndex(d => d.id === this.selectedItem.id);
        if (currentIndex === -1) return;

        let nextIndex = currentIndex + direction;
        if (nextIndex < 0) nextIndex = this.filteredData.length - 1;
        if (nextIndex >= this.filteredData.length) nextIndex = 0;

        const nextItem = this.filteredData[nextIndex];
        this.selectedItem = nextItem;

        this.updateModalUI(nextItem);
        this.highlightFilmstripItem(nextItem.id);
    }

    updateModalUI(item) {
        const headerPath = document.getElementById('modal-header-path');
        const currentIndex = this.filteredData.findIndex(d => d.id === item.id) + 1;
        const totalCount = this.filteredData.length;
        if (headerPath) {
            headerPath.textContent = `${item.categoryLabel} // ${currentIndex.toString().padStart(2, '0')} / ${totalCount.toString().padStart(2, '0')}`;
        }

        const artFrame = document.getElementById('modal-art-frame');
        const artTitle = document.getElementById('modal-art-title');
        const artEra = document.getElementById('modal-art-era');
        const artBadge = document.getElementById('modal-art-badge');

        if (artFrame) {
            artFrame.style.background = `linear-gradient(135deg, ${item.cardColor || '#1c2833'}, #050a0e)`;
        }
        if (artTitle) artTitle.textContent = item.title;
        if (artEra) artEra.textContent = `${item.era} • ${item.scale}`;
        if (artBadge) artBadge.textContent = item.badge || item.categoryLabel;

        const specTitle = document.getElementById('modal-spec-title');
        const specNarrative = document.getElementById('modal-spec-narrative');
        const specList = document.getElementById('modal-spec-list');

        if (specTitle) specTitle.textContent = item.title;
        if (specNarrative) specNarrative.textContent = item.narrative;

        if (specList && item.specs) {
            specList.innerHTML = item.specs.map(s => `
                <div class="spec-row">
                    <span class="spec-label">${s.label}</span>
                    <span class="spec-value">${s.value}</span>
                </div>
            `).join('');
        }
    }

    buildFilmstripCarousel(activeItem) {
        const carouselContainer = document.getElementById('modal-filmstrip-inner');
        if (!carouselContainer) return;

        carouselContainer.innerHTML = '';

        this.filteredData.forEach(item => {
            const thumb = document.createElement('div');
            thumb.className = `filmstrip-thumb ${item.id === activeItem.id ? 'is-active' : ''}`;
            thumb.setAttribute('data-id', item.id);

            thumb.innerHTML = `
                <div class="thumb-preview" style="background: linear-gradient(135deg, ${item.cardColor || '#1c2833'}, #000);">
                    <span class="thumb-idx">#0${item.index}</span>
                </div>
                <span class="thumb-title">${item.title}</span>
            `;

            thumb.addEventListener('click', () => {
                this.selectedItem = item;
                this.updateModalUI(item);
                this.highlightFilmstripItem(item.id);
            });

            carouselContainer.appendChild(thumb);
        });
    }

    highlightFilmstripItem(itemId) {
        const thumbs = document.querySelectorAll('.filmstrip-thumb');
        thumbs.forEach(t => {
            if (t.getAttribute('data-id') === itemId) {
                t.classList.add('is-active');
                t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                t.classList.remove('is-active');
            }
        });
    }

    onTabMount() {
        this.onResize();
        if (this.canvas) this.canvas.style.display = 'block';
    }
}

window.hobbiesEngine = new HobbiesEngine();

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#hobbies' || document.body.classList.contains('theme-hobbies')) {
        window.hobbiesEngine.init();
    }
});
