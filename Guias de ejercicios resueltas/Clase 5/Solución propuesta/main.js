// Ejercicio 1
const colores = ["rojo", "naranja", "amarillo", "verde", "azul"];

// Ejercicio 2
const tercerElemento = colores[2];

// Ejercicio 3
console.log(colores[0][0]);

// Ejercicio 4
const numeroAleatorio = Math.floor(Math.random() * 99 + 1);

// Ejercicio 5
const numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i + 1);
}
console.log(numeros);

// Ejercicio 6
const numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 99 + 1));
}
console.log(numerosAleatorios);

// Ejercicio 7
const copia = numerosAleatorios.slice();
// const copia = [...numerosAleatorios];           <-- Otra forma de copiar (y la más moderna): utilizando el operador "spread" (...)
// const copia = [].concat(numerosAleatorios);     <-- Otra forma de copiar el arreglo: utilizando el método "concat"
console.log(copia);

// Ejercicio 8
let cadena = "";
const cadenas = [];
while (cadena !== "cancelar") {
  cadena = prompt("Ingrese una cadena de texto: ");
  cadenas.push(cadena);
}
console.log(cadenas.join("-"));
