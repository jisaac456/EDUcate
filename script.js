const screens = {
  home: document.getElementById('screen-home'),
  courses: document.getElementById('screen-courses'),
  info: document.getElementById('screen-info')
};

const backFromCourses = document.getElementById('back-from-courses');
const backFromInfo = document.getElementById('back-from-info');

startBtn.addEventListener('click', () => {
  screens.home.style.display = 'none';
  screens.courses.style.display = 'block';
});

learnMoreBtn.addEventListener('click', () => {
  screens.home.style.display = 'none';
  screens.info.style.display = 'block';
});

backFromCourses.addEventListener('click', () => {
  screens.courses.style.display = 'none';
  screens.home.style.display = 'block';
});

backFromInfo.addEventListener('click', () => {
  screens.info.style.display = 'none';
  screens.home.style.display = 'block';
});
es: {
  ...
  coursesTitle: "Nuestros cursos",
  infoTitle: "Sobre EDUcate",
  infoText: "EDUcate es una plataforma educativa interactiva diseñada para ayudarte a aprender de forma fácil y divertida. Selecciona un curso y comienza tu camino de aprendizaje."
},
en: {
  ...
  coursesTitle: "Our Courses",
  infoTitle: "About EDUcate",
  infoText: "EDUcate is an interactive educational platform designed to help you learn easily and have fun. Select a course and start your learning journey."
}
