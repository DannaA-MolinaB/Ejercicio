const colorBox = document.getElementById('colorBox');
const colorButton = document.getElementById('colorButton');

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Cambiar el color del cuadro cuando se presiona el botón
colorButton.addEventListener('click', () => {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
});
