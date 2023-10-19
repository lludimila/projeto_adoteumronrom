// menuLista

var menuIcon = document.querySelector('.menu-icon');
var menuLista = document.getElementById('menu-lista');

function mostreMenu() {
    var menuLista = document.getElementById('menu-lista');
    menuLista.classList.add('menuVisivel');
}

function escondaMenu() {
    var menuLista = document.getElementById('menu-lista');     
    menuLista.classList.remove('menuVisivel');
}

menuIcon.addEventListener('click', function () {
    if (menuLista.style.display === 'block') {
        menuLista.style.display = 'none';
    } else {
        menuLista.style.display = 'block';
    }
});


//slides

let slideIndex = 0;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const indicadores = document.getElementsByClassName("indicador");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }   

    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    indicadores[slideIndex].classList.add("active");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function autoSlide() {
    plusSlides(1);
}

showSlides(slideIndex);

// Inicia o slideshow automático a cada 3 segundos
setInterval(autoSlide, 3000);

// seta topo

document.addEventListener('DOMContentLoaded', function() {
    var setaTopo = document.getElementById('seta-topo');
    var secaoContato = document.getElementById('contato');

    window.addEventListener('scroll', function() {        
        if (window.scrollY + 350 > secaoContato.offsetTop) {
            setaTopo.classList.add('oculto');
        } else {
            setaTopo.classList.remove('oculto');
        }
    });
});
