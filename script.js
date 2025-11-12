function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.style.display = "none");
  document.getElementById(screenId).style.display = "block";
  window.scrollTo(0, 0);
}

document.getElementById("language-select").addEventListener("change", (e) => {
  const lang = e.target.value;
  const tagline = document.getElementById("tagline");
  const coursesTitle = document.getElementById("courses-title");
  const aboutText = document.getElementById("about-text");

  if (lang === "en") {
    tagline.textContent = "Learning has never been so easy and fun!";
    coursesTitle.textContent = "Our Featured Courses";
    aboutText.innerHTML = `
      <h2>What is EDUcate?</h2>
      <p>EDUcate is an online educational platform designed to help students of all ages learn interactively and enjoyably.</p>
      <h3>How does it work?</h3>
      <p>Create a free account, choose a subject, and start exploring courses. EDUcate adapts content to your level so you can learn at your own pace.</p>
      <h3>Course Types</h3>
      <ul>
        <li>📘 English: vocabulary, pronunciation, and reading comprehension.</li>
        <li>📐 Mathematics: algebra, geometry, and logic.</li>
        <li>🌿 Science: biology, chemistry, and physics.</li>
        <li>🎨 Art: drawing, color, and creativity.</li>
      </ul>
    `;
  } else {
    tagline.textContent = "Aprender nunca fue tan fácil y divertido";
    coursesTitle.textContent = "Nuestros cursos destacados";
    aboutText.innerHTML = `
      <h2>¿Qué es EDUcate?</h2>
      <p>EDUcate es una plataforma educativa en línea diseñada para que estudiantes de todas las edades aprendan de forma interactiva y divertida.</p>
      <h3>¿Cómo funciona?</h3>
      <p>Crea una cuenta gratuita, elige una materia y comienza a explorar los cursos. EDUcate adapta el contenido a tu nivel y te permite avanzar a tu propio ritmo.</p>
      <h3>Tipos de cursos</h3>
      <ul>
        <li>📘 Inglés: vocabulario, pronunciación y comprensión lectora.</li>
        <li>📐 Matemáticas: álgebra, geometría y lógica.</li>
        <li>🌿 Ciencias: biología, química y física con experimentos visuales.</li>
        <li>🎨 Arte: dibujo, color, diseño y creatividad.</li>
      </ul>
    `;
  }
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
