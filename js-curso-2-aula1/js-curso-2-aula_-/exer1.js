// EXER1

let altura = parseFloat(prompt("Informe sua altura:"));
let peso = parseFloat(prompt("Informe o seu peso:"));

function calculoIMC(parPeso, parAltura){
    return parPeso/(parAltura*parAltura);
}

IMC = calculoIMC (peso, altura);
alert (`O valor de IMC é ${IMC}.`);

// EXER2

let numero = parseFloat(prompt("informe um numero"));
let fatorial = calcularFatorial(numero);
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

alert(`O fatorial de ${numero} é ${fatorial}`);
 
// EXER3

let valor = parseFloat(prompt("Digite o valor para transformamos em dólar:"));
let resultado;
function calculoDolar(valor) {
    return (valor*4.80);
}
resultado = calculoDolar(valor, resultado);
alert(`O valor em dólar ficou ${resultado}`);

// EXER4

let alturaDaSala = parseFloat(prompt("informe a altura da sala"));
let larguraDaSala = parseFloat(prompt("informe a largura da sala"));
function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;

    let perimetro = 2 * (altura + largura);

    alert("Área da sala: " + area + " metros quadrados");
    alert("Perímetro da sala: " + perimetro + " metros");
}

calcularAreaEPerimetro(alturaDaSala, larguraDaSala);

// EXER5

let  = parseInt(prompt("digite um numero"))
let contador = 1


while (contador < 11){
    let resultado = contaNumero(numero)
    function contaNumero(numero){
        return numero*contador
    }
    console.log (`${numero}X${contador}=${resultado}`);
    contador++
}

// EXER6

function calcularAreaEPerimetro() {

    let raio = parseFloat(prompt("Digite o raio da sala circular:"));

    if (raio <= 0) {
        console.log("Por favor, forneça um raio válido.");
        return;
    }

    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;

    alert(` Para um círculo com raio ${raio}:`);
    alert(` A Área é: ${area}`);
    alert(` O Perímetro é: ${perimetro.toFixed(2)}`);
}

calcularAreaEPerimetro();