export function createFuncBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav .menu');
    const burgerBars = document.querySelectorAll('.burger-bar');

    let isOpenMenu = false;

    burgerMenu.addEventListener('click', function () {
        isOpenMenu = !isOpenMenu

        toggleMenu();
    });

    // Function that toggles menu state depending on flag isOpenMenu

    function toggleMenu() {
        if (isOpenMenu) {
            // If the menu is open, apply 'cross' styles for the burger menu and show the mobile menu
            adaptiveMenuOpen();
            showMobileMenu();
        } else {
            // If the menu is closed, return the burger menu to its original position and hide the mobile menu
            adaptiveMenuClose();
            hideMobileMenu();
        }
    }

    function adaptiveMenuOpen() {
        burgerBars[0].style.transform = 'rotate(45deg) translateY(12.5px)';
        burgerBars[1].style.opacity = '0';
        burgerBars[2].style.transform = 'rotate(-45deg) translateY(-12.5px)';
    };


    function adaptiveMenuClose() {
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1';
        burgerBars[2].style.transform = 'rotate(0deg)';
    };

    function showMobileMenu() {
        navMenu.classList.remove('menu');
        navMenu.classList.add('navigation-adaptive');
    }

    function hideMobileMenu() {
        navMenu.classList.remove('navigation-adaptive');
        navMenu.classList.add('menu');
    }

    window.addEventListener('resize', () => {
        const isDesctop = window.matchMedia('(min-width: 720px)').matches;

        if (isDesctop) {
            resetToDesctop();
        } else if (isOpenMenu) {
            adaptiveMenuOpen();
            showMobileMenu();
        }
    });

    function resetToDesctop() {
        hideMobileMenu();
        if (!isOpenMenu) {
            adaptiveMenuClose();
        }
    }
}


