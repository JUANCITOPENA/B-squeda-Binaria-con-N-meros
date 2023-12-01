// Generar un arreglo ordenado de números del 5 al 84
const numeros = Array.from({ length: 84 }, (_, index) => index + 5);

// Función de búsqueda binaria
function busquedaBinaria(arr, target) {
  // Inicialización de variables para la búsqueda binaria
  let inicio = 0;
  let fin = arr.length - 1;

  // Bucle de búsqueda binaria
  while (inicio <= fin) {
    // Cálculo del índice medio
    const medio = Math.floor((inicio + fin) / 2);

    // Verificación del número en el medio del arreglo
    if (arr[medio] === target) {
      // Retorna si el número se encuentra en la posición media
      return `Número ${target} encontrado en la posición ${medio}.`;
    } else if (arr[medio] < target) {
      // Actualiza el inicio si el número está en la mitad derecha del arreglo
      inicio = medio + 1;
    } else {
      // Actualiza el final si el número está en la mitad izquierda del arreglo
      fin = medio - 1;
    }
  }

  // Retorna si el número no se encuentra en el arreglo
  return `Número ${target} no encontrado en el arreglo.`;
}

// Función para buscar el número ingresado por el usuario
function buscarNumero() {
  // Obtiene el número ingresado por el usuario
  const numeroIngresado = parseInt(
    document.getElementById("numeroBusqueda").value
  );

  // Obtiene el contenedor para mostrar los resultados
  const contenedor = document.getElementById("contenedor");

  // Crea un elemento para mostrar la lista y los resultados
  const resultadoElemento = document.getElementById("resultado");

  // Resalta el número buscado en verde y muestra la lista y el resultado
  resultadoElemento.innerHTML = `<p>Arreglo: ${numeros
    .map(
      (numero) =>
        `<span class="numero-arreglo${
          numero === numeroIngresado ? " resaltado" : ""
        }">${numero}</span>`
    )
    .join(", ")}</p>`;
  resultadoElemento.innerHTML += `<p>Número a buscar: ${numeroIngresado}</p>`;
  resultadoElemento.innerHTML += `<p>${busquedaBinaria(
    [...numeros],
    numeroIngresado
  )}</p>`;
}
