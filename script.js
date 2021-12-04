const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const buttonLogin = document.querySelector('.button');
const check = document.querySelector('#agreement');
const buttonForm = document.querySelector('#submit-btn');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', login);

// O type checkbox vem com um atributo de checked que retorna true ou falso.

function checkBox() {
  const check = document.querySelector('#agreement');
  if (check.checked === true) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
}

check.addEventListener('click', checkBox);

function counter() {
  const characterCounter = document.querySelector('#counter');
  const textArea = document.querySelector('#textArea');
  if (characterCounter.value <= textArea.length) {
    characterCounter.innerText = characterCounter.value - textArea.length;
  }
}
counter();
