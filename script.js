document.addEventListener 'DOMContentLoaded', function(){
const botaoDeAcessibilidade = document.getElementById('botao-acessibilbotao-acessibilidadebotao-acessibilbotao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessiopcoes-acessibilidade')

botaoDeAcessibilidade.addEventListener('click', function (){
cessibilidade.classList.toggle('rotacao-botao');
opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

})

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function(e) {
            e.preventDefault();
                    const section = document.querySelector(this.getAttribute('href'));
                            section.scrollIntoView({ behavior: 'smooth' });
                                });
                                });

                                
                                // Alerta de envio de formulário
                                const form = document.querySelector('form');
                                form.addEventListener('submit', function(e) {
                                    e.preventDefault();
                                        alert('Mensagem enviada com sucesso!');
                                            form.reset();
                                            });



const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

const alternaContraste = document.getElementById('alterna-contraste')

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
tamanhoAtualFonte += 0.0.1;
document.body.style.fontSize = `${tamanhoAtualFonte} rem`
})

diminuiFonteBotao.addEventListener('click', function(){

tamanhoAtualFonte = 0.1;

document.body.style.fontSize = `${tamanhoAtualFonte} rem`


alternaContraste.addEventListener('click', function(){ document.body.classList.toggle('alto-contraste') })

})

ScrollReveal().reveal('#inicio', { delay: 500 });

ScrollReveal().reveal('#sobre', { delay: 500 });

ScrollReveal().reveal('#tropicalia', { delay: 500 });

ScrollReveal().reveal('#galeria', { delay: 500 });

ScrollReveal().reveal('#contato', { delay: 500 });
