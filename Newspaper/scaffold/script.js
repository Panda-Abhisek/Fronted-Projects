const modeSwitch = document.querySelector('.mode-switch');
const modeIcon = document.getElementById('mode-icon'); // or .mode-icon if using a class
const body = document.body;

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('light-mode'); // ✅ Toggle on <body> instead of <html>
  modeIcon.textContent = body.classList.contains('light-mode') ? '🌞' : '🌙'; // ✅ Update icon
});
