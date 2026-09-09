document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. SCROLLSPY (Actualizar Navbar al hacer Scroll)
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      // Offset de 150px para detectar la sección antes de que llegue exactamente al tope
      const sectionTop = current.offsetTop - 150; 
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Remover 'active' de todos los enlaces y agregarlo al visible
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Escuchar el evento scroll
  window.addEventListener('scroll', highlightNavOnScroll);


  // ==========================================
  // 2. EFECTO CÓMICO EN LA IMAGEN DE PERFIL (DISCO)
  // ==========================================
  const profileImg = document.getElementById('profile-img');

  if (profileImg) {
    profileImg.addEventListener('click', () => {
      // Toggle de la clase que hace crecer y girar la imagen
      profileImg.classList.toggle('funny-spin');
    });
  }
});
