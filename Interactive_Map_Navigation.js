let lastScrollTop = 0; // Keeps track of the last scroll position
const header = document.querySelector('header'); // Select the header element

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px'; // Hide the header (adjust the value based on your header height)
    } else {
        // Scrolling up
        header.style.top = '0'; // Show the header
    }
    
    lastScrollTop = scrollTop; // Update the last scroll position
});

//JavaScript to toggle the menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

