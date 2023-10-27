// Función para calcular el IMC y mostrar recomendaciones
function calcularIMC() {
    // Obtén los valores de peso y talla del formulario
    const peso = parseFloat(document.getElementById("pesoActual").value);
    const talla = parseFloat(document.getElementById("talla").value);
  
    if (!isNaN(peso) && !isNaN(talla) && talla > 0) {
      // Calcula el IMC
      const imc = peso / (talla * talla);
  
      // Muestra el resultado en el elemento "imcResult"
      const imcResult = document.getElementById("imcResult");
      let mensajeIMC = `Tu IMC es: ${imc.toFixed(2)} - `;
  
      // Clasifica según el rango de peso para la edad gestacional y muestra recomendaciones
      if (imc < 20.0) {
        mensajeIMC += '<span style="color: red;">BAJO PESO PARA LA EDAD GESTACIONAL</span><br>';
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>RECOMENDACIONES:</span><br>";
        mensajeIMC += "1. Según su clasificación nutricional al finalizar el embarazo debe obtener una ganancia de peso de 12 a 18 kg.<br>\n";
        mensajeIMC += "2. Asistir a controles prenatales cada mes para seguimiento y manejo según criterio médico.<br>\n";
        mensajeIMC += "3. Realizar toma oportuna y adecuada de micronutrientes (ácido fólico sulfato y calcio).<br>";
        mensajeIMC += "4. Alimentación saludable rica en: proteínas, frutas, verduras, lácteos, cereales y legumbres, siguiendo las recomendaciones brindadas por el profesional (nutricionista).<br>";
        mensajeIMC += "5. Asistir al curso psicoprofiláctico.<br>";
        mensajeIMC += "6. Se sugieren algunos alimentos los cuales le van a ayudar a obtener una ganancia de peso adecuada.<br>";
        mensajeIMC += "7. Se deben preferir siempre los alimentos frescos, naturales, propios de cada región del país.<br>";
        mensajeIMC += "8. Durante la gestación, se debe aumentar el consumo de alimentos fuente de proteínas y hierro como las carnes (res, pollo, cerdo, pescado fresco) y vísceras (pajarilla, hígado), para prevenir la anemia y contribuir al crecimiento y desarrollo del bebé.<br>";
        mensajeIMC += "9. Consumir diariamente leche y productos lácteos como yogurt, kumis y queso fresco, por su alto contenido de proteínas y calcio que favorecen la formación del bebé y previenen la aparición de enfermedades como la osteoporosis en la madre. Prefiera los productos lácteos bajos en grasas y evite la crema de leche.<br>";
        mensajeIMC += "10. El huevo es fuente de proteína de alta calidad y es de bajo costo para la familia colombiana. Por tanto, se recomienda aumentar su consumo durante la gestación ya que favorece la formación y crecimiento del bebé y contribuye al mantenimiento de la salud de la madre. Se recomienda consumirlo en preparaciones que no requieran adición de grasa o aceite.<br>";
        mensajeIMC += "11. Las leguminosas son fuente de proteínas de origen vegetal y fibra. Aumente el consumo de leguminosas como el frijol, garbanzo, arveja y lentejas, combinadas con un cereal como el arroz para mejorar la calidad de sus nutrientes. Con el consumo de leguminosas, se recomienda incluir una fruta rica en vitamina C como la guayaba, mandarina o naranja, ya que esto favorece la absorción del hierro en el cuerpo. Evite mezclar las leguminosas con lácteos; esto interfiere con la absorción del hierro en el cuerpo.<br>";
        mensajeIMC += "12. Aumente el consumo diario de frutas y verduras, preferiblemente enteras y las verduras crudas o al vapor. Esto contribuye a la buena digestión y garantiza el aporte necesario de vitaminas, minerales y fibra tanto para el bebé como para la madre, esenciales para el crecimiento y el funcionamiento del organismo. Además, se recomienda:<br>";
        mensajeIMC += "13. Consumirlas como parte de los refrigerios. Evite consumir productos de paquete.<br>";
        mensajeIMC += "14. Aprovechar las que estén en cosecha y sean de la región para disminuir los costos de la alimentación en la familia.<br>";
        mensajeIMC += "15. Disponer, en el hogar, de frutas y verduras listas para consumir en lugares visibles para motivar su ingesta en cualquier momento del día.<br>";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>NOTAS:</span><br>";
        mensajeIMC += "ESTE PLAN DE ALIMENTACIÓN ES GENERAL PARA SU CLASIFICACIÓN NUTRICIONAL SI USTED DESEA PUEDE CONSULTAR CON EL PROFESIONAL (NUTRICIONISTA) PARA ESTABLECER UN PLAN DIETARIO SEGÚN SU CONDICIÓN ECONÓMICA Y PREFERENCIAS."
      } else {
        mensajeIMC += "PESO ADECUADO PARA LA EDAD GESTACIONAL";
      }
  
      imcResult.innerHTML = mensajeIMC;
    } else {
      // Muestra un mensaje de error si los valores no son válidos
      const imcResult = document.getElementById("imcResult");
      imcResult.style.color = "red"; // Cambia el color de la fuente a rojo
      imcResult.textContent = "Por favor, ingresa valores válidos.";
    }
  }
  
  // Asocia la función de cálculo al evento de envío del formulario
  document.getElementById("gestationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    calcularIMC(); // Calcula el IMC y muestra las recomendaciones
  });  