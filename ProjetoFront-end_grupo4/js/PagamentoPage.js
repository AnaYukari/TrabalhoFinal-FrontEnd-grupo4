function toggleContent(formaPagamento) {
  let forms = {
    "cartao": document.getElementsByClassName("formCartao"),
    "pix": document.getElementById("pixQRCode")
  };

  Object.keys(forms).forEach(key => {
    if (key === formaPagamento) {
      forms[key].style.display = "block";
    } else {
      forms[key].style.display = "none";
    }
  });
}

// Modificando a função toggleFormCartao para incluir o toggle do btnPix
function toggleFormCartao() {
  let formCartao = document.getElementById("formCartao");
  let btnPix = document.getElementById("btnPix");

  formCartao.style.display =
    formCartao.style.display === "none" ? "block" : "none";
  btnPix.style.display =
    formCartao.style.display === "none" ? "block" : "none";
}

// Modificando a função togglePixQRCode para incluir o toggle do btnCartao
function togglePixQRCode() {
  let pixQRCode = document.getElementById('pixQRCode');
  let btnCartao = document.getElementById("btnCartao");

  pixQRCode.style.display = pixQRCode.style.display === 'none' ? 'block' : 'none';
  btnCartao.style.display = pixQRCode.style.display === 'none' ? 'block' : 'none';
}

// Adiciona um evento de clique ao botão "Cartão"
let btnCartao = document.querySelector('.btnformadepagamento[data-form="cartao"]');
btnCartao.addEventListener("click", function (event) {
  event.preventDefault(); // Para evitar a submissão do formulário
  toggleFormCartao();
});

// Adiciona um evento de clique ao botão do Pix
let btnPix = document.querySelector('.btnformadepagamento[data-form="pix"]');
btnPix.addEventListener('click', function(event) {
  event.preventDefault(); // Para evitar a submissão do formulário
  togglePixQRCode();
});

// Adiciona um evento de clique aos botões de forma de pagamento
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
  window.open('/ProjetoFront-end_grupo4/imagens/pdfBoleto.jpg', '_blank');
});
