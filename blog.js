// =========================================================================
// Vita Architecture Inspired Journal & Blog Engine (BlogEngine)
// =========================================================================

class BlogEngine {
    constructor() {
        this.gridContainer = null;
        this.detailView = null;
        this.activeCategory = 'All';
        this.articles = [];
        this.filteredArticles = [];
        this.currentArticle = null;

        // Rotating SVG Stamp Cursor
        this.badgeEl = null;

        this.initialized = false;
    }

    init() {
        if (this.initialized) return;

        this.gridContainer = document.getElementById('journal-grid');
        this.detailView = document.getElementById('article-detail-view');
        if (!this.gridContainer) return;

        // Load Articles Dataset
        this.articles = window.blogData || [];
        this.filteredArticles = [...this.articles];

        // Create Mouse-Follower Rotating SVG Stamp Badge
        this.createRotatingBadge();

        // Bind Category Filter Bar Links
        this.bindCategoryFilterBar();

        // Render Initial Asymmetric Grid
        this.renderGrid();

        // Bind Detail View Event Listeners
        this.bindDetailViewEvents();

        this.initialized = true;
    }

    createRotatingBadge() {
        if (document.getElementById('journal-rotating-badge')) return;

        const badge = document.createElement('div');
        badge.id = 'journal-rotating-badge';
        badge.className = 'journal-rotating-badge';
        badge.innerHTML = `
            <svg viewBox="0 0 100 100" width="100" height="100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                <text font-size="9.5" font-family="'Noto Sans Mono', monospace" font-weight="700" letter-spacing="1.8" fill="#111">
                    <textPath href="#circlePath" startOffset="0%">
                        READ THE ARTICLE • READ THE ARTICLE •
                    </textPath>
                </text>
            </svg>
            <div class="badge-arrow">→</div>
        `;

        document.body.appendChild(badge);
        this.badgeEl = badge;

        // Mousemove lerp positioning
        window.addEventListener('mousemove', (e) => {
            if (this.badgeEl && this.badgeEl.classList.contains('is-visible')) {
                this.badgeEl.style.left = `${e.clientX}px`;
                this.badgeEl.style.top = `${e.clientY}px`;
            }
        });
    }

