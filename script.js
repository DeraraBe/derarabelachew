const body = document.body;
const button = document.getElementById('colorButton');
let currentColorScheme = 1;

button.addEventListener('click', changeColorScheme);

function changeColorScheme() {
  currentColorScheme++;
  if (currentColorScheme > 3) {
    currentColorScheme = 1;
  }

  body.className = `color-scheme-${currentColorScheme}`;
}
function openGitHubProject1() {
  window.location.href = 'https://github.com/users/derarabelachew/projects/1/views/1';
}
// fix my project for mobile viwe 
