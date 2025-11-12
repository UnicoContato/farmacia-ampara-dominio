document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY < lastScrollY) {
            header.classList.remove('header-hidden');
        } else if (window.scrollY > 80 && lastScrollY > 0) { 
            header.classList.add('header-hidden');
        }
        lastScrollY = window.scrollY;
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    const privacyLink = document.getElementById('privacy-link');
    const privacyModal = document.getElementById('privacy-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.remove('hidden');
    });

    const closeModal = () => {
        privacyModal.classList.add('hidden');
    };

    closeModalBtn.addEventListener('click', closeModal);

    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            closeModal();
        }
    });
});