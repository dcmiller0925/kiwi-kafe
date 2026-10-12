const navLinks = document.querySelectorAll('.nav-link');

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

console.log('Current page:', currentPage);
console.log('Navbar links found:', navLinks.length);

navLinks.forEach(link => {
    // Get the filename from the link's href
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
    } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    }
});
