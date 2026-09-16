// =========================================================================
// Projects Section Engine & Data Model (Onda Studio Architecture)
// =========================================================================

const projectsData = [
    {
        id: 'bookkeeping',
        title: 'Digital Bookkeeping System',
        category: 'FINANCE & AUDIT',
        categorySlug: 'finance',
        roleTags: ['WEB APP', 'LEDGER MGMT', 'FINANCIAL STATEMENTS', 'VANILLA JS'],
        industry: 'FINANCE / ACCOUNTING',
        indexNum: '01',
        icon: 'fa-book',
        bgGradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
        accentColor: '#38ef7d',
        demoUrl: 'https://saidas-licts.github.io/book-keeping/',
        githubUrl: 'https://github.com/SaIdAs-licts/book-keeping',
        brief: 'A clean, responsive web application engineered for real-time transaction recording, automated double-entry ledger management, and balance sheet visualization.',
        techStack: ['HTML5', 'CSS3', 'JAVASCRIPT', 'LOCALSTORAGE', 'CHART.JS'],
        deepDive: {
            problem: 'Small enterprises and individual accountants often struggle with bloated, expensive software that introduces high friction for basic daily balance reconciliations and ledger auditing.',
            architecture: 'Engineered with a lightweight client-side state machine utilizing LocalStorage persistence and automated double-entry debit/credit balancing algorithms. Integrated Chart.js widgets for immediate visual analysis of income vs. expenditure trajectories.',
            outcomes: 'Reduced entry logging latency by 65%, achieved 100% offline operational stability, and provided instant balance sheet reconciliation with zero backend overhead.'
        },
        storytelling: {
            quote: 'Automating ledger integrity with pure web performance and zero bloat.',
            stat1Val: '65%',
            stat1Label: 'Faster Logging',
            stat2Val: '100%',
            stat2Label: 'Offline Capable',
            previewBadge: 'Web App'
        }
    },
    {
        id: 'stockwatch',
        title: 'Stock-Watch Equity Tracker',
        category: 'FINANCE & AUDIT',
        categorySlug: 'finance',
        roleTags: ['FINANCIAL ANALYTICS', 'REAL-TIME EQUITIES', 'WATCHLIST MGMT'],
        industry: 'FINANCE / EQUITIES',
        indexNum: '02',
        icon: 'fa-chart-line',
        bgGradient: 'linear-gradient(135deg, #00c6ff, #0072ff)',
        accentColor: '#00c6ff',
        demoUrl: 'https://stock-watch-dnbkiy952-saidas-licts-projects.vercel.app/',
        githubUrl: 'https://github.com/SaIdAs-licts/Stock-Watch',
        brief: 'A real-time financial stock monitoring portal that tracks market equities, visualizes price volatility, and manages dynamic watchlists across trading sessions.',
        techStack: ['REACT', 'FINANCIAL APIS', 'TAILWIND CSS', 'VERCEL', 'RECHARTS'],
        deepDive: {
            problem: 'Retail investors and finance students require a clutter-free analytics terminal to monitor stock price movements, compare key valuation metrics, and organize watchlists without paywalled delays.',
            architecture: 'Built on React with asynchronous financial data fetching, memory caching layers, and responsive interactive charting modules to deliver live market candlestick and trend visualization.',
            outcomes: 'Delivered sub-500ms ticker refresh updates, multi-asset portfolio tracking, and seamless cross-platform responsive monitoring.'
        },
        storytelling: {
            quote: 'Streamlined market intelligence engineered for quick equity analysis.',
            stat1Val: '< 500ms',
            stat1Label: 'Update Latency',
            stat2Val: 'Real-Time',
            stat2Label: 'Equities Tracked',
            previewBadge: 'React Dashboard'
        }
    },
    {
        id: 'dairy-scba',
        title: 'Dairy Farm Economic SCBA & Simulation',
        category: 'OPERATIONS / RESEARCH',
        categorySlug: 'operations',
        roleTags: ['DYNAMIC SIMULATION', 'VENSIM', 'NPV & BCR', 'SENSITIVITY MODELING'],
        industry: 'OPERATIONS / RESEARCH',
        indexNum: '03',
        icon: 'fa-project-diagram',
        bgGradient: 'linear-gradient(135deg, #e96443, #904e95)',
        accentColor: '#e96443',
        demoUrl: '',
        githubUrl: '',
        brief: 'Social Cost Benefit Analysis (SCBA) & 48-Month Vensim Dynamic Simulation Model evaluating small-scale dairy farming economic viability.',
        techStack: ['VENSIM', 'SPSS', 'EXCEL SCBA', 'STATISTICS', 'SYSTEM DYNAMICS'],
        deepDive: {
            problem: 'Small-scale agricultural ventures face intense feed cost volatility and shifting milk yields, making static financial plans unreliable for long-term capital investments.',
            architecture: 'Executed a formal Social Cost Benefit Analysis (SCBA) calculating Net Present Value (NPV) and Benefit-Cost Ratio (BCR). Formulated a 48-month Stock-and-Flow dynamic model in Vensim coupled with SPSS statistical sensitivity analysis (±10% variance).',
            outcomes: 'Identified critical leverage variables controlling project profitability, enabling data-backed operational risk mitigation for rural agricultural planning.'
        },
        storytelling: {
            quote: 'Uncovering long-term financial sustainability through dynamic system modeling.',
            stat1Val: '48 Months',
            stat1Label: 'Simulated Horizon',
            stat2Val: '±10%',
            stat2Label: 'Sensitivity Range',
            previewBadge: 'Research Project'
        }
    },
    {
        id: 'industrial-audit',
        title: 'Industrial Cost & Inventory Audit',
        category: 'OPERATIONS / RESEARCH',
        categorySlug: 'operations',
        roleTags: ['INDUSTRIAL ENG', 'BOM RE-ENGINEERING', 'WORKING CAPITAL', 'SIX SIGMA'],
        industry: 'OPERATIONS / AUDIT',
        indexNum: '04',
        icon: 'fa-industry',
        bgGradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
        accentColor: '#11998e',
        demoUrl: '',
        githubUrl: '',
        brief: 'Plant operations audit, Bill of Materials (BOM) re-engineering, and working capital optimization during apprenticeship at Kerala State Drugs & Pharmaceutical Ltd.',
        techStack: ['EXCEL ADVANCED', 'BOM MODELING', 'PROCESS AUDITING', 'SIX SIGMA', 'OPERATIONS'],
        deepDive: {
            problem: 'Pharmaceutical manufacturing facilities often incur unnecessary holding costs and production delays caused by outdated material standardizations and unaligned departmental tracking.',
            architecture: 'Audited daily shop-floor operations across Production, Purchase, Warehouse, and Finance departments. Engineered precise dynamic Bill of Materials (BOMs) and conducted machine utilization waste reviews.',
            outcomes: 'Optimized raw material procurement cycles, rectified financial ledger discrepancies in plant logs, and improved working capital efficiency.'
        },
        storytelling: {
            quote: 'Precision industrial engineering applied to pharmaceutical manufacturing operations.',
            stat1Val: 'BOM',
            stat1Label: 'Re-Engineered',
            stat2Val: '4 Depts',
            stat2Label: 'Synchronized',
            previewBadge: 'Industrial Audit'
        }
    },
    {
        id: 'quant-valuation',
        title: 'Equity Market Valuation & Quant Model',
        category: 'DATA & QUANT',
        categorySlug: 'data',
        roleTags: ['EQUITY RESEARCH', 'DCF VALUATION', 'QUANTITATIVE MODELING', 'PYTHON'],
        industry: 'DATA & QUANT',
        indexNum: '05',
        icon: 'fa-calculator',
        bgGradient: 'linear-gradient(135deg, #8E2DE2, #4A00E0)',
        accentColor: '#8E2DE2',
        demoUrl: '',
        githubUrl: '',
        brief: 'Quantitative evaluation framework and Discounted Cash Flow (DCF) model for analyzing financial markets and calculating corporate intrinsic value.',
        techStack: ['PYTHON', 'PANDAS', 'DCF MODELING', 'CORPORATE FINANCE', 'SEABORN'],
        deepDive: {
            problem: 'Financial valuation requires stress-testing cash flow growth assumptions against fluctuating discount rates (WACC) to avoid overvaluing equities in volatile macroeconomic shifts.',
            architecture: 'Constructed multi-stage Discounted Cash Flow (DCF) modeling tools in Python/Excel featuring automated terminal value calculations, sensitivity tables, and financial statement ratio decomposition.',
            outcomes: 'Generated high-confidence intrinsic value estimates and margin-of-safety matrices across target listed securities.'
        },
        storytelling: {
            quote: 'Rigorous quantitative framework for intrinsic value and cash flow modeling.',
            stat1Val: 'Multi-Stage',
            stat1Label: 'DCF Engine',
            stat2Val: 'Automated',
            stat2Label: 'Sensitivity Grid',
            previewBadge: 'Quant Model'
        }
    }
];

