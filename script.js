const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const button = document.querySelector('.button');

function login() {
//   event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', login);
