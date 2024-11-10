


//// efectos de scroll into view 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 150; // debido al nav que esta en sticky
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.left-to-right-effect, .opacity-change, .right-to-left-effect');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Deja de observar una vez que la animación ha sido aplicada
          }
      });
  }, {
      threshold: 0.1 // Ajusta el umbral según sea necesario
  });

  sections.forEach(section => {
      observer.observe(section);
  });
});


///// pdf popup

function mostrarPDFPopup(url) {
  PDFObject.embed(url, "#pdfPopup", {
    width: "600",
    height: "400",
    toolbar: "primary", // Opciones de la barra de herramientas (opcional)
  });
}


/// hide navbar
function hidenavbarnow() {

  document.getElementById('offcanvasDarkNavbar').classList.remove('show');
}

const offcanvasLinks = document.querySelectorAll('.offcanvas-body ul li a');

offcanvasLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const offcanvas = new bootstrap.Offcanvas(document.querySelector('#offcanvasDarkNavbar'));
    offcanvas.hide();
  });
});


