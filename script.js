document.addEventListener("DOMContentLoaded", function () {
  showPopup();
});

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function submitForm() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

  // Puedes realizar acciones con los datos ingresados, como enviarlos a un servidor, almacenarlos localmente, etc.

  // Cerrar el popup después de enviar el formulario
  closePopup();
}
