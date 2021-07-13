function soma(n1, n2){
  return n1 + n2;
}

console.log(soma(2, 3))

function setReplace(frase, nome, novoNome){
  return frase.replace(nome, novoNome)
}

console.log(setReplace("vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
  var validar;
  if(idade >= 18){
    validar = true;
  }else {
    validar = false;
  }
  return validar
}

var idade = prompt("Qual sua idade:")
console.log(validaIdade(idade));