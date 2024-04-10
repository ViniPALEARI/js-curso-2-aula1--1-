// exer3
function verificarConsole (){
    console.log ("Olá, Mundo!");
}
verificarConsole();
// exer4
let nome = prompt ("digite um nome");
function verificarNome (nome) {
     
    alert (`Olá ${nome}`);
}
verificarNome(nome);
// exer5
let numero = prompt("insira um numero:");
let resultado = numero*2
function mensagem(numero){
    console.log(`o dobro desse numero é ${resultado}`);
}
mensagem(numero);
// exer6
function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/3;
}

let numero1 = parseInt(prompt("Insira um número:"));
let numero2 = parseInt(prompt("Insira outro número:"));
let numero3 = parseInt(prompt("Insira mais um número:"));

 resultado = calcularMedia(numero1, numero2, numero3);

console.log("A média dos números inseridos é: " + resultado);

