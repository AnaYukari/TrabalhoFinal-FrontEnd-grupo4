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

function togglePixQRCode() {
  let pixQRCode = document.getElementById('pixQRCode');
  pixQRCode.style.display = pixQRCode.style.display === 'none' ? 'block' : 'none';
}

// Adiciona um evento de clique ao botão do Pix
let btnPix = document.querySelector('.btnformadepagamento[data-form="pix"]');
btnPix.addEventListener('click', function(event) {
  event.preventDefault(); // Para evitar a submissão do formulário
  togglePixQRCode();
});

let btnsPagamento = document.querySelectorAll('.btnformadepagamento');
btnsPagamento.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Para evitar a submissão do formulário
        toggleContent(btn.getAttribute('data-form'));
    });
});

// Adiciona um evento de clique ao botão "Boleto" para redirecionar para outra página
let btnBoleto = document.getElementById('btnBoleto');
btnBoleto.addEventListener('click', function(event) {
    event.preventDefault(); // Para evitar a submissão do formulário
    window.location.href = '/ProjetoFront-end_grupo4/imagens/pdfBoleto.jpg';
});