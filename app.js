let listaDeIdadeSorteada = [];
let idadeLimite = 10;
let idadePeixonalta = gerarIdadeAleatoria();
let tentativas = 1;

function menagemNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);

    //viveVoice
    //if ('speechSynthesis' in window) {

        //let utterance = new SpeechSynthesisUtterance(texto);
       // utterance.lang = 'pt-BR';
       // utterance.rate = 1.2;
       // window.speechSynthesis.speak(utterance);

    //} else {
      //  console.log("Web Speech API não suportada neste navegador.");
    //}
}

function exibirMensagemInicial() {
    menagemNaTela("h1", "Ativinhe a idade do peixonalta");
    menagemNaTela("p", "Escolha um numero de 1 a 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(idadePeixonalta);

    if (chute == idadePeixonalta) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa, tem bola de cristal?";
        let menagemTentativa = `Você descobriu a idade do peixonalta com ${tentativas} ${palavraTentativa}`;
        menagemNaTela("h1", "Parabéns");
        menagemNaTela("p", `${menagemTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (chute > idadePeixonalta) {
            menagemNaTela("h1", "ERROU");
            menagemNaTela("p", `a idade do peixonalta é menor que ${chute}`);
        } else {
            menagemNaTela("h1", "ERROU");
            menagemNaTela("p", `a idade do peixonalta é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}
function gerarIdadeAleatoria() {
    let idadeEscolhida = parseInt(Math.random() * idadeLimite + 1);
    let quantidadeDeElementosNaLista = listaDeIdadeSorteada.length;

    if (quantidadeDeElementosNaLista == idadeLimite) {
        listaDeIdadeSorteada = [];
    }

    if (listaDeIdadeSorteada.includes(idadeEscolhida)) {
        return gerarIdadeAleatoria();
    } else {
        listaDeIdadeSorteada.push(idadeEscolhida);
        console.log(listaDeIdadeSorteada);
        return idadeEscolhida;
    }
}
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo() {
    idadePeixonalta = gerarIdadeAleatoria();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}