<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EDUcate - Aprende nunca fue tan fácil y divertido</title>
  <style>
    :root {
      --morado: #7b2cbf;
      --azul: #3b82f6;
      --verde: #22c55e;
      --amarillo: #facc15;
      --blanco: #ffffff;
      --sombra: 0 6px 20px rgba(0,0,0,0.1);
      font-family: "Poppins", sans-serif;
    }

    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      color: #fff;
    }

    /* 🔹 Fondo personalizable */
    .hero {
      position: relative;
      height: 100vh;
      background-image: url('TU_IMAGEN_AQUI.jpg'); /* 🔁 Cambia esta línea por tu imagen */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      padding: 20px;
    }

    /* Capa semitransparente sobre el fondo */
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }

    /* Contenido principal */
    .content {
      position: relative;
      z-index: 2;
      max-width: 800px;
    }

    h1 {
      font-size: 3rem;
      color: var(--blanco);
      margin-bottom: 10px;
      text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    }

    p {
      font-size: 1.3rem;
      color: #f5f5f5;
      margin-bottom: 30px;
    }

    /* Botones principales */
    .btn {
      padding: 12px 24px;
      margin: 10px;
      font-size: 1.1rem;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      box-shadow: var(--sombra);
    }

    .btn-primary {
      background: var(--morado);
      color: var(--blanco);
    }

    .btn-primary:hover {
      background: #6920a8;
    }

    .btn-secondary {
      background: var(--azul);
      color: var(--blanco);
    }

    .btn-secondary:hover {
      background: #1e40af;
    }

    /* 🔤 Selector de idioma */
    .language-selector {
      position: absolute;
      top: 20px;
      right: 30px;
      z-index: 3;
    }

    select {
      background: var(--blanco);
      color: #333;
      border: none;
      padding: 8px 14px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: var(--sombra);
    }

    /* 🔹 Sección de cursos */
    .courses {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 50px auto;
      padding: 20px;
      max-width: 1000px;
    }

    .card {
      background: rgba(255,255,255,0.9);
      color: #222;
      border-radius: 12px;
      padding: 20px;
      box-shadow: var(--sombra);
      transition: transform 0.3s;
    }

    .card:hover {
      transform: scale(1.05);
    }

    footer {
      background: var(--morado);
      color: var(--blanco);
      text-align: center;
      padding: 20px;
      font-size: 0.9rem;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <!-- Selector de idioma -->
  <div class="language-selector">
    <select id="langSelect">
      <option value="es">🇪🇸 Español</option>
      <option value="en">🇬🇧 English</option>
    </select>
  </div>

  <!-- Hero principal -->
  <section class="hero">
    <div class="overlay"></div>
    <div class="content">
      <h1 id="title">EDUcate</h1>
      <p id="slogan">Aprender nunca fue tan fácil y divertido</p>
      <button class="btn btn-primary" id="startBtn">Comenzar ahora</button>
      <button class="btn btn-secondary" id="learnMoreBtn">Saber más</button>
    </div>
  </section>

  <!-- Sección de cursos -->
  <section class="courses" id="courses">
    <div class="card">
      <h3>📘 Inglés</h3>
      <p>Aprende vocabulario, pronunciación y gramática.</p>
    </div>
    <div class="card">
      <h3>🧮 Matemáticas</h3>
      <p>Practica operaciones y resuelve desafíos numéricos.</p>
    </div>
    <div class="card">
      <h3>🧪 Ciencias</h3>
      <p>Explora el mundo natural a través de experimentos divertidos.</p>
    </div>
    <div class="card">
      <h3>🎨 Arte</h3>
      <p>Desarrolla tu creatividad y expresión artística.</p>
    </div>
  </section>

  <!-- Footer -->
  <footer id="footer">
    EDUcate © 2025 — Aprende, crece y transforma tu futuro 🌟
  </footer>

  <!-- Script para cambio de idioma -->
  <script>
    const translations = {
      es: {
        title: "EDUcate",
        slogan: "Aprender nunca fue tan fácil y divertido",
        start: "Comenzar ahora",
        learn: "Saber más",
        footer: "EDUcate © 2025 — Aprende, crece y transforma tu futuro 🌟",
        courses: [
          {title: "📘 Inglés", desc: "Aprende vocabulario, pronunciación y gramática."},
          {title: "🧮 Matemáticas", desc: "Practica operaciones y resuelve desafíos numéricos."},
          {title: "🧪 Ciencias", desc: "Explora el mundo natural a través de experimentos divertidos."},
          {title: "🎨 Arte", desc: "Desarrolla tu creatividad y expresión artística."}
        ]
      },
      en: {
        title: "EDUcate",
        slogan: "Learning has never been so easy and fun",
        start: "Start now",
        learn: "Learn more",
        footer: "EDUcate © 2025 — Learn, grow, and transform your future 🌟",
        courses: [
          {title: "📘 English", desc: "Learn vocabulary, pronunciation and grammar."},
          {title: "🧮 Math", desc: "Practice operations and solve numerical challenges."},
          {title: "🧪 Science", desc: "Explore the natural world through fun experiments."},
          {title: "🎨 Art", desc: "Develop your creativity and artistic expression."}
        ]
      }
    };

    const langSelect = document.getElementById('langSelect');
    const title = document.getElementById('title');
    const slogan = document.getElementById('slogan');
    const startBtn = document.getElementById('startBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const footer = document.getElementById('footer');
    const courseCards = document.querySelectorAll('.card');

    langSelect.addEventListener('change', (e) => {
      const lang = e.target.value;
      const t = translations[lang];
      title.textContent = t.title;
      slogan.textContent = t.slogan;
      startBtn.textContent = t.start;
      learnMoreBtn.textContent = t.learn;
      footer.textContent = t.footer;
      t.courses.forEach((c, i) => {
        const card = courseCards[i];
        card.querySelector('h3').textContent = c.title;
        card.querySelector('p').textContent = c.desc;
      });
    });
  </script>
</body>
</html>
