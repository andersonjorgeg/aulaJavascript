function clicou() {
  /* console.log('obrigado por clicar') */
  document.getElementById('agradecimento').innerHTML = "<b>Obrigador</b> por clicar"

  //A propriedade innerHTML define ou retorna o conteúdo HTML (HTML interno) de um elemento.
}

function redirecionar(){
  /* O método open () abre uma nova janela do navegador ou uma nova guia, dependendo das configurações do seu navegador e dos valores dos parâmetros. */
  window.open('https://www.w3schools.com/jsref/met_win_open.asp');

  /* O objeto window.location pode ser usado para obter o endereço da página atual (URL) e para redirecionar o navegador para uma nova página. */
  window.location.href = 'https://github.com/';
}

function trocar(elemento){
  //document.getElementById('mouseover').innerHTML = "Obrigado por passar o mouse"
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
  //document.getElementById('mouseover').innerHTML = "Passe o mouse aqui"
  elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  console.log('carregou')

}

function funcaoChange(elemento){
  console.log(elemento.value)
}