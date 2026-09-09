#### **Estación 4: Implementación**

* **Objetivo:** Programar la web estática aplicando las buenas prácticas de desarrollo Frontend.

* **Entregables:**

* Estructura HTML5 limpia y semántica.

* Hojas de estilo CSS organizadas con diseño responsivo.

* Script de JavaScript integrado que aporte dinamismo a la interfaz.

* Flujo de trabajo en Git con *commits* descriptivos de todos los integrantes del equipo.

Gemini

PROMPT:

Genera una webpage siguiendo la estructura como en la imagen, cumpliendo con los siguientes requerimientos:

#### **Estación 4: Implementación**

* **Objetivo:** Programar la web estática aplicando las buenas prácticas de desarrollo Frontend.

* **Entregables:**

* Estructura HTML5 limpia y semántica.
* Hojas de estilo CSS organizadas con diseño responsivo.
* Script de JavaScript integrado que aporte dinamismo a la interfaz.


La pagina debe utilizar javascript para que en la navbar, al navegar hacia abajo, se actualice el elemento resaltado dependiendo de la seccion en la que nos encontramos, tambien quiero que en la imagen de perfil del usuario, al hacer click la imagen crezca de manera cómica y que la imagen gire como si fuera un disco

OUTPUT:

Aquí tienes la solución completa para tu **Estación 4: Implementación**.

El siguiente código incluye una estructura HTML5 semántica que sigue exacto el diseño del wireframe, un archivo de estilos CSS responsivo y moderno, y un archivo JavaScript con las funcionalidades solicitadas (ScrollSpy para la Navbar activa y el efecto cómico/giratorio al hacer clic en la imagen de perfil).

---

