

// Função Sem Parametros

function soma_1(){

	return 2 + 4;
}

console.log(soma_1());


// Função Com Parametros

function soma_2(num1, num2){

	return num1 + num2;
}

console.log(soma_2(5,8));
console.log(soma_2()); // NaN
console.log(soma_2(5,10));



/*

>>> PARAMETRO X ARGUMENTOS
>>> ORDEM DE PARAMETROS

*/

// PARAMETROS
function nomeIdade(nome, idade){

	return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// ARGUMENTOS (TEM ORDEM)
console.log(nomeIdade(35, "Eliane"))
console.log(nomeIdade("Eliane", 35))


function mult(n1 = 1, n2 = 1){ // Para corrigir o erro NaN tem que igualar os dois paramatros a 1
 
	return n1 * n2;

}

console.log(mult(soma_2(2,8),soma_2(6,8)))
console.log(mult(soma_2(8,40))) // se a função só receber 1 argumento vai dar NaN -> A função mult() só tem um argumento

// Os nomes dos PARAMETROS podem ser os mesmos de outras funcões, pois os valores dos parametros das funções só são validos dentro das suas respectivas funções

/*
BOAS PRÁTICAS!!!
OBS: AS FUNÇÕES PODE RECEBER QUALQUER QUANTIDADE DE PARAMETROS 
POREM É BOA PRÁTICA PASSAR POUCOS PARAMETROS
*/