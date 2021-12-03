const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const button = document.querySelector('.button');
button.addEventListener('click', login);
// O type checkbox vem com um atributo de checked que retorna true ou falso.

function checkedBox() {
  const btn = document.querySelector('#submit-btn');
  const check = document.querySelector('#agreement');
  if (check.checked === true) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
const check = document.querySelector('#agreement');
check.addEventListener('click', checkedBox);
