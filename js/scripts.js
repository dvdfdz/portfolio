/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

const tags = [
    { name: "HTML", count: 10 },
    { name: "CSS", count: 25 },
    { name: "JavaScript", count: 40 },
    { name: "React", count: 18 },
    { name: "Node.js", count: 30 },
    { name: "Python", count: 50 },
    { name: "PHP", count: 12 },
    { name: "Django", count: 22 },
    { name: "Vue", count: 15 },
    { name: "SQL", count: 35 }
  ];

  const container = document.querySelector('.tag-cloud');

  // Obtener los valores mínimo y máximo
  const counts = tags.map(tag => tag.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);

  // Función para mapear popularidad a tamaño
  function getSizeClass(count) {
    const percent = (count - min) / (max - min);
    if (percent > 0.75) return 'tag-size-xlarge';
    if (percent > 0.5) return 'tag-size-large';
    if (percent > 0.25) return 'tag-size-medium';
    return 'tag-size-small';
  }

  // Generar las etiquetas
  tags.forEach((tag, i) => {
    const a = document.createElement('a');
    a.textContent = tag.name;
    a.href = "#";
    a.className = `tag tag-color-${(i % 10) + 1} ${getSizeClass(tag.count)}`;
    container.appendChild(a);
  });

/*$('.carousel').carousel()
  // Función para obtener intervalo aleatorio
  function getRandomInterval(min = 4000, max = 7000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Seleccionar todos los carruseles con clase .my-carousel
  document.querySelectorAll('.carousel slide').forEach((carouselEl) => {
    const interval = getRandomInterval();

    // Crear la instancia del carrusel con intervalo aleatorio
    const carouselInstance = new bootstrap.Carousel(carouselEl, {
      interval: interval,
      ride: 'carousel',
      pause: false
    });
    // Cambiar el intervalo cada vez que cambia el slide
    carouselEl.addEventListener('slide.bs.carousel', () => {
      carouselInstance._config.interval = getRandomInterval();
    });
  });



