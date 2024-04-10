let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;     
}

function exibirTextoInicial(){
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto.');
    exibirTextoNaTela ('p', 'Insira um número de 1 a 10.');
}
exibirTextoInicial();

function verificarCuhte(){
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você acertou o Número Secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('h1','jogo do numero secreto');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disable');
        alterarImagem ('img', './img/vencedor.jpg')
    }else{
        if (chute > numeroAleatorio){
            exibirTextoNaTela ('p', 'O número secreto é menor.');
        }else{
            exibirTextoNaTela ('p', 'O número secreto é maior.');
        }
    }
    tentativa++;
    limpaCampo ();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*10+1);

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disable',true);
}

function alterarImagem (objeto, caminhoImagem){
    document.getElementById(objeto). src = caminhoImagem
}