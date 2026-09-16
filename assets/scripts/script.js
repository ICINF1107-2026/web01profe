document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. SCROLLSPY (Sincronización de enlaces y ARIA)
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150; 
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          link.removeAttribute('aria-current'); // Limpiar atributo previo
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page'); // Accesibilidad WAI-ARIA
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);


  // ==========================================
  // 2. INTERACCIÓN DE LA IMAGEN CÓMICA (Accesibilidad con teclado + ARIA)
  // ==========================================
  const profileImg = document.getElementById('profile-img');

  function toggleImageSpin() {
    const isSpinning = profileImg.classList.toggle('funny-spin');
    profileImg.setAttribute('aria-pressed', isSpinning ? 'true' : 'false');
  }

  if (profileImg) {
    // Evento de Clic
    profileImg.addEventListener('click', toggleImageSpin);

    // Permitir activación mediante la tecla Enter o Espacio
    profileImg.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleImageSpin();
      }
    });
  }
});
