const { jsPDF } = window.jspdf;
const btnDescargar = document.querySelector("#btnDescargar");

// Configuracion de la pagina del pdf
const doc = new jsPDF("p", "pt", "a4");

// Definir imagen, su tamaño y su posicion x e y
const img = new Image();
img.src = "assets/pizza-granny.jpg";
const imgX = 40;
const imgY = 20;
const imgWidth = 80;
const imgHeight = 80;

// Agregar una imagen
doc.addImage(img, "JPEG", imgX, imgY, imgWidth, imgHeight);

// Definir titulo y su posicion x e y
const title = "Recetas de la abuela";
const titleX = 140;
const titleY = 40;

// Agregar titulo al pdf
doc.setFontSize(24);
doc.setFont("helvetica", "bold");
doc.text(titleX, titleY, title);

// Definir recetas y sus posiciones x e y
const recipes = [
  {
    name: "Pizza Margherita",
    ingredients: "Salsa de tomate, queso mozzarella, hojas frescas de albahaca",
    instructions:
      "1. Precalentar el horno a 450 grados F (230 grados C).\n2. Extender la salsa de tomate sobre la masa de pizza.\n3. Añadir queso mozzarella encima de la salsa.\n4. Hornear en el horno precalentado durante 10-15 minutos.\n5. Añadir hojas frescas de albahaca encima de la pizza y servir.",
    x: 40,
    y: 140,
  },
  {
    name: "Pizza de Pepperoni",
    ingredients: "Salsa de tomate, queso mozzarella, rodajas de pepperoni",
    instructions:
      "1. Precalentar el horno a 450 grados F (230 grados C).\n2. Extender la salsa de tomate sobre la masa de pizza.\n3. Añadir queso mozzarella encima de la salsa.\n4. Añadir rodajas de pepperoni encima del queso.\n5. Hornear en el horno precalentado durante 10-15 minutos y servir.",
    x: 40,
    y: 280,
  },
  {
    name: "Pizza Hawaiana",
    ingredients: "Salsa de tomate, queso mozzarella, jamón, trozos de piña",
    instructions:
      "1. Precalentar el horno a 450 grados F (230 grados C).\n2. Extender la salsa de tomate sobre la masa de pizza.\n3. Añadir queso mozzarella encima de la salsa.\n4. Añadir jamón y trozos de piña encima del queso.\n5. Hornear en el horno precalentado durante 10-15 minutos y servir.",
    x: 40,
    y: 420,
  },
];

// Agregar las recetas al pdf
recipes.forEach((recipe) => {
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(recipe.x, recipe.y, recipe.name);
  doc.setFontSize(12);
  doc.setFont("helvetica", "italic");
  doc.text(recipe.x, recipe.y + 20, recipe.ingredients);
  doc.setFont("helvetica", "normal");
  doc.text(recipe.x, recipe.y + 40, recipe.instructions);
});

// Accion para descargar el pdf
btnDescargar.addEventListener("click", () => {
  doc.save("recetas.pdf");
});
