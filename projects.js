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
        bgGradient: 'linear-gradient(135deg, #0d2621, #134e42)',
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
        bgGradient: 'linear-gradient(135deg, #061a30, #0c3866)',
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
            previewBadge: 'React Terminal'
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
        bgGradient: 'linear-gradient(135deg, #2b112c, #5c225f)',
        accentColor: '#f857a6',
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
            previewBadge: 'Research Model'
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
        bgGradient: 'linear-gradient(135deg, #2a2007, #594411)',
        accentColor: '#ffd200',
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
        bgGradient: 'linear-gradient(135deg, #18092d, #3c146e)',
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
            previewBadge: 'Quant Code'
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

            const mockupHtml = this.getMockupHtml(proj);

            card.innerHTML = `
                <div class="card-inner-frame" style="background: ${proj.bgGradient}">
                    <div class="card-media-content">
                        ${mockupHtml}
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

    getMockupHtml(proj) {
        switch (proj.id) {
            case 'bookkeeping':
                return `
                    <div class="editorial-mockup mockup-bookkeeping">
                        <div class="mockup-window-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="mockup-title font-mono">digital-ledger-app v2.4</span>
                        </div>
                        <div class="mockup-body">
                            <div class="mockup-stats-row">
                                <div class="mockup-chip"><span class="chip-lbl">REVENUE</span><span class="chip-val green font-mono">+$42,850</span></div>
                                <div class="mockup-chip"><span class="chip-lbl">EXPENSES</span><span class="chip-val red font-mono">-$14,200</span></div>
                                <div class="mockup-chip"><span class="chip-lbl">NET LEDGER</span><span class="chip-val accent font-mono">+$28,650</span></div>
                            </div>
                            <div class="mockup-table-preview font-mono">
                                <div class="table-row head"><span>DATE</span><span>DESC</span><span>TYPE</span><span>AMT</span></div>
                                <div class="table-row"><span>09/14</span><span>Client Retainer</span><span>CR</span><span class="green">+$12.5k</span></div>
                                <div class="table-row"><span>09/12</span><span>Server Hosting</span><span>DR</span><span class="red">-$450</span></div>
                                <div class="table-row"><span>09/10</span><span>Equip Audit</span><span>DR</span><span class="red">-$1.2k</span></div>
                            </div>
                        </div>
                    </div>
                `;

            case 'stockwatch':
                return `
                    <div class="editorial-mockup mockup-stockwatch">
                        <div class="mockup-window-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="mockup-title font-mono">equity-terminal // market feed</span>
                        </div>
                        <div class="mockup-body">
                            <div class="stock-ticker-bar font-mono">
                                <span class="symb">AAPL <span class="price">$224.50</span> <span class="chg green">+2.4% ↑</span></span>
                                <span class="symb">NVDA <span class="price">$118.20</span> <span class="chg green">+4.1% ↑</span></span>
                                <span class="symb">TSLA <span class="price">$245.10</span> <span class="chg red">-1.2% ↓</span></span>
                            </div>
                            <div class="stock-chart-svg">
                                <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                                    <path d="M0,60 Q40,40 80,55 T160,25 T240,35 T300,10" fill="none" stroke="#00c6ff" stroke-width="2.5"/>
                                    <path d="M0,60 Q40,40 80,55 T160,25 T240,35 T300,10 L300,80 L0,80 Z" fill="rgba(0,198,255,0.12)"/>
                                    <circle cx="300" cy="10" r="3.5" fill="#00c6ff"/>
                                </svg>
                            </div>
                            <div class="mockup-watch-list font-mono">
                                <span>EQUITIES WATCHLIST</span>
                                <span class="status-live">● LIVE TICKER</span>
                            </div>
                        </div>
                    </div>
                `;

            case 'dairy-scba':
                return `
                    <div class="editorial-mockup mockup-dairy">
                        <div class="mockup-window-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="mockup-title font-mono">vensim-dynamic-model // 48m</span>
                        </div>
                        <div class="mockup-body">
                            <div class="sim-nodes-flow font-mono">
                                <span class="sim-node">Feed Stock</span> <span class="arr">➔</span>
                                <span class="sim-node active">Yield Rate</span> <span class="arr">➔</span>
                                <span class="sim-node">NPV ($)</span>
                            </div>
                            <div class="scba-chart-svg">
                                <svg viewBox="0 0 300 70" preserveAspectRatio="none">
                                    <path d="M0,55 Q75,45 150,28 T300,12" fill="none" stroke="#ffffff" stroke-width="2.5"/>
                                    <path d="M0,55 Q75,35 150,18 T300,5" fill="none" stroke="#f857a6" stroke-width="1.8" stroke-dasharray="3,3"/>
                                    <path d="M0,55 Q75,55 150,42 T300,25" fill="none" stroke="#ff5858" stroke-width="1.8" stroke-dasharray="3,3"/>
                                </svg>
                            </div>
                            <div class="sim-legend font-mono">
                                <span><i class="dot-lgd" style="background:#ffffff"></i> Base NPV</span>
                                <span><i class="dot-lgd" style="background:#f857a6"></i> ±10% Sensitivity</span>
                            </div>
                        </div>
                    </div>
                `;

            case 'industrial-audit':
                return `
                    <div class="editorial-mockup mockup-audit">
                        <div class="mockup-window-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="mockup-title font-mono">ksdp-plant-audit // bom-re-eng</span>
                        </div>
                        <div class="mockup-body">
                            <div class="audit-pipeline font-mono">
                                <div class="pipe-step done"><span>Production</span><i class="fas fa-check"></i></div>
                                <div class="pipe-step done"><span>Purchase</span><i class="fas fa-check"></i></div>
                                <div class="pipe-step active"><span>BOM Audit</span><i class="fas fa-sync"></i></div>
                            </div>
                            <div class="audit-metrics-strip font-mono">
                                <div class="a-metric">
                                    <span class="m-val accent">99.4%</span>
                                    <span class="m-lbl">BOM ACCURACY</span>
                                </div>
                                <div class="a-metric">
                                    <span class="m-val green">-14.2%</span>
                                    <span class="m-lbl">BATCH WASTAGE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'quant-valuation':
                return `
                    <div class="editorial-mockup mockup-quant">
                        <div class="mockup-window-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="mockup-title font-mono">quant_dcf_valuation.py</span>
                        </div>
                        <div class="mockup-body font-mono">
                            <div class="code-line"><span class="kwd">def</span> <span class="fn">dcf_model</span>(cash_flows, wacc, g):</div>
                            <div class="code-line indent"><span class="var">pv</span> = sum([cf / ((1 + wacc)**i) <span class="kwd">for</span> i, cf <span class="kwd">in</span> enumerate(cf_list)])</div>
                            <div class="code-line indent"><span class="var">tv</span> = (cash_flows[-1] * (1 + g)) / (wacc - g)</div>
                            <div class="code-line indent"><span class="kwd">return</span> pv + (tv / ((1 + wacc)**len(cf_list)))</div>
                            <div class="code-result"><span>>> INTRINSIC VALUE:</span> <span class="val-target">$184.20 / share</span></div>
                        </div>
                    </div>
                `;

            default:
                return `<div class="media-icon-badge"><i class="fas ${proj.icon}"></i></div>`;
        }
    }

    bindEvents() {
        const filterContainer = document.getElementById('projects-filter-pills');
        const viewport = document.getElementById('projects-viewport');

        if (filterContainer) {
            filterContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.filter-btn');
                if (!btn) return;
                const cat = btn.dataset.category;
                
                if (this.activeFilter === cat && cat !== 'ALL') {
                    this.applyFilter('ALL');
                } else {
                    this.applyFilter(cat);
                }
            });
        }

        if (viewport) {
            viewport.addEventListener('click', (e) => {
                const slot = e.target.closest('.project-card-slot');
                if (!slot) return;
                const clickedIdx = parseInt(slot.dataset.index, 10);

                if (clickedIdx === this.activeIndex) {
                    this.openDrawer(this.filteredProjects[this.activeIndex]);
                } else {
                    this.goToIndex(clickedIdx);
                }
            });

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

        window.addEventListener('resize', () => {
            this.updateCarousel(false);
        });
    }

    applyFilter(cat) {
        this.activeFilter = cat;
        
        const btns = document.querySelectorAll('#projects-filter-pills .filter-btn');
        btns.forEach(btn => {
            if (btn.dataset.category === cat) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (cat === 'ALL') {
            this.filteredProjects = [...this.projects];
        } else {
            this.filteredProjects = this.projects.filter(p => p.category === cat);
        }

        this.activeIndex = 0;

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
                    <div class="banner-mockup-wrapper">
                        ${this.getMockupHtml(proj)}
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

        document.getElementById('close-drawer-btn').addEventListener('click', () => {
            this.closeDrawer();
        });

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

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.projectsEngine = new ProjectsEngine();
    }, 100);
});
