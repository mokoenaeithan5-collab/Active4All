// ==========================================================
// HAMBURGER MENU
// Opens and closes the mobile drop-down menu
// ==========================================================

// ----- 1. Find the elements on the page -----
const nav = document.querySelector('nav');
const toggle = document.getElementById('menu-toggle');
const icon = toggle.querySelector('i');


// ----- 2. Function that opens or closes the menu -----
function setMenu(isOpen) {
    // Add or remove the "open" class (CSS shows the menu when it is there)
    nav.classList.toggle('open', isOpen);

    // Update accessibility info for screen readers
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

    // Swap the icon: bars (closed) or X (open)
    icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}


// ----- 3. Tap the hamburger button: open if closed, close if open -----
toggle.addEventListener('click', function () {
    const isOpen = nav.classList.contains('open');
    setMenu(!isOpen);
});


// ----- 4. Tap a menu link: close the menu -----
document.querySelectorAll('#nav-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
        setMenu(false);
    });
});


// ----- 5. Press the Escape key: close the menu -----
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        setMenu(false);
    }
});


// ----- 6. Screen gets wider than mobile: reset the menu -----
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        setMenu(false);
    }
});