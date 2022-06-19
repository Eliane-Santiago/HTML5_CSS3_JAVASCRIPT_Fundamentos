<<<<<<< HEAD

// FUNÇÃO DECLARATIVA

function apresentar(nome){
	return `Meu nome é ${nome}`;
}

//console.log(apresentar("Eliane"));



// FUNÇÃO ARROW - 1 LINHA

const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow("Eliane"))

const soma = (num1, num2) => num1 + num2; 
console.log(soma(8,55))


// FUNÇÃO ARROW - COM MAIS DE UMA LINHA

const somaNumPequenos = (num1, num2) => {

	// OU (||)	
	if(num1 || num2 > 10){

		return "Somente números de 1 a 9"

	} else {

		return num1 + num2;

	}
	
}

console.log(somaNumPequenos(-8,-55))



// FUNÇÃO ARROW -> NÃO É NOMEADA OU SEJA É UMA FUNÇÃO ANOMINA

// HOISTING -> SE COMPORTA DA MESMA FORMA QUE A FUNÇÃO EXPRESIVA



/*

>>>  FUNÇÃO ARROW ESTRUTURA - 1 LINHA

CONST NOME_VARIAVEL_FUNÇÃO = PARAMETRO_FUNÇÃO => //BLOCO DE CÓDIGO;


>>>  FUNÇÃO ARROW ESTRUTURA - MAIS DE UMA LINHA

CONST NOME_VARIAVEL_FUNÇÃO = PARAMETRO_FUNÇÃO => {

//BLOCO DE CÓDIGO;

RETURN; 

}

*/

=======

// FUNÇÃO DECLARATIVA

function apresentar(nome){
	return `Meu nome é ${nome}`;
}

//console.log(apresentar("Eliane"));



// FUNÇÃO ARROW - 1 LINHA

const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow("Eliane"))

const soma = (num1, num2) => num1 + num2; 
console.log(soma(8,55))


// FUNÇÃO ARROW - COM MAIS DE UMA LINHA

const somaNumPequenos = (num1, num2) => {

	// OU (||)	
	if(num1 || num2 > 10){

		return "Somente números de 1 a 9"

	} else {

		return num1 + num2;

	}
	
}

console.log(somaNumPequenos(-8,-55))



// FUNÇÃO ARROW -> NÃO É NOMEADA OU SEJA É UMA FUNÇÃO ANOMINA

// HOISTING -> SE COMPORTA DA MESMA FORMA QUE A FUNÇÃO EXPRESIVA



/*

>>>  FUNÇÃO ARROW ESTRUTURA - 1 LINHA

CONST NOME_VARIAVEL_FUNÇÃO = PARAMETRO_FUNÇÃO => //BLOCO DE CÓDIGO;


>>>  FUNÇÃO ARROW ESTRUTURA - MAIS DE UMA LINHA

CONST NOME_VARIAVEL_FUNÇÃO = PARAMETRO_FUNÇÃO => {

//BLOCO DE CÓDIGO;

RETURN; 

}

*/

>>>>>>> 0ff5f46256d56b5c9e17582ef79acb03565c69ac
