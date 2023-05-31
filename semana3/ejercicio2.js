// Ejercicio 2: Calcular la suma de los elementos de un array.

function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  }
  
  module.exports = sumaArray;
  