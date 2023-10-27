// Función para calcular el IMC
function calcularIMC() {
  // Obtén los valores de peso y talla del formulario
  const peso = parseFloat(document.getElementById("pesoActual").value);
  const talla = parseFloat(document.getElementById("talla").value);

  if (!isNaN(peso) && !isNaN(talla) && talla > 0) {
    // Calcula el IMC
    const imc = peso / (talla * talla);

    // Muestra el resultado en el elemento "imcResult"
    document.getElementById("imcResult").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
  } else {
    // Muestra un mensaje de error si los valores no son válidos
    document.getElementById("imcResult").textContent = "Por favor, ingresa valores válidos.";
  }
}

// Asocia la función de cálculo al evento de envío del formulario
document.getElementById("gestationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto
  calcularIMC(); // Calcula el IMC
});
