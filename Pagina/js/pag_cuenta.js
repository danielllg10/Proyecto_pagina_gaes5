
// Aca va toda la seccion de Cuentas
const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        // Esta parte lo que dice es saber cual boton fue el que genero la accion
        // si el de iniciar o el de registrar
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});