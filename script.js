const botao = document.querySelector('input#botao');

botao.addEventListener('mouseover', mouseOver);

function mouseOver(event) {

    const botaoRect = botao.getBoundingClientRect();
    const centroY = botaoRect.height / 2;
    const centroX = botaoRect.width / 2;

    let posicaoMouseX = event.clientX - botaoRect.left;
    let posicaoMouseY = event.clientY - botaoRect.top;
    let movimentoX = posicaoMouseX - centroX;
    let movimentoY = posicaoMouseY - centroY;

    const novaPosicaoX = botao.offsetLeft - movimentoX;
    const novaPosicaoY = botao.offsetTop - movimentoY;

    const limiteEsquerda = 0;
    const limiteSuperior = 0;
    const limiteDireita = window.innerWidth - botaoRect.width;
    const limiteInferior = window.innerHeight - botaoRect.height;

    if (novaPosicaoX > limiteDireita) {
        botao.style.left = limiteDireita + 'px';

    }else if(novaPosicaoX < limiteEsquerda){
        botao.style.left = limiteEsquerda + 'px';

    }else{
        botao.style.left = novaPosicaoX + 'px';
    }

    if (novaPosicaoY > limiteInferior){
        botao.style.top = limiteInferior + 'px';

    }else if(novaPosicaoY < limiteSuperior){
        botao.style.top = limiteSuperior + 'px';

    }else{
        botao.style.top = novaPosicaoY + 'px';
    }
}