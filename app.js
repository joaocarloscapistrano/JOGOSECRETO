//let titulo = document.querySelector(`h1`);
//titulo.innerHTML=`Jogo dos número secreto`;
//let paragrafo = document.querySelector(`p`);
//paragrafo.innerHTML = `Escolha um número de 01 a 10`;
//exibirTextoNaTela(`h1`, `Jogo do número secreto`);
//exibirTextoNaTela(`p`,`Escolha um número entre 1 a 10` );

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    if (chute == numeroSecreto){
        exibirTextoNaTela(`h1`, `Acertou!`);
        let palavraTentativa = tentativas >1 ? `tentativas` : `tentativa`
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela(`p`, mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela(`p`,`O número secreto é menor que ${chute}`);
            exibirTextoNaTela(`h1`, ` `);
        } else {
            exibirTextoNaTela(`p`,`O número secreto é maior que ${chute}`);
            exibirTextoNaTela(`h1`, ` `);
        }
        tentativas++;
        limparCampo();
    }

    console.log(chute == numeroSecreto)
    console.log(`o botão foi clicado`);
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
        if (quantidadeDeElementosNaLista == numeroLimite) {
            listaDeNumerosSorteados = [];
        }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela(`h1`, `Jogo do número secreto`);
    exibirTextoNaTela(`p`,`Escolha um número entre 1 a 10` );
}

function exibirTextoNaTela(tag, texto){
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`,{rate:1.0});
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   // responsiveVoice.speak(texto, `Brazilian Portuguese Female`,{rate:1.2});
}

function limparCampo(){
    chute = document.querySelector(`input`);
    chute.value = ` `
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
} 
