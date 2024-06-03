document.addEventListener('DOMContentLoaded', function () {
    const prevButtons = document.querySelectorAll('.carousel .prev');
    const nextButtons = document.querySelectorAll('.carousel .next');

    prevButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const products = document.querySelectorAll('.carousel .products')[index];
            products.scrollBy({
                top: 0,
                left: -products.clientWidth / 2,
                behavior: 'smooth'
            });
        });
    });

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const products = document.querySelectorAll('.carousel .products')[index];
            products.scrollBy({
                top: 0,
                left: products.clientWidth / 2,
                behavior: 'smooth'
            });
        });
    });
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    // Wrap around to the first slide if n exceeds the total number of slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Wrap around to the last slide if n is less than 1
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Automatically advance to the next slide after a certain time (e.g., 3 seconds)
    setTimeout(function() {
        plusSlides(1);
    }, 1000); // Adjust the time interval as needed
}
