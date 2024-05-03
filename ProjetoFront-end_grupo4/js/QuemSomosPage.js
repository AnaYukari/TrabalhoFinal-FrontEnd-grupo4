
// Array de objetos com as informações das pessoas

var SvgLinkedIn = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>';

var SvgGitHub = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>';


var informacoesPessoas = [
    { nome: 'Ana Yukari', nomeCompleto: 'Ana Yukari Futigami Pereira', texto: 'Residente do curso TIC/Software - Serratec', LinkedIn: '<a  href="https://www.linkedin.com/in/yuyuka/">Perfil do LinkedIn</a>', Github: '<a href="https://github.com/AnaYukari">Perfil no GitHub</a>' },

    { nome: 'Enzo Laffront', nomeCompleto: 'Enzo Laffront Rocha Miranda', texto: 'Residente do curso TIC/Software - Serratec', LinkedIn: '<a href="https://www.linkedin.com/in/enzo-laffront-b91581220/">Perfil do LinkedIn</a>', Github: '<a href="https://github.com/EnzoLaffront">Perfil no GitHub</a>' },

    { nome: 'Kayque Lucas', nomeCompleto: 'Kayque Lucas Silva Neves ', texto: 'Residente do curso TIC/Software - Serratec', LinkedIn: '<a href="https://github.com/KayqueLucas">Perfil do LinkedIn</a>', Github: '<a href="https://github.com/KayqueLucas">Perfil no GitHub</a>' },

    { nome: 'Mateus Zebendo', nomeCompleto: 'Mateus Vinicius Zebendo Pinto', texto: 'Residente do curso TIC/Software - Serratec', LinkedIn: '<a href="https://www.linkedin.com/in/mateus-zebendo-0508032a4/">Perfil do LinkedIn</a>', Github: '<a href="https://github.com/mateuszebendo">Perfil no GitHub</a>' },

    { nome: 'Miguel Caldas', nomeCompleto: 'Miguel Caldas Coutinho', texto: 'Residente do curso TIC/Software - Serratec', LinkedIn: '<a href="https://www.linkedin.com/in/miguel-caldas-0359802a5/">Perfil do LinkedIn</a>', Github: '<a href="https://github.com/Biguelisto">Perfil no GitHub</a>' }
];


// Função para mostrar as informações da pessoa clicada
function mostrarInformacoes(nome) {
    console.log("Nome da pessoa clicada:", nome); // Verificar se o nome da pessoa está sendo passado corretamente

    // Busca as informações da pessoa no array com base no nome
    var pessoa = informacoesPessoas.find(function(item) {
        return item.nome === nome;
    });

    console.log("Informações da pessoa:", pessoa); // Verificar se as informações da pessoa foram encontradas

    // Seleciona o elemento onde as informações serão exibidas
    var informacoes = document.getElementById('informacoes');

    // Verifica se a pessoa foi encontrada no array
    if (pessoa) {
        // Atualiza o conteúdo do elemento com as informações da pessoa correspondente
        informacoes.innerHTML = "<h3>" + pessoa.nomeCompleto + "</h3><p>" + pessoa.texto + "</p><h4>" + SvgLinkedIn + " " + pessoa.LinkedIn + "<br>" + SvgGitHub + " " + pessoa.Github + "</h4";
    } else {
        // Caso as informações não sejam encontradas
        informacoes.innerHTML = "<p>Informações não encontradas para " + nome + ".</p>";
    }
}

