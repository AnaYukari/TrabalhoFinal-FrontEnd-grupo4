function toggleFormCartao() {
  let formCartao = document.getElementById("formCartao");
  formCartao.style.display =
    formCartao.style.display === "none" ? "block" : "none";
}

// Adiciona um evento de clique ao botão "Cartão"
let btnCartao = document.querySelector(
  '.btnformadepagamento[data-form="cartao"]'
);
btnCartao.addEventListener("click", function (event) {
  event.preventDefault(); // Para evitar a submissão do formulário
  toggleFormCartao();
});


