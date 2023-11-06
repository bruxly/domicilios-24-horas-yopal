//crear una variable global para almacenar la contraseña del usuario

var passwordUsuario;


// Obtener los elementos del formulario
var form = document.querySelector (".form");
var password = document.querySelector (".key-nueva");
var confirmPassword = document.querySelector (".confirm-password");
var submitButton = document.querySelector (".url");

// Agregar un evento de clic al botón de envío
submitButton.addEventListener ("click", function (event) {
  // Prevenir el envío predeterminado del formulario
  event.preventDefault ();
  // Comparar los valores de las contraseñas

  if (password.value == "" || confirmPassword.value == "") {
    // Si alguno está vacío, mostrar un mensaje de alerta
    alert ("Acción inválida");
  }

  else if (password.value === confirmPassword.value) {
    // Si son iguales, asignar el valor de la contraseña a la variable global
    passwordUsuario = password.value;

    //redirigir al enlace del boton
    window.location.href = submitButton.href;
  } else {
    // Si no son iguales, mostrar una alerta
    alert ("La contraseña no coincide");
  }
});

