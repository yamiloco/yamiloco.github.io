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
  
      // Ahora puedes agregar una lógica adicional para interpretar el IMC y mostrar un mensaje informativo.
      if (imc < 18.5) {
        document.getElementById("imcResult").textContent += " (Bajo peso)";
      } else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("imcResult").textContent += " (Peso saludable)";
      } else if (imc >= 25 && imc < 29.9) {
        document.getElementById("imcResult").textContent += " (Sobrepeso)";
      } else {
        document.getElementById("imcResult").textContent += " (Obesidad)";
      }
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
  
