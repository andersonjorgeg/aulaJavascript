//? array
let lista = ["maça", "pêra", "laranja"];
lista.push('banana');//adiciona na ultima posição
lista.pop();//remove o ultimo elemento do array
console.log(lista.length)//saber o tamanho do array
console.log(lista.reverse())//reverte a forma de visualizar o array
console.log(lista.toString())//transforma o array em string
console.log(lista[0]);//imprime o primeiro elemento
/* console.log(lista.toString()[0]) *///imprime a primeira letra
console.log(lista.join(' '))//muda os espaços do array
console.log(lista.join('-'))//muda os espaços do array

//? objeto
let fruta = {nome: 'maçã', cor: 'vermelha'};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

//? array de objetos
let frutas = [
  {
    nome: 'maçã', cor: 'vermelha'
  },
  {
    nome: 'uva', cor: 'roxa'
  }
];

console.log(frutas);
console.log(frutas[0])
console.log(frutas[0].nome)
console.log(frutas[1])
console.log(frutas[1].nome)