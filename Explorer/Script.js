// variaveis
//dados de entrada?
//dados de saída?

//          "Procure o seletor" id #resposta
const elementoReposta = document.querySelector('#resposta')   //buscando o seletor ID resposta
const inputPergunta = document.querySelector('#inputPergunta')  //buscando o seletor ID inputPergunta
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  //array com todas as possibilidade de resposta que o programa pode dar
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

//clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {          //uma condição caso não há pergunta
    alert('Digite sua pergunta')
    return
  }
  buttonPerguntar.setAttribute("disabled", true)    //Desabilitando o botão para que eu não tenha mais de uma resposta. qual atributo nós estamos colocando? e qual o valor? true ou false

  const pergunta = '<div>' + inputPergunta.value + '</div>' //pegando a pergunta do usuario para imprimir

  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  /*estou dando nome para uma constante.
    math floor me retorna o valor piso entao 0.95 = 0
    math.random me retorna um valor aleatoria de 0 a 0.99
    entao math.random() * 19 é como se fosse 0.99 *19 = 18 
    sabendo que meu array tem 18 vetores entao ele vai ficar gerando um numero aleatorio entre 0 e 18 */

  elementoReposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoReposta.style.opacity = 1;    /* Estou dizendo que antes dele ficar com a opacidade 0 ele fique com a opacidade 1 para que eu possa fazer outra pergunta */

  //sumir a resposta depois de 3 segundos
  // Ele espera dois argumentos (uma função, daqui quanto tempo vai ser executada essa função? 3000milesegundo = 3seg)
  setTimeout(function () {
    elementoReposta.style.opacity = 0
    buttonPerguntar.removeAttribute("disabled",true)  // removendo o atributo botao desabilitado para que eu possa fazer outra pergunta
  }, 3000)
}