### 1. `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Developer Portfolio</title>
  <link rel="stylesheet" href="styles.css">
  <!-- Lucide Icons para los iconos de botones y enlaces -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>

  <!-- STICKY NAVBAR -->
  <header class="navbar-header">
    <nav class="navbar">
      <div class="logo">[LOGO / NAME]</div>
      <ul class="nav-links">
        <li><a href="#hero" class="nav-link active">HOME</a></li>
        <li><a href="#about" class="nav-link">ABOUT</a></li>
        <li><a href="#projects" class="nav-link">PROJECTS</a></li>
        <li><a href="#skills" class="nav-link">SKILLS</a></li>
        <li><a href="#contact" class="nav-link">CONTACT</a></li>
      </ul>
      <a href="#resume" class="btn btn-outline btn-sm">CTA: RESUME</a>
    </nav>
  </header>

  <main>
    <!-- 01. HERO SECTION -->
    <section id="hero" class="section hero-section">
      <div class="container hero-container">
        <div class="profile-img-container">
          <!-- Imagen de placeholder redonda -->
          <img src="https://via.placeholder.com/180" alt="Profile Image" id="profile-img" class="profile-img">
        </div>
        <div class="hero-content">
          <h1>Hi, I'm [Developer Name]</h1>
          <p class="subtitle">Passionate Full Stack Developer | Building functional web applications</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="#contact" class="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 02. ABOUT ME -->
    <section id="about" class="section about-section">
      <div class="container">
        <h2>01. About Me</h2>
        <div class="about-grid">
          <div class="about-bio">
            <p>A modern developer focused on React, Node.js, and UX... (Bio Placeholder text). In beam of the development anti-variable commerce in Imarame. A modern developer focused on React, Node.js, and UX... (Bio Placeholder text)</p>
          </div>
          <div class="about-details-card">
            <h3>Details:</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Experience:</strong> 5+ Years</p>
            <p><strong>Stack:</strong> JS, Python</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 03. MY PROJECTS -->
    <section id="projects" class="section projects-section">
      <div class="container">
        <h2>03. My Projects</h2>
        <div class="projects-grid">
          
          <!-- Card Proyecto (Repetido 6 veces como en el wireframe) -->
          <!-- Proyecto 1 -->
          <article class="project-card">
            <div class="project-img-placeholder">PROJECT IMAGE</div>
            <div class="project-info">
              <h3>Project Title</h3>
              <p>Short Description</p>
              <div class="tags">
                <span class="badge">React</span>
                <span class="badge">Node</span>
                <span class="badge">Firebase</span>
              </div>
              <div class="project-links">
                <a href="#"><i data-lucide="external-link"></i> Live Demo</a>
                <a href="#"><i data-lucide="code"></i> Source Code</a>
              </div>
            </div>
          </article>

          <!-- Proyecto 2 -->
          <article class="project-card">
            <div class="project-img-placeholder">PROJECT IMAGE</div>
            <div class="project-info">
              <h3>Project Title</h3>
              <p>Short Description</p>
              <div class="tags">
                <span class="badge">React</span>
                <span class="badge">Node</span>
                <span class="badge">Firebase</span>
              </div>
              <div class="project-links">
                <a href="#"><i data-lucide="external-link"></i> Live Demo</a>
                <a href="#"><i data-lucide="code"></i> Source Code</a>
              </div>
            </div>
          </article>

          <!-- Proyecto 3 -->
          <article class="project-card">
            <div class="project-img-placeholder">PROJECT IMAGE</div>
            <div class="project-info">
              <h3>Project Title</h3>
              <p>Short Description</p>
              <div class="tags">
                <span class="badge">React</span>
                <span class="badge">Node</span>
                <span class="badge">Firebase</span>
              </div>
              <div class="project-links">
                <a href="#"><i data-lucide="external-link"></i> Live Demo</a>
                <a href="#"><i data-lucide="code"></i> Source Code</a>
              </div>
            </div>
          </article>

          <!-- Proyecto 4 -->
          <article class="project-card">
            <div class="project-img-placeholder">PROJECT IMAGE</div>
            <div class="project-info">
              <h3>Project Title</h3>
              <p>Short Description</p>
              <div class="tags">
                <span class="badge">React</span>
                <span class="badge">Node</span>
                <span class="badge">Firebase</span>
              </div>
              <div class="project-links">
                <a href="#"><i data-lucide="external-link"></i> Live Demo</a>
                <a href="#"><i data-lucide="code"></i> Source Code</a>
              </div>
            </div>
          </article>

          <!-- Proyecto 5 -->
          <article class="project-card">
            <div class="project-img-placeholder">PROJECT IMAGE</div>
            <div class="project-info">
              <h3>Project Title</h3>
              <p>Short Description</p>
              <div class="tags">
                <span class="badge">React</span>
                <span class="badge">Node</span>
                <span class="badge">Firebase</span>
              </div>
              <div class="project-links">
                <a href="#"><i data-lucide="external-link"></i> Live Demo</a>
                <a href="#"><i data-lucide="code"></i> Source Code</a>
              </div>
            </div>
          </article>

          <!-- Proyecto 6 -->
          <article class="project-card">
            <div class="project-img-placeholder">PROJECT IMAGE</div>
            <div class="project-info">
              <h3>Project Title</h3>
              <p>Short Description</p>
              <div class="tags">
                <span class="badge">React</span>
                <span class="badge">Node</span>
                <span class="badge">Firebase</span>
              </div>
              <div class="project-links">
                <a href="#"><i data-lucide="external-link"></i> Live Demo</a>
                <a href="#"><i data-lucide="code"></i> Source Code</a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- 04. TECH STACK & SKILLS -->
    <section id="skills" class="section skills-section">
      <div class="container">
        <h2>04. TECH STACK & SKILLS</h2>
        <div class="skills-grid">
          <div class="skill-group">
            <h3>[FRONTEND]</h3>
            <div class="skill-badges">
              <span class="badge">React</span>
              <span class="badge">TS</span>
              <span class="badge">Vue</span>
              <span class="badge">SKILL BADGE</span>
            </div>
          </div>
          <div class="skill-group">
            <h3>[BACKEND]</h3>
            <div class="skill-badges">
              <span class="badge">SKILL BADGE</span>
              <span class="badge">SKILL BADGE</span>
              <span class="badge">SKILL BADGE</span>
              <span class="badge">Git</span>
            </div>
          </div>
          <div class="skill-group">
            <h3>[TOOLS]</h3>
            <div class="skill-badges">
              <span class="badge">SKILL BADGE</span>
              <span class="badge">SKILL BADGE</span>
              <span class="badge">AWS</span>
              <span class="badge">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05. CONTACT ME -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2>04. Get In Touch</h2>
        <div class="contact-grid">
          <div class="contact-text">
            <p>Have a question or project idea? Send me a message.</p>
          </div>
          <form class="contact-form">
            <div class="form-row">
              <input type="text" placeholder="Name" required>
              <input type="email" placeholder="Email" required>
            </div>
            <input type="text" placeholder="Subject" required>
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" class="btn btn-full">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-container">
      <p>&copy; 2024 Developer Portfolio</p>
      <div class="footer-links">
        <a href="#">GitHub</a> | <a href="#">LinkedIn</a> | <a href="#">Email</a>
      </div>
      <a href="#" class="privacy-link">Privacy Policy</a>
    </div>
  </footer>

  <script src="script.js"></script>
  <script>
    // Inicializar los iconos de Lucide
    lucide.createIcons();
  </script>
