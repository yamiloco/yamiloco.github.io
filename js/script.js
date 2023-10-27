// Función para calcular el IMC y clasificar según el rango de peso
function calcularIMC() {
    // Obtén los valores de peso y talla del formulario
    const peso = parseFloat(document.getElementById("pesoActual").value);
    const talla = parseFloat(document.getElementById("talla").value);
  
    if (!isNaN(peso) && !isNaN(talla) && talla > 0) {
      // Calcula el IMC
      const imc = peso / (talla * talla);
  
      // Muestra el resultado en el elemento "imcResult"
      let mensajeIMC = `Tu IMC es: ${imc.toFixed(2)} - `;
  
      // Clasifica según el rango de peso para la edad gestacional
      if (imc < 20.0) {
        mensajeIMC += "BAJO PESO PARA LA EDAD GESTACIONAL";
      } else if (imc >= 20.0 && imc < 25.0) {
        mensajeIMC += "PESO ADECUADO PARA LA EDAD GESTACIONAL";
      } else if (imc >= 25.0 && imc < 30.0) {
        mensajeIMC += "SOBREPESO";
      } else {
        mensajeIMC += "OBESIDAD";
      }
  
      document.getElementById("imcResult").textContent = mensajeIMC;
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