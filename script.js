document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del formulario
    var form = document.getElementById("comprartktForm");
    var cantidadInput = document.getElementById("cantidad_tickets");
    var categoriaSelect = document.getElementById("category");
    var resumenDeCompra = document.getElementById("resumenDeCompra");
    var categoriaComprador = document.getElementById("categoriaComprador");
    var cantidadIngresada = document.getElementById("cantidadIngresada");
    var totalSDscto = document.getElementById("totalSDscto");
    var totalPagoConDescuento = document.getElementById("totalPagoConDescuento");
    var totalPagoResumen = document.getElementById("totalPagoResumen");
    var resultadoCompra = document.getElementById("resultadoCompra");
    var resultadoDiv = document.getElementById("resultado");
    var borrarFormButton = document.getElementById("borrarForm");
    var resumenPagoButton = document.getElementById("resumenPago");
  
    // Variables de configuración
    var valorTicket = 200;
    var descuentoEstudiante = 0.1;
    var descuentoTrainee = 0.2;
    var descuentoJunior = 0.3;
  
    // Función para calcular el resultado de la compra
    function calcularCompra() {
      var cantidad = parseInt(cantidadInput.value);
      var categoria = categoriaSelect.value;
  
      var precioSinDescuento = cantidad * valorTicket;
      var descuento = 0;
      if (categoria === "estudiante") {
        descuento = precioSinDescuento * descuentoEstudiante;
      } else if (categoria === "trainee") {
        descuento = precioSinDescuento * descuentoTrainee;
      } else if (categoria === "junior") {
        descuento = precioSinDescuento * descuentoJunior;
      }
  
      var totalConDescuento = precioSinDescuento - descuento;
  
      // Mostrar los valores en el resumen de compra
      categoriaComprador.textContent = categoria;
      cantidadIngresada.textContent = cantidad;
      totalSDscto.textContent = "$ " + precioSinDescuento.toFixed(2);
      totalPagoConDescuento.textContent = "$ " + descuento.toFixed(2);
      totalPagoResumen.textContent = "$ " + totalConDescuento.toFixed(2);
  
      // Mostrar el resultado de la compra
      resultadoCompra.textContent = "¡Compra realizada exitosamente!";
      resultadoDiv.style.display = "block";
    }
  
    // Función para limpiar el formulario
    function limpiarFormulario() {
      form.reset();
      resumenDeCompra.style.display = "none";
      resultadoDiv.style.display = "none";
    }
  
    // Evento click del botón "Resumen"
    resumenPagoButton.addEventListener("click", function() {
      calcularCompra();
    });
  
    // Evento click del botón "Borrar"
    borrarFormButton.addEventListener("click", function() {
      limpiarFormulario();
    });
  });
  