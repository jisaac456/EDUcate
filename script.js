document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    es: {
      title: "EDUcate 2025",
      slogan: "Aprender nunca fue tan fácil y divertido",
      start: "Comenzar ahora",
      learn: "Saber más",
      footer: "EDUcate © 2025 — Aprende, crece y transforma tu futuro 🌟",
      coursesTitle: "Nuestros cursos",
      courses: [
        { title: "📘 Inglés", desc: "Aprende vocabulario, pronunciación y gramática." },
        { title: "🧮 Matemáticas", desc: "Practica operaciones y resuelve desafíos numéricos." },
        { title: "🧪 Ciencias", desc: "Explora el mundo natural a través de experimentos divertidos." },
        { title: "🎨 Arte", desc: "Desarrolla tu creatividad y expresión artística." }
      ],
      info: `
        <h3>💡 ¿Qué es EDUcate?</h3>
        <p><span class="text-morado">EDUcate 2025</span> es una plataforma educativa interactiva creada para 
        apoyar el aprendizaje de estudiantes de todas las edades. Combina 
        <span class="text-verde">tecnología</span> y <span class="text-rosado">diversión</span> para que estudiar 
        sea fácil, dinámico y accesible desde cualquier lugar.</p>

        <h3>⚙️ ¿Cómo funciona?</h3>
       <li>Los usuarios pueden explorar diferentes cursos organizados por materias. 
        Cada curso incluye actividades prácticas, lecciones breves, videos y retos interactivos.</li>

        <h3>🎯 ¿Cómo se usa?</h3>
        <ol>
          <li>Selecciona tu idioma (Español o Inglés).</li>
          <li>Haz clic en <b>“Comenzar ahora”</b> para ver los cursos.</li>
          <li>Elige una materia y comienza a aprender.</li>
          <li>Completa las actividades y guarda tu progreso.</li>
        </ol>

        <h3>📚 Tipos de cursos</h3>
        <ul>
          <li><b>📘 Inglés:</b> vocabulario, gramática y pronunciación.</li>
          <li><b>🧮 Matemáticas:</b> álgebra, geometría y lógica.</li>
          <li><b>🧪 Ciencias:</b> biología, física y química.</li>
          <li><b>🎨 Arte:</b> dibujo, color y creatividad digital.</li>
        </ul>
      `
    },
    en: {
      title: "EDUcate 2025",
      slogan: "Learning has never been so easy and fun",
      start: "Start now",
      learn: "Learn more",
      footer: "EDUcate © 2025 — Learn, grow, and shape your future 🌟",
      coursesTitle: "Our Courses",
      courses: [
        { title: "📘 English", desc: "Learn vocabulary, pronunciation, and grammar." },
        { title: "🧮 Math", desc: "Practice operations and solve numerical challenges." },
        { title: "🧪 Science", desc: "Explore the natural world through fun experiments." },
        { title: "🎨 Art", desc: "Develop your creativity and artistic expression." }
      ],
      info: `
        <h3>💡 What is EDUcate?</h3>
        <p><span class="text-morado">EDUcate 2025</span> is an interactive educational platform designed to 
        help students of all ages learn effectively. It combines 
        <span class="text-verde">technology</span> and <span class="text-rosado">fun</span> so studying becomes 
        easy, dynamic, and accessible from anywhere.</p>

        <h3>⚙️ How does it work?</h3>
        <p>Users can explore different courses organized by subjects. Each course includes 
        lessons, videos, and interactive challenges to reinforce learning step by step.</p>

        <h3>🎯 How to use it?</h3>
        <ol>
          <li>Select your preferred language (Spanish or English).</li>
          <li>Click <b>“Start now”</b> to view available courses.</li>
          <li>Choose a subject and begin learning.</li>
          <li>Complete the activities and track your progress.</li>
        </ol>

        <h3>📚 Types of courses</h3>
        <ul>
          <li><b>📘 English:</b> vocabulary, grammar, and pronunciation.</li>
          <li><b>🧮 Math:</b> algebra, geometry, and logic.</li>
          <li><b>🧪 Science:</b> biology, physics, and chemistry.</li>
          <li><b>🎨 Art:</b> drawing, color, and digital creativity.</li>
        </ul>
      `
    }
  };

  // Referencias
  const title = document.getElementById('title');
  const slogan = document.getElementById('slogan');
  const startBtn = document.getElementById('startBtn');
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const footer = document.getElementById('footer');
  const coursesTitle = document.getElementById('courses-title');
  const infoText = document.getElementById('info-text');
  const langSelect = document.getElementById('langSelect');

  const courseTitles = [
    document.getElementById('course1-title'),
    document.getElementById('course2-title'),
    document.getElementById('course3-title'),
    document.getElementById('course4-title')
  ];
  const courseDescs = [
    document.getElementById('course1-desc'),
    document.getElementById('course2-desc'),
    document.getElementById('course3-desc'),
    document.getElementById('course4-desc')
  ];

  // Cambiar idioma
  langSelect.addEventListener('change', e => {
    const lang = translations[e.target.value];

    title.textContent = lang.title;
    slogan.textContent = lang.slogan;
    startBtn.textContent = lang.start;
    learnMoreBtn.textContent = lang.learn;
    footer.textContent = lang.footer;
    coursesTitle.textContent = lang.coursesTitle;
    infoText.innerHTML = lang.info;

    lang.courses.forEach((c, i) => {
      courseTitles[i].textContent = c.title;
      courseDescs[i].textContent = c.desc;
    });
  });

  // Navegación
  const screens = {
    home: document.getElementById('screen-home'),
    courses: document.getElementById('screen-courses'),
    info: document.getElementById('screen-info')
  };

  document.getElementById('startBtn').addEventListener('click', () => {
    screens.home.style.display = 'none';
    screens.courses.style.display = 'flex';
  });
  document.getElementById('learnMoreBtn').addEventListener('click', () => {
    screens.home.style.display = 'none';
    screens.info.style.display = 'flex';
  });
  document.getElementById('back-from-courses').addEventListener('click', () => {
    screens.courses.style.display = 'none';
    screens.home.style.display = 'flex';
  });
  document.getElementById('back-from-info').addEventListener('click', () => {
    screens.info.style.display = 'none';
    screens.home.style.display = 'flex';
  });
});
