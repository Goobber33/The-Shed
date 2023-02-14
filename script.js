const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('show');
  navToggle.classList.toggle('active');
});


document.querySelector('.carousel-control-prev').addEventListener("click", function () {
    document.querySelector('#classesCarousel').classList.remove("slide");
    let activeSlide = document.querySelector('.carousel-item.active');
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
        activeSlide.classList.remove("active");
    } else {
        let lastSlide = document.querySelector('.carousel-item:last-child');
        lastSlide.classList.add("active");
        activeSlide.classList.remove("active");
    }
    setTimeout(function () {
        document.querySelector('#classesCarousel').classList.add("slide");
    }, 0)
});

document.querySelector('.carousel-control-next').addEventListener("click", function () {
    document.querySelector('#classesCarousel').classList.remove("slide");
    let activeSlide = document.querySelector('.carousel-item.active');
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add("active");
        activeSlide.classList.remove("active");
    } else {
        let firstSlide = document.querySelector('.carousel-item:first-child');
        firstSlide.classList.add("active");
        activeSlide.classList.remove("active");
    }
    setTimeout(function () {
        document.querySelector('#classesCarousel').classList.add("slide");
    }, 0)
});