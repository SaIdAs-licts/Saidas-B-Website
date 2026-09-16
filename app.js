// =========================================================================
// Saidas B - Portfolio JavaScript Logic
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. SPA Tab Router ---
    const tabMap = {
        '#hero': ['#hero'],
        '#about': ['#about'],
        '#projects': ['#projects'],
        '#hobbies': ['#hobbies'],
        '#blog': ['#blog'],
        '#contact': ['#contact']
    };

    // Add CSS classes dynamically to initialize tab sections
    document.body.classList.add('js-enabled');
    const allTabSections = document.querySelectorAll('header.hero, section.about, section.projects, section.hobbies, section.blog, section.contact');
    
    allTabSections.forEach(section => {
        section.classList.add('tab-hidden');
    });

    function switchTab(targetHash) {
        // Default to #hero if hash is empty or not in map
        const activeHash = tabMap[targetHash] ? targetHash : '#hero';
        
        // Update navbar theme class dynamically to blend with background
        const navbarEl = document.getElementById('navbar');
        if (navbarEl) {
            navbarEl.classList.remove('theme-hero', 'theme-about', 'theme-projects', 'theme-hobbies', 'theme-blog', 'theme-contact');
            const themeClass = `theme-${activeHash.replace('#', '')}`;
            navbarEl.classList.add(themeClass);
        }
        
        // Hide all sections, remove reveal actives so they can animate again
        allTabSections.forEach(section => {
            section.classList.add('tab-hidden');
            section.classList.remove('active');
            section.querySelectorAll('.reveal').forEach(r => r.classList.remove('active'));
        });

        // Show active sections
        const sectionsToShow = tabMap[activeHash];
        sectionsToShow.forEach(selector => {
            const el = document.querySelector(selector);
            if (el) {
                el.classList.remove('tab-hidden');
                
                // Small timeout to allow browser layout update before triggering transition animations
                setTimeout(() => {
                    el.classList.add('active');
                    const revealsInside = el.querySelectorAll('.reveal');
                    revealsInside.forEach(r => r.classList.add('active'));

                    if (activeHash === '#projects' && window.projectsEngine) {
                        window.projectsEngine.updateCarousel(false);
                    }
                }, 50);
            }
        });

        // Update active class on nav links
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === activeHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top instantly
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Listen to hashchange event
    window.addEventListener('hashchange', () => {
        switchTab(window.location.hash);
    });

    // Intercept clicks on links that reference tabs
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetHash = href;
                if (tabMap[targetHash]) {
                    e.preventDefault();
                    window.location.hash = targetHash;
                } else if (targetHash === '#hero' || targetHash === '#') {
                    e.preventDefault();
                    window.location.hash = '#hero';
                }
            }
        }
    });

    // Initialize the active tab based on current URL hash or default
    switchTab(window.location.hash || '#hero');
    
    // --- 1. Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    if(mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. Typing Effect (Hero) ---
    const roles = ["Aspiring Analyst", "Finance", "Creative Explorer", "Data Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-effect');
    
    function typeEffect() {
        if (!typingElement) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect
    setTimeout(typeEffect, 1000);


    // --- 4. Intersection Observer for Scroll Animations ---
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Manually trigger hero reveal on load
    const hero = document.getElementById('hero');
    if (hero) setTimeout(() => hero.classList.add('active'), 100);

    // --- 5. Hobbies Tabs Switcher ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            const targetId = `tab-${btn.dataset.tab}`;
            document.getElementById(targetId).classList.add('active');
        });
    });


    // --- 6. Blog Dynamic Fetching Logic ---
    const blogContainer = document.getElementById('blog-container');
    let allPosts = []; // Will hold combined JSON + LocalStorage posts

    async function loadBlogs() {
        if(!blogContainer) return;
        
        try {
            // Fetch initial JSON
            const response = await fetch('data/blogs.json');
            if(response.ok) {
                const data = await response.json();
                allPosts = [...data];
            } else {
                console.warn("Could not fetch blogs.json. Normal if running from file://");
            }
            
            // Fetch from LocalStorage
            const storedPosts = JSON.parse(localStorage.getItem('saidas_blogs')) || [];
            if(storedPosts.length > 0) {
                allPosts = [...storedPosts, ...allPosts];
            }

            renderBlogs();
        } catch (error) {
            console.error("Error loading blog posts:", error);
            blogContainer.innerHTML = `<div class="loading-state">Unable to load blog posts. If testing locally without a server, this is due to CORS restrictions.</div>`;
        }
    }

    function renderBlogs() {
        if (!blogContainer) return;
        blogContainer.innerHTML = '';
        
        if(allPosts.length === 0) {
            blogContainer.innerHTML = '<div class="loading-state">No blog posts found. Create one!</div>';
            return;
        }

        allPosts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'blog-card glass-card hover-lift reveal';
            
            // Format date loosely
            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
            });

            card.innerHTML = `
                <div class="blog-meta">
                    <span><i class="fas fa-folder"></i> ${post.category}</span>
                    <span><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
                <div class="blog-content" style="display:none;">${post.content}</div>
                <a href="javascript:void(0)" class="read-more btn btn-sm btn-outline">Read Full Post</a>
            `;
            
            // Quick toggle logic
            const btn = card.querySelector('.read-more');
            const cnt = card.querySelector('.blog-content');
            const sum = card.querySelector('p');
            
            btn.addEventListener('click', () => {
                if(cnt.style.display === 'none') {
                    cnt.style.display = 'block';
                    sum.style.display = 'none';
                    btn.textContent = 'Close Post';
                } else {
                    cnt.style.display = 'none';
                    sum.style.display = 'block';
                    btn.textContent = 'Read Full Post';
                }
            });

            blogContainer.appendChild(card);
            
            // Observe the newly added element so it animates in
            setTimeout(() => {
                revealObserver.observe(card);
            }, 100);
        });
    }

    // --- 7. Admin / Post Creation Logic ---
    const adminModal = document.getElementById('admin-modal');
    const openAdminBtn = document.getElementById('open-admin-btn');
    const closeAdminBtn = document.getElementById('close-admin-btn');
    const adminForm = document.getElementById('admin-form');
    const downloadJsonBtn = document.getElementById('download-json-btn');

    if(openAdminBtn) {
        openAdminBtn.addEventListener('click', (e) => {
            e.preventDefault();
            adminModal.classList.add('active');
        });
    }

    if(closeAdminBtn) {
        closeAdminBtn.addEventListener('click', () => {
            adminModal.classList.remove('active');
        });
    }

    if(adminForm) {
        adminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newPost = {
                id: Date.now().toString(),
                title: document.getElementById('post-title').value,
                category: document.getElementById('post-category').value,
                date: new Date().toISOString().split('T')[0],
                summary: document.getElementById('post-summary').value,
                content: document.getElementById('post-content').value,
            };

            // Get existing from local storage
            let storedPosts = JSON.parse(localStorage.getItem('saidas_blogs')) || [];
            storedPosts.unshift(newPost); // Add to top
            localStorage.setItem('saidas_blogs', JSON.stringify(storedPosts));
            
            // Add to live array and re-render
            allPosts.unshift(newPost);
            renderBlogs();
            
            // Close and reset
            adminForm.reset();
            adminModal.classList.remove('active');
            alert("Post published locally to preview!");
        });
    }

    if(downloadJsonBtn) {
        downloadJsonBtn.addEventListener('click', () => {
            if(allPosts.length === 0) {
                alert("No posts to download.");
                return;
            }
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allPosts, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "blogs.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });
    }

    // --- 8. Custom Interactive Cursor ---
    const cursor = document.getElementById('custom-cursor');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice && cursor) {
        cursor.style.display = 'none';
    } else if (cursor) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        const speed = 0.15; // Smooth trailing factor

        // Update mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smoothly animate cursor position using lerp and requestAnimationFrame
        function animateCursor() {
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            requestAnimationFrame(animateCursor);
        }
        
        // Start animation
        animateCursor();

        // Toggle hover scaling class
        const addHoverListeners = () => {
            const clickables = document.querySelectorAll('a, button, .btn, .tab-btn, input, textarea, select, #open-admin-btn, .close-btn, .tech-icon-circle, .book-item, .value-pill, .collage-card');
            clickables.forEach(el => {
                if (el.dataset.hasCursorListener) return;
                el.dataset.hasCursorListener = 'true';

                el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
            });
        };

        addHoverListeners();

        // Use MutationObserver to apply hover listener to dynamically loaded elements
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Initialize Blog Fetching
    loadBlogs();
});
