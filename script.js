const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const buttonLogin = document.querySelector('.button');
const check = document.querySelector('#agreement');
const buttonForm = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', login);

function checkBox() {
  if (check.checked === true) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
}

check.addEventListener('click', checkBox);

function counter() {
  const characterCounter = document.querySelector('#counter');
  const commentMaxLength = 500;

  if (textArea.value.length <= textArea.maxLength) {
    const finalLength = commentMaxLength - textArea.value.length;
    characterCounter.innerText = finalLength;
  }
  if (textArea.value.length === commentMaxLength) {
    alert('Você chegou no limite máximo de caracteres!');
  }
}

textArea.addEventListener('keyup', counter);

function contentValues(content) {
  let concatenations = '';
  Object.values(content).forEach((cadaValor) => {
    if (cadaValor.checked === true) {
      concatenations += cadaValor.defaultValue;
      if (cadaValor.checke !== concatenations[concatenations.length - 1]) {
        concatenations += ', ';
      }
    }
  });
  return concatenations;
}

function showInfo(event) {
  event.preventDefault();
  const firstName = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const content = document.querySelectorAll('.subject');
  firstName.value = `Nome: ${firstName.value} ${lastName.value}`;
  const pFullName = document.createElement('p');
  pFullName.innerText = firstName.value;
  const pContent = document.createElement('p');
  pContent.innerText = `Matéria: ${contentValues(content)}`;

  const form = document.querySelector('#evaluation-form');
  form.innerHTML = null;
  form.appendChild(pFullName);
  form.appendChild(pContent);
}

buttonForm.addEventListener('click', showInfo);