    bindCategoryFilterBar() {
        const filterLinks = document.querySelectorAll('.category-filter-link');
        filterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const cat = e.currentTarget.getAttribute('data-category');
                if (cat && cat !== this.activeCategory) {
                    filterLinks.forEach(l => l.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    this.filterCategory(cat);
                }
            });
        });
    }

    filterCategory(category) {
        this.activeCategory = category;

        if (category === 'All') {
            this.filteredArticles = [...this.articles];
        } else {
            this.filteredArticles = this.articles.filter(item => {
                if (item.isQuoteCell) return true; // Keep quote cell visible
                return item.category.toLowerCase().includes(category.toLowerCase()) || 
                       category.toLowerCase().includes(item.category.toLowerCase());
            });
        }

        // Animate Grid Fade
        this.gridContainer.style.opacity = '0';
        this.gridContainer.style.transform = 'translateY(10px)';

        setTimeout(() => {
            this.renderGrid();
            this.gridContainer.style.opacity = '1';
            this.gridContainer.style.transform = 'translateY(0)';
        }, 200);
    }

    renderGrid() {
        if (!this.gridContainer) return;
        this.gridContainer.innerHTML = '';

        if (this.filteredArticles.length === 0) {
            this.gridContainer.innerHTML = '<div class="journal-empty-state">No articles found in this stream.</div>';
            return;
        }

        this.filteredArticles.forEach((item, idx) => {
            const cell = document.createElement('article');

            if (item.isQuoteCell) {
                // Editorial Typographic Quote Cell Module
                cell.className = 'journal-cell quote-cell';
                cell.innerHTML = `
                    <div class="quote-cell-inner">
                        <span class="quote-kicker">EDITORIAL THESIS</span>
                        <blockquote class="quote-text">${item.quoteText}</blockquote>
                        <cite class="quote-author">${item.author || 'Saidas B'}</cite>
                    </div>
                `;
            } else {
                // Article Card Module (Featured Wide or Standard 1-Column)
                cell.className = `journal-cell article-cell ${item.featured ? 'featured-wide-cell' : ''}`;
                cell.setAttribute('data-id', item.id);

                cell.innerHTML = `
                    <div class="card-top-meta">
                        <span class="meta-cat">${item.category.toUpperCase()}</span>
                        <span class="meta-date">${item.date}</span>
                    </div>

                    <div class="card-image-wrap">
                        <img src="${item.image || 'assets/images/photo.png'}" alt="${item.title}" class="card-img" loading="lazy">
                    </div>

                    <div class="card-text-footer">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-excerpt">— ${item.excerpt}</p>
                    </div>
                `;

                // Bind Rotating Hover Badge Interactions
                cell.addEventListener('mouseenter', () => {
                    if (this.badgeEl) this.badgeEl.classList.add('is-visible');
                });

                cell.addEventListener('mouseleave', () => {
                    if (this.badgeEl) this.badgeEl.classList.remove('is-visible');
                });

                // Click to Open Full Editorial Reader
                cell.addEventListener('click', () => {
                    if (this.badgeEl) this.badgeEl.classList.remove('is-visible');
                    this.openArticleDetail(item);
                });
            }

            this.gridContainer.appendChild(cell);
        });
    }

    // =========================================================================
    // Full Editorial Article Reading View (ArticleDetail)
    // =========================================================================

    bindDetailViewEvents() {
        const backBtn = document.getElementById('article-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.closeArticleDetail());
        }

        // Share Pills Handler
        const shareBtnLinkedIn = document.getElementById('share-linkedin');
        const shareBtnX = document.getElementById('share-x');
        const shareBtnCopy = document.getElementById('share-copy');

        if (shareBtnLinkedIn) {
            shareBtnLinkedIn.addEventListener('click', () => {
                const url = encodeURIComponent(window.location.href);
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
            });
        }

        if (shareBtnX) {
            shareBtnX.addEventListener('click', () => {
                const text = encodeURIComponent(this.currentArticle ? this.currentArticle.title : 'Check out this article');
                const url = encodeURIComponent(window.location.href);
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
            });
        }

        if (shareBtnCopy) {
            shareBtnCopy.addEventListener('click', () => {
                navigator.clipboard.writeText(window.location.href);
                const originalText = shareBtnCopy.innerHTML;
                shareBtnCopy.innerHTML = '<i class="fas fa-check"></i> COPIED!';
                setTimeout(() => {
                    shareBtnCopy.innerHTML = originalText;
                }, 2000);
            });
        }

        // Keyboard Escape key to close reader
        window.addEventListener('keydown', (e) => {
            if (this.detailView && this.detailView.classList.contains('is-active') && e.key === 'Escape') {
                this.closeArticleDetail();
            }
        });
    }

    openArticleDetail(item) {
        this.currentArticle = item;
        if (!this.detailView) return;

        // Populate Detail UI Elements
        const titleEl = document.getElementById('article-reader-title');
        const catEl = document.getElementById('article-reader-cat');
        const dateEl = document.getElementById('article-reader-date');
        const heroImg = document.getElementById('article-reader-hero');
        const bodyEl = document.getElementById('article-reader-body');

        if (titleEl) titleEl.textContent = item.title;
        if (catEl) catEl.textContent = item.category.toUpperCase();
        if (dateEl) dateEl.textContent = item.date;
        if (heroImg) {
            heroImg.src = item.image || 'assets/images/photo.png';
            heroImg.alt = item.title;
        }
        if (bodyEl) bodyEl.innerHTML = item.content || `<p>${item.excerpt}</p>`;

        // Build Related Articles Grid
        this.renderRelatedArticles(item);

        // Display Full-Page Reader Overlay
        this.detailView.style.display = 'block';
        setTimeout(() => {
            this.detailView.classList.add('is-active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10);
    }

    closeArticleDetail() {
        if (!this.detailView) return;
        this.detailView.classList.remove('is-active');
        setTimeout(() => {
            this.detailView.style.display = 'none';
            this.currentArticle = null;
        }, 350);
    }

    renderRelatedArticles(currentArticle) {
        const relatedGrid = document.getElementById('related-articles-grid');
        if (!relatedGrid) return;

        relatedGrid.innerHTML = '';

        // Pick 3 related articles excluding current and quote cells
        const candidates = this.articles.filter(a => !a.isQuoteCell && a.id !== currentArticle.id);
        const related = candidates.slice(0, 3);

        related.forEach(item => {
            const card = document.createElement('div');
            card.className = 'related-article-card';
            card.innerHTML = `
                <div class="related-img-wrap">
                    <img src="${item.image || 'assets/images/photo.png'}" alt="${item.title}" loading="lazy">
                </div>
                <div class="related-meta">${item.category.toUpperCase()} • ${item.date}</div>
                <h4 class="related-title">${item.title}</h4>
            `;

            card.addEventListener('click', () => {
                this.openArticleDetail(item);
                const readerStage = document.getElementById('article-reader-stage');
                if (readerStage) readerStage.scrollTop = 0;
            });

            relatedGrid.appendChild(card);
        });
    }
}

// Global Instantiation
window.blogEngine = new BlogEngine();

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#blog' || document.body.classList.contains('theme-blog')) {
        window.blogEngine.init();
    }
});
