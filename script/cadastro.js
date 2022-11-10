// selecionando tag usuario
const usuario = document.querySelector('header .avatar-content div');
// modificando tag
usuario.innerHTML = "<strong>Jefferson</strong>";

// selecionando imagem do avatar
const image = document.querySelector('.avatar');
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Rosa_rosa-claro.jpg/220px-Rosa_rosa-claro.jpg';
image.style.borderRadius = '50%';
image.style.width = '20px';
image.style.height = '20px';

// selecionando input
const input = document.getElementsByName('name');
// modificando placeholder do input
input[0].placeholder = 'Primeiro Nome';

// modificando CSS de todos elementos inputs
let cssInput = document.querySelectorAll('body .form-auth input');
// modificando cada elemento com a estrutura de repetição forEach
cssInput.forEach(input => {
  input.style.cssText += 'border-radius: 25px';
});

// selecionando o body
let cssBody = document.querySelector('body');
// modificando o background do body
cssBody.style.cssText += 'background-color: #fafafa';

// selecionando o formulario;
let form = document.querySelector('.form-auth');
// aplicando estilização no formulário;
form.style.cssText += "display: flex; flex-flow: column;";