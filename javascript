

 /*menu hamburguesa*/
document.addEventListener("DOMContentLoaded", function() {
        var menuItems = document.querySelectorAll("#menu ul li a");
        menuItems.forEach(function(item) {
            item.addEventListener("click", function(event) {
                // Evita el comportamiento predeterminado de los enlaces
                event.preventDefault();
                // Obtiene la URL de destino del enlace
                var targetUrl = this.getAttribute("href");
                // Redirige a la página correspondiente
                window.location.href = targetUrl;
            });
        });
    });


 /*carousel*/
 src="funciones.js"

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides();




/*scroll*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-up").style.display = "block";
    } else {
        document.getElementById("scroll-up").style.display = "none";
    }
}

document.getElementById("scroll-up").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

