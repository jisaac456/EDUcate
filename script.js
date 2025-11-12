document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    es: {
      title: "EDUcate 2025",
      slogan: "Aprender nunca fue tan fácil y divertido",
      start: "Comenzar ahora",
      learn: "Saber más",
      footer: "EDUcate © 2025 — Aprende, crece y transforma tu futuro 🌟",
      coursesTitle: "Nuestros cursos"
    },
    en: {
      title: "EDUcate 2025",
      slogan: "Learning has never been so easy and fun",
      start: "Start now",
      learn: "Learn more",
      footer: "EDUcate © 2025 — Learn, grow, and shape your future 🌟",
      coursesTitle: "Our Courses"
    }
  };

  const langSelect = document.getElementById('langSelect');
  const title = document.getElementById('title');
  const slogan = document.getElementById('slogan');
  const startBtn = document.getElementById('startBtn');
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const footer = document.getElementById('footer');
  const coursesTitle = document.getElementById('courses-title');

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

  langSelect.addEventListener('change', (e) => {
    const lang = translations[e.target.value];
    title.textContent = lang.title;
    slogan.textContent = lang.slogan;
    startBtn.textContent = lang.start;
    learnMoreBtn.textContent = lang.learn;
    footer.textContent = lang.footer;
    coursesTitle.textContent = lang.coursesTitle;
  });
});
