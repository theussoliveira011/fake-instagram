let postagens = [
  {
    id: 1,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKt0aNlfJWmm6ZjbWCNYYhjUuWYIjEx4Wj5pEKXKkMnFy6hsFU-PKZcwz-oCvhko-8UE&usqp=CAU",
    name: "Rosana",
  },
];

// Seleciona o input
let buscarUsuario = document.querySelector(".search");
// Ao passar o mouse pelo botão de usuário adiciona o efeito box-shadow
buscarUsuario.addEventListener("mouseover", () => {
  buscarUsuario.style.cssText += "box-shadow: 0px 1px 3px black;";
});
// Remove o efeito ao tirar o mouse do elemento.
buscarUsuario.addEventListener("mouseout", () => {
  buscarUsuario.style.cssText += "box-shadow: none;";
});
//

// Seleciona coracao de curtida.
let imagem = document.querySelector(".likes img");
// Seleciona qtd de Likes
let qtdLikes = document.querySelector(".likes b");
// Adiciona a curtida
imagem.addEventListener("click", function () {
  // Atribui o endereço da imagem a uma variavel.
  const clickedImg = "red-heart.png";
  // Retorna um boolean através de uma variável.
  const clicado = this.src.indexOf(clickedImg) != -1;
  // Pega a primeira posição do array e converte em um número.
  const likesCount = parseInt(qtdLikes.innerText.split(" ")[0]);

  if (clicado) {
    // Mantem o mesmo src
    this.src = "img/icons/heart.svg"; // sem cor
    qtdLikes.innerText = likesCount - 1 + " likes";
  } else {
    // altera o src
    this.src = "img/" + clickedImg; // com cor
    qtdLikes.innerText = likesCount + 1 + " likes";
  }
});

// Seleciona data
let data = document.querySelector(".data");
// Atribui ao texto HTML o dia do post.
data.innerText = `Postado no dia: ${dataAtualFormatada()}`;
// Função que pega a data atual
function dataAtualFormatada() {
  let data = new Date(),
    dia = data.getDate(),
    mes = data.getMonth() + 1, //+1 pois no getMonth Janeiro começa com zero.
    ano = data.getFullYear();
  return dia + "/" + mes + "/" + ano;
}

// Seleciona o botão `Ver mais`
const verMais = document.getElementById("more");

const addPost = function () {
  // Seleciona a div card e faz um clone de todo o HTML dentro da div, incluindo ela mesma.
  const newCard = document.querySelector(".card").cloneNode(true);
  const container = document.querySelector("main.container");
  // Insere no container a div.newCard antes do botão verMais.
  container.insertBefore(newCard, verMais);
};

verMais.onclick = addPost;
