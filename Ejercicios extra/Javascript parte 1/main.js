// Ejercicio 1
let num1 = 4;
let num2 = 6;
const suma = num1 + num2;
console.log("La suma es:", suma);

// Ejercicio 2
const anioActual = 2023;
let anioNacimiento = 1999;
const edad = anioActual - anioNacimiento;
console.log("Usted tiene", edad, "años.");

// Ejercicio 3
let nombre = "Pedro";
let horasTrabajoDiarias = 4;
let valorHora = 1300;
let sueldo = horasTrabajoDiarias * valorHora * 20;
console.log("¡Bienvenido " + nombre + "!");
console.log("Este mes cobra $ " + sueldo + ".");

// Ejercicio 4
let num = 2;
if (num % 2 == 0) {
  console.log("El numero", num, "es par.");
} else {
  console.log("El numero", num, "es impar.");
}

// Ejercicio 5
let nota = 8;
let estadoTarea = "entregada";
if (estadoTarea === "entregada" && nota > 5) {
  console.log("Estudiante aprobado.");
} else {
  console.log("Estudiante no aprobado.");
}

// Ejercicio 6
let nivelBeneficio = 6;
let rol = "U";
if ((rol === "U" && nivelBeneficio >= 4) || rol === "A") {
  console.log("Puede acceder al descuento.");
} else {
  console.log("No puede acceder al descuento.");
}