</body>
</html>

```

---

### 2. `styles.css`

```css
/* --- RESET & VARIABLES --- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-color: #f4f4f5;
  --card-bg: #ffffff;
  --text-primary: #18181b;
  --text-secondary: #52525b;
  --border-color: #d4d4d8;
  --accent-color: #27272a;
  --active-color: #2563eb; /* Color de realce para navegación activa */
  --radius: 8px;
}

html {
  scroll-behavior: smooth;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-color);
}

.container {
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 4rem 0;
  border-bottom: 1px dashed var(--border-color);
}

/* --- NAVBAR --- */
.navbar-header {
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
}

.navbar {
  max-width: 1050px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.3s, border-bottom 0.3s;
  padding-bottom: 4px;
}

/* Estado activo requerido por JavaScript */
.nav-link.active {
  color: var(--active-color);
  border-bottom: 2px solid var(--active-color);
}

/* --- BUTTONS & BADGES --- */
.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid var(--accent-color);
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
}

.btn-secondary {
  background-color: white;
  color: var(--text-primary);
}

.btn-outline {
  background-color: transparent;
  color: var(--text-primary);
}

.btn-full {
  width: 100%;
  background-color: var(--accent-color);
  color: white;
}

.badge {
  background-color: #e4e4e7;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid var(--border-color);
}

/* --- HERO SECTION --- */
.hero-container {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.profile-img-container {
  /* Contenedor relativo para permitir desbordamiento al agrandar la imagen */
  position: relative;
  width: 180px;
  height: 180px;
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-color);
  cursor: pointer;
  /* Transición fluida cuando no tiene la clase cómica */
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Animación cómica de giro infinito estilo disco */
@keyframes spinDisc {
  0% {
    transform: scale(2.2) rotate(0deg);
  }
  100% {
    transform: scale(2.2) rotate(360deg);
  }
}

/* Clase añadida dinámicamente con JS */
.profile-img.funny-spin {
  animation: spinDisc 1s linear infinite;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  z-index: 10;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero-content .subtitle {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

/* --- ABOUT SECTION --- */
.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.about-details-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
}

.about-details-card p {
  margin-top: 0.5rem;
}

/* --- PROJECTS SECTION --- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
}

.project-img-placeholder {
  height: 150px;
  background-color: #e4e4e7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-weight: bold;
}

.project-info {
  padding: 1rem;
}

.project-info h3 {
  font-size: 1.1rem;
}

.project-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

.tags {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
}

.project-links a {
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

/* --- SKILLS SECTION --- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
}

/* --- CONTACT SECTION --- */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-row input {
  flex: 1;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-family: inherit;
}

/* --- FOOTER --- */
.footer {
  padding: 2rem 0;
  background-color: var(--card-bg);
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.footer-links a, .privacy-link {
  color: var(--text-secondary);
  text-decoration: none;
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .about-grid, .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    flex-direction: column;
  }

  .nav-links {
    display: none; /* Podría integrarse un menú hamburguesa opcional */
  }

  .footer-container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

```

---

### 3. `script.js`

```javascript
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

```
