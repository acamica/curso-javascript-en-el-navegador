// Definimos una funcion para generar el contenido del documento
function showContent() {
  // Obtenemos una referencia al body del documento
  var body = document.body;

  // Creamos un elemento h1
  var titulo = document.createElement('h1');

  // Creamos un elmento listaa ul
  var lista = document.createElement('ul');

  // Creamos un elemento h2
  var tituloSecundario = document.createElement('h2');

  // Definimos un array con textos que queremos poner en el documento
  var elementos = [
    'Distintas formas de agregar y ejecutar Javascript dentro de un documento HTML',
    'Manejar la compatibilidad entre los distintos browsers',
    'Entender qué es y cómo funciona el DOM',
    'Manipular los elementos de nuestro documento',
    'Eventos'
  ];

  // Establecemos el texto del titulo
  titulo.innerText = 'Bienvenidos a Javascript en el navegador!';

  // Establecemos el texto del titulo secundario
  tituloSecundario.innerText = 'En este curso vamos a aprender:';

  // Agregamos el título como contenido del elemento body
  body.appendChild(titulo);

  // Agregamos el título secundario como contenido del elemento body
  body.appendChild(tituloSecundario);

  // Recorremos la listaa de textos que tenemos en el array elementos
  elementos.forEach(function(text) {
    // Creamos un elemento de lista
    var itemDeLalista = document.createElement('li');

    // Establecemos el texto del elemento lista utilizando el elemento del array
    itemDeLalista.innerText = text;

    // Agregamos el elemento de la lista a la lista
    lista.appendChild(itemDeLalista);
  });

  // Agregamos la lista al elemento body
  body.appendChild(lista);
}

// Utilizamos el evento onload y le asignamos una funcion para que se ejecute luego de cargar el documento
window.onload = showContent;
