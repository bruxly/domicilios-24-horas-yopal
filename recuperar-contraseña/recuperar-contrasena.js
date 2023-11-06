const button = document.querySelector('.button-recuperar-contrasena');





button.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 10000) + 1000;
  alert(`Copie este código: ${randomNumber}`);
});
