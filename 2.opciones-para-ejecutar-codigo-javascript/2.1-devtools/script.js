// Definimos una lista de colores que vamos a utilizar
var colors = ['FF0000', 'FF7F00', 'FFFF00', '7FFF00', '00FF00', '00FF7F', '00FFFF', '007FFF',
'0000FF', '7F00FF', 'FF00FF', 'FF007F'];

// Seleccionamos el elemento ac-top-bar
var header = document.querySelector('ac-top-bar');

// Seleccionamos el elemento .inner-wrap que esta dentro del elemento ac-home-slides
var slide = document.querySelector('ac-home-slides .inner-wrap');

// Seleccionamos el elemento parrafo que esta dentro del slide
var paragraph = slide.querySelector('p');

// Seleccionamos el boton que esta dentro del slide
var buttons = slide.querySelectorAll('.btn');

// Seleccionamos el titulo h1 que esta dentro del slide
var title = slide.querySelector('h1');

var index = 0;

function changeElementsColor() {
  // seleccionamos un color del array usando el la variable index como indice
  var color = '#' + colors[index];

  /*
    Establecemos el color de background utilizando el color nuevo y pisando la propiedad
    backgroundColor del objeto style
  */
  header.style.backgroundColor = color;

  // Cambiamos el color del titulo usando la propiedad style
  title.style.color = color;

  // Animamos el texto cambiando el tamaño en cada llamado
  title.style.fontSize = (60 + (index * 2)) + 'px';

  //
  if (index < colors.length) {
    index++;
  } else {
    index = 0;
  }
}

// usamos el objeto seleccionado que tenemos en la variable header y le cambiamos la clase por with-logo light
header.className = 'with-logo light';

// Le sacamos algunos hijos al elemento slide
slide.removeChild(paragraph);
slide.removeChild(buttons[0]);
slide.removeChild(buttons[1]);

// Le cambiamos el contenido al titulo del slide usando la propiedad innerText
title.innerText = 'Bienvenidos a Javascript!!!';

/*
  Seleccionamos el elemento con la clase .pc-only que está dentro de ac-top-bar-buttons y
  le borramos el contenido sobrescribiendo la propiedad innerHTML
*/
document.querySelector('ac-top-bar-buttons .pc-only').innerHTML = '';

// Cada 500 milisegundos llamamos a la función changeElementsColor
window.setInterval(changeElementsColor, 500);
