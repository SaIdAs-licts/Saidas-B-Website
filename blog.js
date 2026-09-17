// =========================================================================
// Vita Architecture Inspired Production-Grade Journal Engine (BlogEngine)
// =========================================================================

class BlogEngine {
    constructor() {
        this.matrixContainer = null;
        this.detailView = null;
        this.activeCategory = 'All';
        this.articles = [];
        this.filteredArticles = [];
        this.currentArticle = null;
        this.badgeEl = null;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;

        this.matrixContainer = document.getElementById('journal-matrix');
        this.detailView = document.getElementById('article-detail-view');
        if (!this.matrixContainer) return;

        // Load dataset
        this.articles = window.blogData || [];
        this.filteredArticles = [...this.articles];

        // Reference / Create rotating follower badge
        this.initRotatingBadge();

        // Bind filter category buttons
        this.bindCategoryFilters();

        // Initial Render of Matrix Grid
        this.renderMatrix();

        // Bind Reader Navigation Events
        this.bindReaderEvents();

        this.initialized = true;
    }

    initRotatingBadge() {
        this.badgeEl = document.getElementById('journal-rotating-badge');
        if (!this.badgeEl) return;

        // Lerp/Follow cursor over viewport when visible
        window.addEventListener('mousemove', (e) => {
            if (this.badgeEl && this.badgeEl.classList.contains('is-visible')) {
                this.badgeEl.style.left = `${e.clientX}px`;
                this.badgeEl.style.top = `${e.clientY}px`;
            }
        });
    }

    bindCategoryFilters() {
        const filterBtns = document.querySelectorAll('#journal-category-filters .filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = btn.getAttribute('data-category');
                if (category && category !== this.activeCategory) {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.filterCategory(category);
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
                if (item.isQuoteCell) return true; // Retain typographic quote thesis block
                return item.category.toLowerCase() === category.toLowerCase() ||
                       item.category.toLowerCase().includes(category.toLowerCase());
            });
        }

        // Smooth transition animation
        this.matrixContainer.style.opacity = '0';
        this.matrixContainer.style.transform = 'translateY(8px)';

        setTimeout(() => {
            this.renderMatrix();
            this.matrixContainer.style.opacity = '1';
            this.matrixContainer.style.transform = 'translateY(0)';
        }, 180);
    }

    renderMatrix() {
        if (!this.matrixContainer) return;
        this.matrixContainer.innerHTML = '';

        if (this.filteredArticles.length === 0) {
            this.matrixContainer.innerHTML = '<div class="journal-empty-cell">NO ARTICLES FOUND IN THIS STREAM.</div>';
            return;
        }

        this.filteredArticles.forEach((item) => {
            const cell = document.createElement('article');

            if (item.isQuoteCell) {
                // Typographic Quote Block (grid-column: span 1 or span 2)
                cell.className = 'journal-cell quote-cell';
                cell.innerHTML = `
                    <div class="quote-cell-inner">
                        <blockquote class="quote-text">${item.quoteText}</blockquote>
                        <span class="quote-author">— ${item.author || 'SAIDAS B'}</span>
                    </div>
                `;
            } else {
                // Architectural Article Cell (Featured Wide: span 2, Standard: span 1)
                const isWide = item.featured;
                cell.className = `journal-cell ${isWide ? 'span-2-col' : ''}`;
                cell.setAttribute('data-id', item.id);

                cell.innerHTML = `
                    <!-- Top Metadata Row -->
                    <div class="cell-meta-bar">
                        <span class="meta-category">${item.category.toUpperCase()}</span>
                        <span class="meta-date">${item.date || '22/12/25'}</span>
                    </div>

                    <!-- Middle Image Frame -->
                    <div class="cell-image-frame ${isWide ? 'aspect-16-9' : 'aspect-4-3'}">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                    </div>

                    <!-- Bottom Title & Excerpt -->
                    <div class="cell-body">
                        <h3 class="cell-title">${item.title}</h3>
                        <p class="cell-excerpt">— ${item.excerpt}</p>
                    </div>
                `;

                // Hover badge follower triggers
                cell.addEventListener('mouseenter', () => {
                    if (this.badgeEl) this.badgeEl.classList.add('is-visible');
                });

                cell.addEventListener('mouseleave', () => {
                    if (this.badgeEl) this.badgeEl.classList.remove('is-visible');
                });

                // Click trigger to view article
                cell.addEventListener('click', () => {
                    if (this.badgeEl) this.badgeEl.classList.remove('is-visible');
                    this.openArticleReader(item);
                });
            }

            this.matrixContainer.appendChild(cell);
        });
    }

    // =========================================================================
    // Editorial Article Reader View
    // =========================================================================

    bindReaderEvents() {
        const backBtn = document.getElementById('article-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.closeArticleReader());
        }

        // Close on Escape key press
        window.addEventListener('keydown', (e) => {
            if (this.detailView && this.detailView.style.display !== 'none' && e.key === 'Escape') {
                this.closeArticleReader();
            }
        });
    }

    openArticleReader(item) {
        this.currentArticle = item;
        if (!this.detailView) return;

        const titleEl = document.getElementById('article-reader-title');
        const catEl = document.getElementById('article-reader-cat');
        const dateEl = document.getElementById('article-reader-date');
        const heroImg = document.getElementById('article-reader-hero');
        const bodyEl = document.getElementById('article-reader-body');

        if (titleEl) titleEl.textContent = item.title;
        if (catEl) catEl.textContent = item.category.toUpperCase();
        if (dateEl) dateEl.textContent = item.date || '22/12/25';
        if (heroImg) {
            heroImg.src = item.image;
            heroImg.alt = item.title;
        }
        if (bodyEl) bodyEl.innerHTML = item.content || `<p class="lead-paragraph">${item.excerpt}</p>`;

        // Render 3-column related stories block
        this.renderRelatedStories(item);

        // Show Full-Page Reader
        this.detailView.style.display = 'block';
        const stage = document.getElementById('article-reader-stage');
        if (stage) stage.scrollTop = 0;
    }

    closeArticleReader() {
        if (!this.detailView) return;
        this.detailView.style.display = 'none';
        this.currentArticle = null;
    }

    renderRelatedStories(currentArticle) {
        const grid = document.getElementById('related-articles-grid');
        if (!grid) return;

        grid.innerHTML = '';

        // Pick 3 articles excluding current article and quote blocks
        const related = this.articles
            .filter(a => !a.isQuoteCell && a.id !== currentArticle.id)
            .slice(0, 3);

        related.forEach(item => {
            const card = document.createElement('div');
            card.className = 'related-article-card';
            card.innerHTML = `
                <div class="cell-meta-bar">
                    <span class="meta-category">${item.category.toUpperCase()}</span>
                    <span class="meta-date">${item.date}</span>
                </div>
                <div class="cell-image-frame aspect-4-3">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <h4 class="related-card-title">${item.title}</h4>
            `;

            card.addEventListener('click', () => {
                this.openArticleReader(item);
            });

            grid.appendChild(card);
        });
    }
}

// Global Engine Instantiation
window.blogEngine = new BlogEngine();

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#blog' || document.body.classList.contains('theme-blog')) {
        window.blogEngine.init();
    }
});
