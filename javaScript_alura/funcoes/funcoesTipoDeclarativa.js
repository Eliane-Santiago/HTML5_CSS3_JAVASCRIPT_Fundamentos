
/* 
>>> ESTRUTURA DA FUNÇÃO DECLARATIVA (DECLARAÇÃO DE FUNÇÃO)
		
		//Função sem retorno
		function nomeFuncao (parametroFuncao){
			console.log(parametroFuncao);
		}	

		nomeFuncao(parametroFuncao);

*/


// 1° Momento da Função - DECLARAÇÃO

function imprimeTexto (texto){
	console.log(texto)
}


// 2° Momento da Função - EXECUÇÃO

imprimeTexto("Olá mundo!!!")
imprimeTexto("DEUS É FIEL")



/* Existe 3 formas de escrever as funções...
	- Declação de função
	- 
	- 
*/ 


function soma (){

	const result = 2 + 10;

	return result // esse comando retorna o resultado da função

	// return 2 + 10 (poderia ser só esse código)
}


soma() // não retorna nada
// console.log(soma()); 

imprimeTexto(soma()); 