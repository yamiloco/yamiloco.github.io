// Función para borrar el formulario y el resultado del IMC
function borrarFormulario() {
  const form = document.getElementById("gestationForm");
  form.reset(); // Restablece el formulario

  const imcResult = document.getElementById("imcResult");
  imcResult.innerHTML = ""; // Borra el resultado del IMC
}

// Asocia la función de borrado al botón "Borrar"
document.getElementById("borrarBtn").addEventListener("click", function() {
  borrarFormulario();
});

// Función para calcular el IMC y mostrar recomendaciones
function calcularIMC() {
    // Restablece el contenido de "imcResult" a blanco al comenzar
    const imcResult = document.getElementById("imcResult");
    imcResult.innerHTML = "";

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
        mensajeIMC += '<span style="color: FireBrick; font-weight: bold;">BAJO PESO PARA LA EDAD GESTACIONAL</span><br><br>';
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>RECOMENDACIONES:</span><br>";
        mensajeIMC += "1. Según su clasificación nutricional al finalizar el embarazo debe obtener una ganancia de peso de 12 a 18 kg.<br>\n";
        mensajeIMC += "2. Asistir a controles prenatales cada mes para seguimiento y manejo según criterio médico.<br>\n";
        mensajeIMC += "3. Realizar toma oportuna y adecuada de micronutrientes (ácido fólico sulfato y calcio).<br>";
        mensajeIMC += "4. Alimentación saludable rica en: proteínas, frutas, verduras, lácteos, cereales y legumbres, siguiendo las recomendaciones brindadas por el profesional (nutricionista).<br>";
        mensajeIMC += "5. Asistir al curso psicoprofiláctico.<br>";
        mensajeIMC += "6. Se sugieren algunos alimentos los cuales le van a ayudar a obtener una ganancia de peso adecuada.<br>";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>DESAYUNO</span><br>";
        mensajeIMC += "\n\n<span style='color: blue; font-weight: bold;'>7:30 A.M.</span><br>";
        mensajeIMC += "- 1 Trozo de Fruta<br>";
        mensajeIMC += "- 1 Pocillo de una bebida<br>";
        mensajeIMC += "EJEMPLO: avena, yogurt, kumis o 1 taza de caldo de papa con carne de res magra o 1 taza de changua con huevo<br>";
        mensajeIMC += "- 1 Porcion de harina<br>";
        mensajeIMC += "EJEMPLO: 1 arepa de maíz o de yuca, 2 pancakes de harina de almendras o harina de avena, 4 galletas integrales o de maíz o 1 papa en el caldo<br>";
        mensajeIMC += "- 1 Pocillo de proteina<br>";
        mensajeIMC += "EJEMPLO: 1 – 2 huevos (puede consumirlos todos los días) o 1 trozo de queso o carne de res. Evite embutidos: jamón, salchicha, mortadela, salami,etc<br>";
        mensajeIMC += "\n\n<span style='color: blue; font-weight: bold;'>10:30 A.M.</span><br>";
        mensajeIMC += "- 1 Porcion de fruta<br>";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>ALMUERZO</span><br>";
        mensajeIMC += "\n\n<span style='color: blue; font-weight: bold;'>1:30 P.M.</span><br>";
        mensajeIMC += "- 1 Fruta en trozo<br>";
        mensajeIMC += "- 1 Porcion grande de alimento proteico<br>";
        mensajeIMC += "EJEMPLO: carne de res, pechuga de pollo sin piel o pescado.<br>";
        mensajeIMC += "- 1 0 2 porciones de verduda<br>";
        mensajeIMC += "EJEMPLO: 1 porción de ensalada de verduras y/o 1 porción grande de verdura caliente + aguacate y/o aceite de oliva.<br>";
        mensajeIMC += "- Una o maximo dos porciones de harina<br>";
        mensajeIMC += "EJEMPLO: 1 pocillo tintero de arroz o de pasta, 1 papa mediana, 1astilla de yuca 1/2 de plátano asado o :5 cucharadas de frijol, garbanzo, lenteja o arveja seca.<br>";
        mensajeIMC += "-	1 HORA DESPUÉS DEL ALMUERZO: 1 POCILLO DE AGUA AROMÁTICA DE FRUTAS SIN AZÚCAR<br>";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>ONCES</span><br>";
        mensajeIMC += "\n\n<span style='color: blue; font-weight: bold;'>4:00 P.M.</span><br>";
        mensajeIMC += "- 1 fruta o 1 tortilla +queso o con pollo o carne de res desmechados o champiñones + cubos de aguacate.<br>";
        mensajeIMC += "- 1 vaso de avena o yogurt normal o griego o 10 nueces, macadamias o almendras o 1 queso pera.<br>";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>COMIDA</span><br>";
        mensajeIMC += "\n\n<span style='color: blue; font-weight: bold;'>6:30 - 7:00 P.M.</span><br>";
        mensajeIMC += "\n\n<span style='color: black;'>OPCION # 1</span><br>";
        mensajeIMC += "-	1 arepa de maíz sin mantequilla o 1 tortilla de maíz.<br>";
        mensajeIMC += "-	1 porción de proteína: pollo deshilachado, carne molida o champiñones.<br>";
        mensajeIMC += "-	1 vaso de limonada.<br>";
        mensajeIMC += "\n\n<span style='color: black;'>OPCION # 2</span><br>";
        mensajeIMC += "-	-	Similar al almuerzo en porciones más pequeñas.<br>";
        mensajeIMC += "\n\n<span style='color: black;'>OPCION # 3</span><br>";
        mensajeIMC += "-	1 taza de crema natural de verduras + proteína + 1 papa + 1 cucharada de aceite de oliva.<br>";
        mensajeIMC += "-	1 arepa, galletas de maíz ,3 galletas o ¼ de plátano asado.<br>";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>NOTAS:</span><br>";
        mensajeIMC += "ESTE PLAN DE ALIMENTACIÓN ES GENERAL PARA SU CLASIFICACIÓN NUTRICIONAL SI USTED DESEA PUEDE CONSULTAR CON EL PROFESIONAL (NUTRICIONISTA) PARA ESTABLECER UN PLAN DIETARIO SEGÚN SU CONDICIÓN ECONÓMICA Y PREFERENCIAS."
      } else if (imc >= 20.0 && imc <= 24.9) {
        mensajeIMC += '<span style="color: DeepPink; font-weight: bold;">PESO ADECUADA PARA LA EDAD GESTACIONAL</span><br><br>';
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>RECOMENDACIONES:</span><br>";
        mensajeIMC += "1. Según su clasificación nutricional al finalizar el embarazo debe obtener una ganancia de peso de 10 a 13 kg.<br>\n";
        mensajeIMC += "2. Asistir a controles prenatales cada mes para seguimiento y manejo según criterio médico.<br>\n";
        mensajeIMC += "3. Realizar toma oportuna y adecuada de micronutrientes (ácido fólico sulfato y calcio).<br>";
        mensajeIMC += "4. Realizar actividad física moderada de su preferencia mínimo de 20 a 30 min diarios, e sugiere realizar caminatas en lugares amplios en los cuales cuentan con terrenos estables para prevenir accidentes.<br>";
        mensajeIMC += "5. Asistir al curso psicoprofiláctico y seguir recomendaciones nutricionales y de actividad física.<br>";
        mensajeIMC += "6. Alimentación saludable rica en: proteínas, frutas, verduras, lácteos, cereales y legumbres, siguiendo las recomendaciones brindadas por el profesional(nutricionista).<br>";
        mensajeIMC += "7. Se sugiere algunos alimentos los cuales van a ayudar a que usted continúe con una dieta saludable:<br>";
        mensajeIMC += "8. Durante la gestación, se debe aumentar el consumo de alimentos fuente de proteínas y hierro como las carnes (res, pollo, cerdo, pescado fresco) y vísceras (pajarilla, hígado), para prevenir la anemia y contribuir al crecimiento y desarrollo del bebé.<br>";
        mensajeIMC += "- Se deben preferir siempre los alimentos frescos, naturales, propios de cada región del país<br>";
        mensajeIMC += "- Durante la gestación, se debe aumentar el consumo de alimentos fuente de proteínas y hierro como las carnes (res, pollo, cerdo, pescado fresco) y vísceras (pajarilla, hígado), para prevenir la anemia y contribuir al crecimiento y desarrollo del bebé.<br>";
        mensajeIMC += "- Consumir diariamente leche y productos lácteos como yogurt, kumis y queso fresco, por su alto contenido de proteínas y calcio que favorecen la formación del bebé y previenen la aparición de enfermedades como la osteoporosis en la madre. Prefiera los productos lácteos bajos en grasas y evite la crema de leche. <br>";
        mensajeIMC += "- El huevo es fuente de proteína de alta calidad y es de bajo costo para la familia colombiana. Por tanto, se recomienda aumentar su consumo durante la gestación ya que favorece la formación y crecimiento del bebé y contribuye al mantenimiento de la salud de la madre. se recomienda consumirlo en preparaciones que no requieran adición de grasa o aceite.<br>";
        mensajeIMC += "- Las leguminosas son fuente de proteínas de origen vegetal y fibra. aumente el consumo de leguminosas como el frijol, garbanzo, arveja y lentejas, combinadas con un cereal como el arroz para mejorar la calidad de sus nutrientes. con el consumo de leguminosas, se recomienda incluir una fruta rica en vitamina c como la guayaba, mandarina o naranja, ya que esto favorece la absorción del hierro en el cuerpo. Evite mezclar las leguminosas con lácteos; esto interfiere con la absorción del hierro en el cuerpo.<br>";
        mensajeIMC += "- Aumente el consumo diario de frutas y verduras, preferiblemente enteras y las verduras crudas o al vapor. Esto contribuye a la buena digestión y garantiza el aporte necesario de vitaminas, minerales y fibra tanto para el bebé como para la madre, esenciales para el crecimiento y el funcionamiento del organismo. Además, se recomienda:<br>";
        mensajeIMC += " * Consumirlas como parte de los refrigerios. Evite consumir productos de paquete.<br>";
        mensajeIMC += " * Aprovechar las que estén en cosecha y sean de la región para disminuir los costos de la alimentación en la familia.<br>";
        mensajeIMC += " * Disponer, en el hogar, de frutas y verduras listas para consumir en lugares visibles para motivar su ingesta en cualquier momento del día.<br>";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>NOTAS:</span><br>";
        mensajeIMC += "ESTE PLAN DE ALIMENTACIÓN ES GENERAL PARA SU CLASIFICACIÓN NUTRICIONAL SI USTED DESEA PUEDE CONSULTAR CON EL PROFESIONAL (NUTRICIONISTA) PARA ESTABLECER UN PLAN DIETARIO SEGÚN SU CONDICIÓN ECONÓMICA Y PREFERENCIAS."
        
      } else if (imc >= 25.0 && imc <= 29.9) {
        mensajeIMC += '<span style="color: OrangeRed; font-weight: bold;">SOBREPESO</span><br><br>';
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>RECOMENDACIONES:</span><br>";
        mensajeIMC += "1.	Según su clasificacion nutricional al finalizar el embarazo debe obtener una ganancia de peso de 7 a 10 kg <br>\n";
        mensajeIMC += "2.	Asistir a controles prenatales cada mes para seguimiento y manejo según criterio medico(nutricion)<br>\n";
        mensajeIMC += "3.	Realizar toma oportuna y adecuada de micronutrientes (acido folico sulfato y calcio).<br>\n";
        mensajeIMC += "4.	Realizar actividad fisica moderada como caminar 10 min 2 veces al dia.<br>\n";
        mensajeIMC += "5.	Alimentacion salidable rica en proteinas, frutas, verduras, y legunbres, sigfuiendo las recomendaciones brindadas por el profesional (nutricionista).<br>\n";
        mensajeIMC += "6.	Asistir al curso psicoprofilactico.<br>\n";
        mensajeIMC += "7.	Si presenta algun sintoma de mareo, nauseas, vision borrosa, cansancio excesivo (signos de diabetes gestacional) debe acudir al servicio de urgencias.<br>\n";
        mensajeIMC += "8.	Mitigar la ingesta de alimentos con alto contenido en sodio, grasas, azucares y carbohidratos.<br>\n";
        mensajeIMC += "9.	Se sugiere plan dietario según para obtener ganancia de peso adecuado <br>\n";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>NOTA:</span><br>";
        mensajeIMC += "ESTE PLAN DE ALIMENTACION ES GENERAL PARA SU CLASIFICACION NUTRICIONAL SI USTED DESEA PUEDE CONSULTAR CON EL PROFESIONAL(NUTRICION) PARA ESTABLECER UN PLAN DIETARIO SEGÚN SU CONDICION ECONOMICA Y PREFERENCIAS"
      } else {
        mensajeIMC += '<span style="color: DarkBlue; font-weight: bold;">OBESIDAD</span><br><br>';
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>RECOMENDACIONES:</span><br>";
        mensajeIMC += "Según su clasificación nutricional al finalizar el embarazo debe obtener una ganancia de peso de 6 a 7 kg.<br>\n";
        mensajeIMC += "Asistir a controles prenatales cada mes para seguimiento y manejo según criterio médico (nutricionista).<br>\n";
        mensajeIMC += "Realizar toma oportuna y adecuada de micronutrientes (ácido fólico sulfato y calcio).<br>\n";
        mensajeIMC += "Realizar actividad física moderada de su preferencia mínimo de 20 a 30 min diarios, se sugiere realizar caminatas en lugares amplios en los cuales cuentan con terrenos estables para prevenir accidentes.<br>\n";
        mensajeIMC += "Asistir al curso psicoprofiláctico y seguir recomendaciones nutricionales y de actividad física.<br>\n";
        mensajeIMC += "Si presenta algún síntoma de: mareo, náuseas, visión borrosa, pitos en los oídos, cansancio excesivo (signos de diabetes gestacional) debe acudir al servicio de urgencias.<br>\n";
        mensajeIMC += "Mitigar la ingesta de alimentos con alto contenido en sodio, grasas, azúcares y carbohidratos.<br>\n";
        mensajeIMC += "Aumentar la ingesta de alimentos saludable: proteínas, frutas y verduras.<br>\n";
        mensajeIMC += "Se sugiere los siguientes alimentos los cuales van a contribuir a que mantenga una alimentación saludable y prevenir aumento de peso.<br>\n";
        mensajeIMC += "\n\n<span style='color: black; font-weight: bold;'>NOTA:</span><br>";
        mensajeIMC += "ESTE PLAN DE ALIMENTACIÓN ES GENERAL PARA SU CLASIFICACIÓN NUTRICIONAL SI USTED DESEA PUEDE CONSULTAR CON EL PROFESIONAL (NUTRICIONISTA) PARA ESTABLECER UN PLAN DIETARIO SEGÚN SU CONDICIÓN ECONÓMICA Y PREFERENCIAS."
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