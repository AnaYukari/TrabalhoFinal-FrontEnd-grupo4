const divMestre = document.getElementById("divMestre");
const botaoCartao = document.getElementById("btnCartao");
const botaoPix = document.getElementById("btnPix");
const botaoBoleto = document.getElementById("btnBoleto");
//  <form action="" id="formCartao" class="formulario_cartao" style="display: none;">
botaoCartao.onclick = () => {
    let novosInputs = document.createElement("div");

    novosInputs.className = "formulario_cartao";
    novosInputs.setAttribute("id", "formCartao");
    novosInputs.setAttribute("name", "formularioCartao")
    
    novosInputs.innerHTML = `<div class="conteudo_formulario">
            <input id = "numeroCartao" type = "text" placeholder = "Número do Cartão" name ="numeroCartao" />
            </div >
            <div class="conteudo_formulario">
            <input id="nomeCartao" type="text" placeholder="Nome no Cartão" name="nomeCartao" />
            </div>
            <div class="conteudo_formulario">
            <input id="dataValidade" type="text" placeholder="Data de Validade" name="dataValidade" />
            </div>
            <div class="conteudo_formulario">
            <input id="codigoSeguranca" type="text" placeholder="CVV" name="codigoSeguranca" />
            </div>`;
    
            divMestre.replaceChildren(novosInputs);
}

botaoPix.onclick = () => {
    let qrcode = document.createElement("img");

    qrcode.setAttribute("src", "../imagens/qrcode-pix.png");
    qrcode.setAttribute("id", "imageQrCode");

    let inputInvisivel = document.createElement("input");

    inputInvisivel.setAttribute("type", "hidden");
    inputInvisivel.setAttribute("name", "codigoPix");

    inputInvisivel.value = "00020126440014BR.GOV.BCB.PIX0122luiz.miele@hotmail.com52040000530398654040.035802BR5913Serra Turismo6012Dedo de Deus62070503***6304346D";

    divMestre.replaceChildren(qrcode, inputInvisivel);
}

botaoBoleto.onclick = () => {
    let inputInvisivel = document.createElement("input");

    inputInvisivel.setAttribute("type", "hidden");
    inputInvisivel.setAttribute("name", "codigoBoleto");

    inputInvisivel.value = "1111111111122222222223333333334444444444";
    
    divMestre.replaceChildren(inputInvisivel);
}

