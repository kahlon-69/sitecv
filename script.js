// Get all the sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to toggle active navigation link
function toggleActiveNavLinks() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Find the corresponding navigation link and add the active class
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Attach the toggleActiveNavLinks function to the scroll event
window.addEventListener('scroll', toggleActiveNavLinks);

// Function to toggle "sticky" class on the header
function toggleStickyHeader() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

// Attach the toggleStickyHeader function to the scroll event
window.addEventListener('scroll', toggleStickyHeader);