class ProjectsEngine {
    constructor() {
        this.projects = projectsData;
        this.filteredProjects = [...projectsData];
        this.activeIndex = 0;
        this.activeFilter = 'ALL';
        this.isDrawerOpen = false;

        // Wheel & Touch Drag State
        this.isDragging = false;
        this.startX = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.wheelCooldown = false;

        this.init();
    }

    init() {
        this.renderDomStructure();
        this.bindEvents();
        // Delay slightly for DOM layout calculation
        setTimeout(() => {
            this.updateCarousel(false);
        }, 60);
    }

    renderDomStructure() {
        const section = document.getElementById('projects');
        if (!section) return;

        section.innerHTML = `
            <div class="projects-container">
                <!-- Header & Category Filter Bar -->
                <div class="projects-filter-bar">
                    <div class="filter-label">
                        <span class="mono-tag font-mono">FILTER BY</span>
                    </div>
                    <div class="filter-pills-row" id="projects-filter-pills">
                        <button class="filter-btn active" data-category="ALL">
                            <span class="btn-text">ALL</span>
                            <span class="toggle-x"><i class="fas fa-times"></i></span>
                        </button>
                        <button class="filter-btn" data-category="FINANCE & AUDIT">
                            <span class="btn-text">FINANCE & AUDIT</span>
                            <span class="toggle-x"><i class="fas fa-times"></i></span>
                        </button>
                        <button class="filter-btn" data-category="DATA & QUANT">
                            <span class="btn-text">DATA & QUANT</span>
                            <span class="toggle-x"><i class="fas fa-times"></i></span>
                        </button>
                        <button class="filter-btn" data-category="OPERATIONS / RESEARCH">
                            <span class="btn-text">OPERATIONS / RESEARCH</span>
                            <span class="toggle-x"><i class="fas fa-times"></i></span>
                        </button>
                    </div>
                </div>

                <!-- Showcase Header (Title above active card) -->
                <div class="projects-active-header" id="projects-active-header">
                    <h2 class="active-project-title" id="active-project-title">Digital Bookkeeping System</h2>
                </div>

                <!-- 3-Item Viewport Carousel Area -->
                <div class="projects-viewport" id="projects-viewport">
                    <div class="projects-track" id="projects-track">
                        <!-- Project Cards rendered dynamically -->
                    </div>
                </div>

                <!-- Central Metadata Arrangement (Under active media frame) -->
                <div class="projects-active-meta" id="projects-active-meta">
                    <div class="meta-left">
                        <span class="active-index-dot" id="active-index-dot">• 01 / 05</span>
                    </div>
                    <div class="meta-right">
                        <div class="meta-line-1" id="active-meta-industry">INDUSTRY: FINANCE / ACCOUNTING</div>
                        <div class="meta-line-2" id="active-meta-role">ROLE: WEB APP | LEDGER MGMT | FINANCIAL STATEMENTS</div>
                    </div>
                </div>
            </div>

            <!-- Deep-Dive Project Drawer / Case Study Overlay -->
            <div class="project-drawer" id="project-drawer">
                <div class="drawer-inner" id="drawer-inner">
                    <!-- Case study content rendered on click -->
                </div>
            </div>
        `;

        this.renderTrack();
    }

