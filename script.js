document.addEventListener('DOMContentLoaded', () => {
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
      ],
      coursesTitle: "Nuestros cursos",
      infoTitle: "Sobre EDUcate",
      infoText: "EDUcate es una plataforma educativa interactiva diseñada para ayudarte a aprender de forma fácil y divertida. Selecciona un curso y comienza tu camino de aprendizaje."
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
      ],
      coursesTitle: "Our Courses",
      infoTitle: "About EDUcate",
      infoText: "EDUcate is an interactive educational platform designed to help you learn easily and have fun. Select a course and start your learning journey."
    }
  };

  // Elementos
  const langSelect = document.getElementById('langSelect');
  const title = document.getElementById('title');
  const slogan = document.getElementById('slogan');
  const startBtn = document.getElementById('startBtn');
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const footer = document.getElementById('footer');
  const courseCards = document.querySelectorAll('.card');

  // Pantallas
  const screens = {
    home: document.getElementById('screen-home'),
    courses: document.getElementById('screen-courses'),
    info: document.getElementById('screen-info')
  };

  const coursesTitle = document.getElementById('courses-title');
  const infoTitle = document.getElementById('info-title');
  const infoText = document.getElementById('info-text');

  const backFromCourses = document.getElementById('back-from-courses');
  const backFromInfo = document.getElementById('back-from-info');

  // Navegación entre pantallas
  startBtn.addEventListener('click', () => {
    screens.home.style.display = 'none';
    screens.courses.style.display = 'flex';
  });

  learnMoreBtn.addEventListener('click', () => {
    screens.home.style.display = 'none';
    screens.info.style.display = 'flex';
  });

  backFromCourses.addEventListener('click', () => {
    screens.courses.style.display = 'none';
    screens.home.style.display = 'flex';
  });

  backFromInfo.addEventListener('click', () => {
    screens.info.style.display = 'none';
    screens.home.style.display = 'flex';
  });

  // Traducción
  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang];
    title.textContent = t.title;
    slogan.textContent = t.slogan;
    startBtn.textContent = t.start;
    learnMoreBtn.textContent = t.learn;
    footer.textContent = t.footer;
    coursesTitle.textContent = t.coursesTitle;
    infoTitle.textContent = t.infoTitle;
    infoText.textContent = t.infoText;

    t.courses.forEach((c, i) => {
      const card = courseCards[i];
      card.querySelector('h3').textContent = c.title;
      card.querySelector('p').textContent = c.desc;
    });
  });
});
