document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-site-btn');
    const mainContent = document.getElementById('main-content');
    const splashVideo = document.getElementById('splash-video');
    const bookContainer = document.getElementById('book-container');
    const navbar = document.querySelector('.navbar');
    const aboutPage = document.getElementById('about');
    const castCrewPage = document.getElementById('cast-crew');
    const galleryPage = document.getElementById('gallery');

    // Play video when loaded
    if (splashVideo) {
        splashVideo.play().catch(e => console.log("Autoplay prevented", e));
    }

    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
            }, 800);
        });
    }

    // Flip Book Navigation Logic
    const pages = ['home', 'about', 'cast-crew', 'gallery', 'tickets', 'merch'];
    const navLinks = document.querySelectorAll('[data-target]');
    let activePage = 'home';
    const lightModePages = new Set(['about', 'cast-crew', 'tickets']);

    if (bookContainer) {
        bookContainer.classList.add('initializing');
    }

    function updateAboutNavbarState() {
        if (!navbar) return;
        const isAboutScrolled = activePage === 'about' && aboutPage && aboutPage.scrollTop > 10;
        const isCastCrewScrolled = activePage === 'cast-crew' && castCrewPage && castCrewPage.scrollTop > 10;
        const isGalleryScrolled = activePage === 'gallery' && galleryPage && galleryPage.scrollTop > 10;

        if (isAboutScrolled || isCastCrewScrolled) {
            navbar.classList.add('about-scrolled');
            navbar.classList.remove('gallery-scrolled');
        } else if (isGalleryScrolled) {
            navbar.classList.add('gallery-scrolled');
            navbar.classList.remove('about-scrolled');
        } else {
            navbar.classList.remove('about-scrolled');
            navbar.classList.remove('gallery-scrolled');
        }
    }

    function handleNavigation(targetId) {
        const targetIndex = pages.indexOf(targetId);
        if (targetIndex === -1) return;

        pages.forEach((pageId, index) => {
            const pageEl = document.getElementById(pageId);
            if (!pageEl) return;

            // Remove all positioning classes first
            pageEl.classList.remove('active', 'left', 'right');

            if (index < targetIndex) {
                // Pages before target slide to left
                pageEl.classList.add('left');
            } else if (index === targetIndex) {
                // Target page is active/centered
                pageEl.classList.add('active');
            } else {
                // Pages after target slide to right
                pageEl.classList.add('right');
            }
        });

        // Update active nav state
        navLinks.forEach(link => {
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Dynamic Navbar Theme
        if (navbar) {
            if (lightModePages.has(targetId)) {
                navbar.classList.add('light-mode');
            } else {
                navbar.classList.remove('light-mode');
            }
        }

        activePage = targetId;
        updateAboutNavbarState();
    }

    // Initialize Home as active on load
    handleNavigation('home');
    requestAnimationFrame(() => {
        if (bookContainer) {
            bookContainer.classList.remove('initializing');
        }
    });

    // Event Listeners for Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            handleNavigation(targetId);

            // Close mobile menu if open
            const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    if (aboutPage) {
        aboutPage.addEventListener('scroll', () => {
            updateAboutNavbarState();
        });
    }

    if (castCrewPage) {
        castCrewPage.addEventListener('scroll', () => {
            updateAboutNavbarState();
        });
    }

    if (galleryPage) {
        galleryPage.addEventListener('scroll', () => {
            updateAboutNavbarState();
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cast Modal Logic
    const castModal = document.getElementById('cast-modal');
    const modalClose = document.getElementById('modal-close');
    const castCards = document.querySelectorAll('.cast-card');

    function openModal(card) {
        // Get data from the cast card
        const img = card.querySelector('.cast-photo img');
        const role = card.querySelector('.cast-role');
        const name = card.querySelector('h3');
        const character = card.querySelector('.cast-character');
        const bioContent = card.querySelector('.cast-photo .cast-bio');

        // Get card index for photo positioning
        const cardIndex = Array.from(castCards).indexOf(card) + 1;
        castModal.setAttribute('data-card', cardIndex);

        // Populate modal
        document.getElementById('modal-img').src = img.src;
        document.getElementById('modal-img').alt = img.alt;
        document.getElementById('modal-role').textContent = role.textContent;
        document.getElementById('modal-name').textContent = name.textContent;
        document.getElementById('modal-character').textContent = character.textContent;
        document.getElementById('modal-bio').innerHTML = bioContent.innerHTML;

        // Show modal
        castModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        castModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Add click event to each cast card
    castCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    // Close modal on X button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside the modal content
    if (castModal) {
        castModal.addEventListener('click', (e) => {
            if (e.target === castModal) {
                closeModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && castModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Console Easter Egg
    console.log('%cSTAIN - The Play', 'font-size: 24px; font-weight: bold; color: #7c1010; font-family: Lora, serif; letter-spacing: 0.2em;');
    console.log('%cOne Night Only', 'font-size: 14px; color: #b8b8b8; font-family: Inter, sans-serif; letter-spacing: 0.1em;');

    // Carousel Logic
    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector(".carousel-btn.next");
        const prevButton = carousel.querySelector(".carousel-btn.prev");
        const dotsNav = carousel.querySelector(".carousel-dots");
        const dots = Array.from(dotsNav.children);

        let currentIndex = 0;

        const updateCarousel = (index) => {
            // Update slides
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });

            // Update dots
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });

            currentIndex = index;
        };

        // Button Listeners
        if (nextButton) {
            nextButton.addEventListener("click", (e) => {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % slides.length;
                updateCarousel(nextIndex);
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", (e) => {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel(prevIndex);
            });
        }

        // Dot Listeners
        if (dotsNav) {
            dotsNav.addEventListener("click", (e) => {
                const targetDot = e.target.closest(".dot");
                if (!targetDot) return;

                const targetIndex = parseInt(targetDot.dataset.index);
                updateCarousel(targetIndex);
            });
        }

        // Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe Left -> Next
                const nextIndex = (currentIndex + 1) % slides.length;
                updateCarousel(nextIndex);
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe Right -> Prev
                const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel(prevIndex);
            }
        };
    });
});
