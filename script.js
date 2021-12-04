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

// O type checkbox vem com um atributo de checked que retorna true ou falso.

function checkBox() {
  if (check.checked === true) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
}

check.addEventListener('click', checkBox);

// Alerta para quando tentar escrever mais do que 500 caracteres.
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

// Requisito 21

function showInfo(event) {
  // pegar os dados escritos pelo usuario
  // criar elementos p. cada elemento p recebe o dado correspondente.
  // enxertar o elemento preenchido no html.
// o que for de várias opções pega pelo nome
  event.preventDefault();
  let divData = document.createElement('div');
  let name = document.querySelector('#input-name').value;
  let pFullName = document.createElement('p');
  let lastName = document.querySelector('#input-lastname').value;
  let email = document.querySelector('#input-email').value;
  let pEmail = document.createElement('p');
  let selectedHouse = document.querySelector('#house').value
  let pSelectedHouse = document.createElement('p');
  let family = document.querySelector('input[name=family]:checked').value;
  let pFamily = document.createElement('p');
  let content = document.querySelectorAll('input[class=cb-content]:checked');
  let pContent = document.createElement('p');

console.log(content);

  pFullName.innerHTML = 'Nome completo: ' + name + ' ' + lastName;
  pEmail.innerHTML = 'E-mail: ' + email;
  pSelectedHouse.innerHTML = 'Casa: ' + selectedHouse;
  pFamily.innerHTML = 'Família: ' + family;
  pContent.innerHTML = content.toString();

  document.body.appendChild(divData);
  divData.appendChild(pFullName);
  divData.appendChild(pEmail);
  divData.appendChild(pSelectedHouse);
  divData.appendChild(pFamily);
  divData.appendChild(pContent);

}

buttonForm.addEventListener('click', showInfo)


