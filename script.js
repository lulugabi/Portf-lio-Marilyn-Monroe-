document.addEventListener('DOMContentLoaded', function(){

const botaoDeAcessibilidade = document.getElementById('botao-acessibilbotao-acessibilidade

const opcoesDeAcessibilidade = document.getElementById('opcoes-acessiopcoes-acessibilidade

botaoDeAcessibilidade.addEventListener('click', function (){

cessibilidade.classList.toggle('rotacao-botao');

opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-exp botaoDeAcessibilidade.setAttribute('aria-expanded', ! botaoSelecionado

})

const aumentaFonteBotao = document.getElementById('aumentar-fonte');

const diminui FonteBotao = document.getElementById('diminuir-fonte');

const alternaContraste = document.getElementById('alterna-contraste')

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){

tamanhoAtualFonte += 0.1;

document.body.style.fontSize = `${tamanhoAtualFonte} rem`4
})

diminuiFonteBotao.addEventListener('click', function(){

tamanhoAtualFonte = 0.1;

document.body.style.fontSize = `${tamanhoAtualFonte} rem`

})

alternaContraste.addEventListener('click', function(){ document.body.classList.toggle('alto-contraste') })

})

ScrollReveal().reveal('#inicio', { delay: 500 });

ScrollReveal().reveal('#tropicalia', { delay: 500 });

ScrollReveal().reveal('#galeria', { delay: 500 });

ScrollReveal().reveal('#contato', { delay: 500 });
