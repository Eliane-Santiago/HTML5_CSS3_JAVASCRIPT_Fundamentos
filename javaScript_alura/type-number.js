/*
<-- TIPOS DE DADOS (PRIMITIVO E COMPLEXOS) -->

>>> PRIMITIVOS 

NÚMEROS (TIPO NUMBER)
CARACTERE (STRING)
BOOLEANOS

>>> COMPLEXOS 

OBJETOS

*/


console.log("*********************************************************");
console.log("               TIPO NUMERICO");
console.log("*********************************************************");


// Declaranto variáveis - Tipo Número
const meuNumero = 3;
const num1 = 1; 
const num2 = 2;
const opMat = num1 + num2;

const numPontoFlutuante = 3.3
const numPontoFlutuanteSemZero = .5 
const opMatFlutuante = num1 / numPontoFlutuante;

console.log(opMat);
console.log(opMatFlutuante);


// NaN -> Not A Number (Não é um Número)

var a = 10
var b = 0
console.log(a/b); //Infinity


// DIVISÃO ZERO POR ZERO -> NaN

var a = 0
var b = 0
console.log(a/b); //NaN



