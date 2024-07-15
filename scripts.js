
document.addEventListener("DOMContentLoaded", function() {
    var contactUsBtn = document.getElementById("contactUsBtn");
    var contactFormPopup = document.getElementById("contactFormPopup");
    var closeBtn = document.getElementById("closeBtn");

    contactUsBtn.addEventListener("click", function() {
        contactFormPopup.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        contactFormPopup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == contactFormPopup) {
            contactFormPopup.style.display = "none";
        }
    });

    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.open('https://www.fylehq.com', '_blank');
        });
    });

    const projectImage = document.getElementById('project-image');
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const imageUrl = item.getAttribute('data-image');
            projectImage.style.backgroundImage = `url(${imageUrl})`;

            projectItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Set initial image
    const initialImage = document.querySelector('.project-item.active').getAttribute('data-image');
    projectImage.style.backgroundImage = `url(${initialImage})`;
});

// scripts.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Change to hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  // Change to display current slide
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

function currentSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "flex";  
    dots[n-1].className += " active";
}