    renderTrack() {
        const track = document.getElementById('projects-track');
        if (!track) return;

        track.innerHTML = '';

        if (this.filteredProjects.length === 0) {
            track.innerHTML = `<div class="no-projects-msg">No projects match the selected category.</div>`;
            return;
        }

        this.filteredProjects.forEach((proj, idx) => {
            const card = document.createElement('div');
            card.className = `project-card-slot ${idx === this.activeIndex ? 'is-active' : ''}`;
            card.dataset.index = idx;
            card.dataset.id = proj.id;

            card.innerHTML = `
                <div class="card-inner-frame" style="background: ${proj.bgGradient}">
                    <div class="card-media-content">
                        <div class="media-icon-badge">
                            <i class="fas ${proj.icon}"></i>
                        </div>
                        <div class="media-badge-tag">${proj.storytelling.previewBadge}</div>
                        <div class="media-hover-overlay">
                            <span class="hover-view-tag">OPEN CASE STUDY <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
                <div class="card-outer-meta">
                    <span class="card-outer-index">${proj.indexNum}</span>
                </div>
            `;

            track.appendChild(card);
        });
    }

    bindEvents() {
        const filterContainer = document.getElementById('projects-filter-pills');
        const viewport = document.getElementById('projects-viewport');

        // Filter button clicks
        if (filterContainer) {
            filterContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.filter-btn');
                if (!btn) return;
                const cat = btn.dataset.category;
                
                // If clicking already active filter, clear to ALL
                if (this.activeFilter === cat && cat !== 'ALL') {
                    this.applyFilter('ALL');
                } else {
                    this.applyFilter(cat);
                }
            });
        }

        // Viewport click event (Card snapping & Drawer opening)
        if (viewport) {
            viewport.addEventListener('click', (e) => {
                const slot = e.target.closest('.project-card-slot');
                if (!slot) return;
                const clickedIdx = parseInt(slot.dataset.index, 10);

                if (clickedIdx === this.activeIndex) {
                    // Click active card -> Open Case Study Drawer
                    this.openDrawer(this.filteredProjects[this.activeIndex]);
                } else {
                    // Click side card -> Snap to center
                    this.goToIndex(clickedIdx);
                }
            });

            // Wheel / Trackpad horizontal delta hijacking
            viewport.addEventListener('wheel', (e) => {
                if (this.isDrawerOpen) return;
                
                const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                if (Math.abs(delta) > 18 && !this.wheelCooldown) {
                    e.preventDefault();
                    this.wheelCooldown = true;
                    if (delta > 0) {
                        this.next();
                    } else {
                        this.prev();
                    }
                    setTimeout(() => { this.wheelCooldown = false; }, 450);
                }
            }, { passive: false });

            // Touch / Drag events
            viewport.addEventListener('pointerdown', (e) => {
                if (this.isDrawerOpen) return;
                this.isDragging = true;
                this.startX = e.clientX;
                viewport.classList.add('is-dragging');
            });

            window.addEventListener('pointermove', (e) => {
                if (!this.isDragging) return;
                const diffX = e.clientX - this.startX;
                if (Math.abs(diffX) > 60) {
                    this.isDragging = false;
                    viewport.classList.remove('is-dragging');
                    if (diffX < 0) {
                        this.next();
                    } else {
                        this.prev();
                    }
                }
            });

            window.addEventListener('pointerup', () => {
                this.isDragging = false;
                if (viewport) viewport.classList.remove('is-dragging');
            });
        }

        // Custom Cursor Interaction Hooks
        const cursor = document.getElementById('custom-cursor');
        if (cursor && viewport) {
            viewport.addEventListener('mousemove', (e) => {
                const slot = e.target.closest('.project-card-slot');
                if (!slot) {
                    cursor.classList.remove('cursor-open-project', 'cursor-chev-left', 'cursor-chev-right');
                    return;
                }
                const idx = parseInt(slot.dataset.index, 10);
                if (idx === this.activeIndex) {
                    cursor.classList.add('cursor-open-project');
                    cursor.classList.remove('cursor-chev-left', 'cursor-chev-right');
                } else if (idx < this.activeIndex) {
                    cursor.classList.add('cursor-chev-left');
                    cursor.classList.remove('cursor-open-project', 'cursor-chev-right');
                } else {
                    cursor.classList.add('cursor-chev-right');
                    cursor.classList.remove('cursor-open-project', 'cursor-chev-left');
                }
            });

            viewport.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-open-project', 'cursor-chev-left', 'cursor-chev-right');
            });
        }

        // Handle window resize recalculation
        window.addEventListener('resize', () => {
            this.updateCarousel(false);
        });
    }

    applyFilter(cat) {
        this.activeFilter = cat;
        
        // Update filter buttons UI
        const btns = document.querySelectorAll('#projects-filter-pills .filter-btn');
        btns.forEach(btn => {
            if (btn.dataset.category === cat) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Filter projects
        if (cat === 'ALL') {
            this.filteredProjects = [...this.projects];
        } else {
            this.filteredProjects = this.projects.filter(p => p.category === cat);
        }

        this.activeIndex = 0;

        // FLIP animation effect on track container
        const track = document.getElementById('projects-track');
        if (track) {
            track.style.opacity = '0';
            track.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.renderTrack();
                this.updateCarousel(true);
                track.style.opacity = '1';
                track.style.transform = 'scale(1)';
            }, 200);
        }
    }

    goToIndex(index) {
        if (index < 0 || index >= this.filteredProjects.length) return;
        this.activeIndex = index;
        this.updateCarousel(true);
    }

    next() {
        if (this.activeIndex < this.filteredProjects.length - 1) {
            this.goToIndex(this.activeIndex + 1);
        }
    }

    prev() {
        if (this.activeIndex > 0) {
            this.goToIndex(this.activeIndex - 1);
        }
    }

    updateCarousel(animate = true) {
        const slots = document.querySelectorAll('.project-card-slot');
        const track = document.getElementById('projects-track');
        if (!slots.length || !this.filteredProjects.length) return;

        const currentProj = this.filteredProjects[this.activeIndex];

        // 1. Update Title above Active Card (Vertical Slide Fade Animation)
        const titleEl = document.getElementById('active-project-title');
        if (titleEl && currentProj) {
            if (animate) {
                titleEl.classList.add('animating-title');
                setTimeout(() => {
                    titleEl.textContent = currentProj.title;
                    titleEl.classList.remove('animating-title');
                }, 200);
            } else {
                titleEl.textContent = currentProj.title;
            }
        }

        // 2. Update Central Metadata Underneath Frame
        const indexDotEl = document.getElementById('active-index-dot');
        const industryEl = document.getElementById('active-meta-industry');
        const roleEl = document.getElementById('active-meta-role');

        if (indexDotEl && currentProj) {
            const formattedCurrent = String(this.activeIndex + 1).padStart(2, '0');
            const formattedTotal = String(this.filteredProjects.length).padStart(2, '0');
            indexDotEl.textContent = `• ${formattedCurrent} / ${formattedTotal}`;
        }

        if (industryEl && currentProj) {
            industryEl.textContent = `INDUSTRY: ${currentProj.industry}`;
        }

        if (roleEl && currentProj) {
            roleEl.textContent = `ROLE: ${currentProj.roleTags.join(' | ')}`;
        }

        // 3. Compute Translation for 3-Item Viewport Focus
        slots.forEach((slot, idx) => {
            slot.classList.remove('is-active', 'is-prev', 'is-next', 'is-far');
            
            if (idx === this.activeIndex) {
                slot.classList.add('is-active');
            } else if (idx === this.activeIndex - 1) {
                slot.classList.add('is-prev');
            } else if (idx === this.activeIndex + 1) {
                slot.classList.add('is-next');
            } else {
                slot.classList.add('is-far');
            }
        });

        // Center calculation
        if (track) {
            const viewport = document.getElementById('projects-viewport');
            const activeSlot = slots[this.activeIndex];
            if (viewport && activeSlot) {
                const viewportWidth = viewport.offsetWidth;
                const slotLeft = activeSlot.offsetLeft;
                const slotWidth = activeSlot.offsetWidth;
                const targetTranslate = (viewportWidth / 2) - (slotLeft + slotWidth / 2);
                track.style.transform = `translateX(${targetTranslate}px)`;
            }
        }
    }

    openDrawer(proj) {
        const drawer = document.getElementById('project-drawer');
        const inner = document.getElementById('drawer-inner');
        if (!drawer || !inner || !proj) return;

        this.isDrawerOpen = true;

        // Build Onda Studio Case Study HTML
        inner.innerHTML = `
            <div class="drawer-header-bar">
                <button class="btn-back-projects" id="close-drawer-btn">
                    <i class="fas fa-arrow-left"></i>
                    <span>BACK TO SHOWCASE</span>
                </button>
                <div class="drawer-index-badge">${proj.indexNum} / ${String(this.filteredProjects.length).padStart(2, '0')}</div>
            </div>

            <!-- Hero Section -->
            <div class="case-study-hero">
                <div class="hero-category-tag font-mono">${proj.category}</div>
                <h1 class="case-study-title">${proj.title}</h1>
                <div class="case-study-banner" style="background: ${proj.bgGradient}">
                    <div class="banner-center-icon">
                        <i class="fas ${proj.icon}"></i>
                    </div>
                </div>
            </div>

            <!-- Two-Column Specifications Bar -->
            <div class="case-study-specs-grid">
                <div class="specs-col-left">
                    <div class="spec-block">
                        <span class="spec-label font-mono">INDUSTRY</span>
                        <div class="spec-val">${proj.industry}</div>
                    </div>
                    <div class="spec-block">
                        <span class="spec-label font-mono">WHAT WE DID / TECH STACK</span>
                        <div class="tech-pills-wrap">
                            ${proj.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <div class="specs-col-right">
                    <div class="spec-block">
                        <span class="spec-label font-mono">PROJECT BRIEF</span>
                        <p class="brief-text">${proj.brief}</p>
                    </div>
                    <div class="action-buttons-row">
                        <button class="btn-more-info" id="more-info-toggle-btn">
                            <span>MORE INFO</span>
                            <i class="fas fa-chevron-down" id="more-info-chevron"></i>
                        </button>
                        ${proj.demoUrl ? `<a href="${proj.demoUrl}" target="_blank" class="case-link-pill btn-primary">Live App <i class="fas fa-external-link-alt"></i></a>` : ''}
                        ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" class="case-link-pill btn-outline">GitHub <i class="fab fa-github"></i></a>` : ''}
                    </div>
                </div>
            </div>

            <!-- Expandable Deep-Dive Accordion (Hidden by default) -->
            <div class="more-info-drawer" id="more-info-content">
                <div class="more-info-grid">
                    <div class="editorial-block">
                        <h4 class="editorial-title"><i class="fas fa-bullseye"></i> The Problem & Context</h4>
                        <p>${proj.deepDive.problem}</p>
                    </div>
                    <div class="editorial-block">
                        <h4 class="editorial-title"><i class="fas fa-cogs"></i> Architecture & Execution</h4>
                        <p>${proj.deepDive.architecture}</p>
                    </div>
                    <div class="editorial-block">
                        <h4 class="editorial-title"><i class="fas fa-chart-pie"></i> Key Quantitative Outcomes</h4>
                        <p>${proj.deepDive.outcomes}</p>
                    </div>
                </div>
            </div>

            <!-- Full-Width Asset Storytelling Section -->
            <div class="case-storytelling-section">
                <div class="story-quote-card">
                    <i class="fas fa-quote-left quote-icon"></i>
                    <p class="quote-text">"${proj.storytelling.quote}"</p>
                </div>
                <div class="story-metrics-grid">
                    <div class="metric-card">
                        <div class="metric-val" style="color: ${proj.accentColor}">${proj.storytelling.stat1Val}</div>
                        <div class="metric-label">${proj.storytelling.stat1Label}</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-val" style="color: ${proj.accentColor}">${proj.storytelling.stat2Val}</div>
                        <div class="metric-label">${proj.storytelling.stat2Label}</div>
                    </div>
                </div>
            </div>

            <!-- Bottom Navigation ("NEXT PROJECT") Split Footer -->
            <div class="case-next-footer" id="case-next-trigger">
                <div class="next-label-side">
                    <span class="font-mono">NEXT PROJECT</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
                <div class="next-preview-side" style="background: ${this.getNextProject().bgGradient}">
                    <div class="next-title">${this.getNextProject().title}</div>
                    <div class="next-cat font-mono">${this.getNextProject().category}</div>
                </div>
            </div>
        `;

        drawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        drawer.scrollTop = 0;

        // Bind Close Drawer Button
        document.getElementById('close-drawer-btn').addEventListener('click', () => {
            this.closeDrawer();
        });

        // Bind More Info Toggle Accordion
        const moreInfoBtn = document.getElementById('more-info-toggle-btn');
        const moreInfoContent = document.getElementById('more-info-content');
        const chev = document.getElementById('more-info-chevron');

        moreInfoBtn.addEventListener('click', () => {
            if (moreInfoContent.classList.contains('expanded')) {
                moreInfoContent.classList.remove('expanded');
                chev.style.transform = 'rotate(0deg)';
                moreInfoBtn.querySelector('span').textContent = 'MORE INFO';
            } else {
                moreInfoContent.classList.add('expanded');
                chev.style.transform = 'rotate(180deg)';
                moreInfoBtn.querySelector('span').textContent = 'LESS INFO';
            }
        });

        // Bind Next Project Trigger
        document.getElementById('case-next-trigger').addEventListener('click', () => {
            const nextIdx = (this.activeIndex + 1) % this.filteredProjects.length;
            this.goToIndex(nextIdx);
            this.openDrawer(this.filteredProjects[nextIdx]);
        });
    }

    closeDrawer() {
        const drawer = document.getElementById('project-drawer');
        if (drawer) {
            drawer.classList.remove('is-open');
            document.body.style.overflow = '';
            this.isDrawerOpen = false;
        }
    }

    getNextProject() {
        const nextIdx = (this.activeIndex + 1) % this.filteredProjects.length;
        return this.filteredProjects[nextIdx];
    }
}

// Global initialization window listener
window.addEventListener('DOMContentLoaded', () => {
    // Instantiate engine after SPA tabs initialize
    setTimeout(() => {
        window.projectsEngine = new ProjectsEngine();
    }, 100);
});
