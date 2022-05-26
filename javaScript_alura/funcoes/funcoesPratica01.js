

function cumprimetar(){
	return "Olá gente!!!"
}

console.log(cumprimetar());


function cumprimetarPessoa(pessoa){

	console.log(`Olá, ${pessoa}!!`)
	console.log(`${cumprimetar()} Meu nome é ${pessoa}.`)
}

cumprimetarPessoa('Eliane')

function opMat(num1, num2, num3){
	return num1 + num2 + num3;
}

console.log(opMat(20, 80, 45))