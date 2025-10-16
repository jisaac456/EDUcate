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
