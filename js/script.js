let s1 = 0;
let s2 = 0;
let s3 = 0;

function selecionarItem(elemento){
    let selecionado = document.querySelector('.selecionado');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
        s1 = 0;
    }else{
        elemento.classList.add('selecionado');
        s1 = 1;
    }
}

function selecionarItem2(elemento){
    let selecionado = document.querySelector('.selecionado2');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado2');
        s2 = 0;
    }else{
        elemento.classList.add('selecionado2');
        s2 =1;
    }
}

function selecionarItem3(elemento){
    let selecionado = document.querySelector('.selecionado3');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado3');
        s3 = 0;
    }else{
        elemento.classList.add('selecionado3');
        s3 = 1;
    }
}


function selecionarBotao(botao){
    let botaoEl = document.querySelector(botao);
    let botaoSelecionado = document.querySelector('.selecionadoBotao');
    if(s1 === 1 && s2 === 1 && s3 === 1){        
        botaoEl.classList.add('selecionadoBotao');
        botaoEl.innerHTML = 'Fechar Pedido';
        botaoEl.disabled = false;
    }else{
        botaoSelecionado.classList.remove('selecionadoBotao');
        botaoEl.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        butaoEl.disabled = true
    }
}

function chamarFecharPedido(){
    let nome = prompt('Qual seu nome ?');
    let rua = prompt('Qual sua rua e endereço ?');

    
}
