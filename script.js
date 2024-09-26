// Get elements
const menuBtn = document.getElementById('menuBtn');
const footerBtn = document.getElementById('footerBtn');
const sliderMenu = document.getElementById('sliderMenu');
const sliderFooter = document.getElementById('sliderFooter');
const overlay = document.getElementById('overlay');

// Function to close sliders
function closeSliders() {
    sliderMenu.classList.remove('show');
    sliderFooter.classList.remove('show');
    overlay.classList.remove('active');
}

// Toggle left slider and overlay
menuBtn.addEventListener('click', function() {
    sliderMenu.classList.toggle('show');
    overlay.classList.toggle('active');
});

// Toggle footer slider and overlay
footerBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link action
    sliderFooter.classList.toggle('show');
    overlay.classList.toggle('active');
});

// Close sliders if overlay is clicked
overlay.addEventListener('click', function() {
    closeSliders();
});

// Close sliders if user clicks anywhere on the body outside the sliders
document.body.addEventListener('click', function(event) {
    if (!sliderMenu.contains(event.target) && !menuBtn.contains(event.target) &&
        !sliderFooter.contains(event.target) && !footerBtn.contains(event.target)) {
        closeSliders();
    }
});
