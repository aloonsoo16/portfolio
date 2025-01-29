document.body.style.zoom = "90%"; //Hacer que se vea un poco mas reducido el body

window.addEventListener('scroll', function() {
    const navbarNav = document.querySelector('.navbar-nav');

    if (window.scrollY > 0) {
        // Agrega la clase si se hace scroll
        navbarNav.classList.add('navbar-nav-scrolled');
    } else {
        // Elimina la clase cuando se vuelve al inicio
        navbarNav.classList.remove('navbar-nav-scrolled');

    }
});

// Selecciona todos los elementos de las secciones y los enlaces del navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Configura el Intersection Observer
const options = {
    threshold: 0.8 // Activa el enlace cuando la sección empieza a entrar en el viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);

        // Verificar si navLink existe
        if (navLink) {
            if (entry.isIntersecting) {
                navLink.closest('.nav-item').classList.add('active');
            } else {
                navLink.closest('.nav-item').classList.remove('active');
            }
        }
    });
}, options);

// Observa cada sección
sections.forEach(section => {
    observer.observe(section);
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const targetId = link.getAttribute('href'); // Obtiene el id del destino

        // Verificar que targetId no sea solo '#'
        if (targetId !== '#') {
            const targetSection = document.querySelector(targetId); // Selecciona la sección objetivo

            // Asegúrate de que targetSection existe
            if (targetSection) {
                // Desplázate a la sección objetivo
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Animación suave al desplazarse
                });
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.boton-arriba');
    
    // Verifica que el botón exista antes de agregar el evento
    if (button) {
        button.addEventListener('click', scrollToTop);
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

