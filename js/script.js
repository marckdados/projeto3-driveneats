let s1 = 0;
let s2 = 0;
let s3 = 0;
let valorPedido1;
let valorNumber1;
let valorPedido2;
let valorNumber2;
let valorPedido3;
let valorNumber3;

let pedido1;
let pedido2;
let pedido3;

let totalFormatado;


function selecionarCheck(elemento){
    let checkEl = elemento.querySelector('.check');
    let check = checkEl.querySelector('.escondido1');
    if(check !== null){
        check.classList.toggle('escondido1')
    }else{
        checkEl.classList.toggle('escondido1')
    }
}
function selecionarCheck2(elemento){
    let checkEl = elemento.querySelector('.check2');
    let check = checkEl.querySelector('.escondido2');
    if(check !== null){
        check.classList.toggle('escondido2')
    }else{
        checkEl.classList.toggle('escondido2')
    }
}
function selecionarCheck3(elemento){
    let checkEl = elemento.querySelector('.check3');
    let check = checkEl.querySelector('.escondido3');
    if(check !== null){
        check.classList.toggle('escondido3')
    }else{
        checkEl.classList.toggle('escondido3')
    }
}

function selecionarItem(elemento){
    
    let selecionado = document.querySelector('.selecionado');
    console.log(selecionado);
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
    }else{
        botaoSelecionado.classList.remove('selecionadoBotao');
        botaoEl.innerHTML = 'Selecione os 3 itens para fechar o pedido';

    }
}

function chamarVerificador(){
    if(s1 === 1 && s2 === 1 && s3 === 1){
        chamarFecharPedido();
    }
}

function getPrecoUm(elemento){
   let preco = elemento.querySelector('.preco1');
   let valorNaoFormatado = preco.innerHTML;
   let valorArry = (valorNaoFormatado.split(' '));
   let valor1 = valorArry[1];
   let valorStr = valor1.replace(',','.');
    valorNumber1 = Number(valorStr);
    //coloca preco na tabela
   valorPedido1 = document.querySelector('.preco-pedido-um');
   valorPedido1.innerHTML = valor1;


    // coloca nome do pedido
    let nome = elemento.querySelector('.nome1')
    
    let nomePedido1 = document.querySelector('.nome-pedido-um');
    pedido1 = nome.innerHTML;
    nomePedido1.innerHTML = pedido1;
}

function getPrecoDois(elemento){
    let preco = elemento.querySelector('.preco2');
    let valorNaoFormatado = preco.innerHTML;
    let valorArry = (valorNaoFormatado.split(' '));
    let valor1 = valorArry[1];
    let valorStr = valor1.replace(',','.');
     valorNumber2 = Number(valorStr);
     //coloca preco na tabela
    valorPedido2 = document.querySelector('.preco-pedido-dois');
    valorPedido2.innerHTML = valor1;

     // coloca nome do pedido
     let nome = elemento.querySelector('.nome2')
     
     let nomePedido2 = document.querySelector('.nome-pedido-dois');
     pedido2 = nome.innerHTML;
     nomePedido2.innerHTML = pedido2
 }

 function getPrecoTres(elemento){
    let preco = elemento.querySelector('.preco3');
    let valorNaoFormatado = preco.innerHTML;
    let valorArry = (valorNaoFormatado.split(' '));
    let valor1 = valorArry[1];
    let valorStr = valor1.replace(',','.');
     valorNumber3 = Number(valorStr);
     //coloca preco na tabela
    valorPedido3 = document.querySelector('.preco-pedido-tres');
    valorPedido3.innerHTML = valor1;
 
     // coloca nome do pedido
     let nome = elemento.querySelector('.nome3')
     
     let nomePedido3 = document.querySelector('.nome-pedido-tres');
     pedido3 = nome.innerHTML;
     nomePedido3.innerHTML = pedido3;
 }

 function setTotal(){
     let total = document.querySelector('.total');
     
     let totalNum = (valorNumber1+valorNumber2+valorNumber3).toFixed(2)
     let totalStr = totalNum+'';
    totalFormatado = totalStr.replace('.',',');
     total.innerHTML = `R$ ${totalFormatado}`;
 }

function chamarFecharPedido(){
    const escondido = document.querySelector('.escondido');
    const telaEscondida = document.querySelector('.fundo-escondido');
   if(escondido !== null){
       escondido.classList.toggle('escondido');
       telaEscondida.classList.toggle('fundo-escondido')
   }

}

function chamarWhatsapp(elemento){
    let nome = prompt('Qual seu nome ?');
    let rua = prompt('Qual sua rua ?');
    let minhaString = `Olá, gostaria de fazer o pedido:\n- Prato: ${pedido1}\n- Bebida: ${pedido2}\n- Sobremesa: ${pedido3}\nTotal: R$ ${totalFormatado}\n\nNome: ${nome}\nEndereço: ${rua}`
    let uri = encodeURIComponent(minhaString);
    elemento.href = 'https://wa.me/5583993395820?text='+uri;
}
