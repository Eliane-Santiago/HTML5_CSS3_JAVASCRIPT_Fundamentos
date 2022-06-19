
// Criando o Array
let notas = [5, 9.9, 10, 6.5];

let notaMaior = 0;


// Acesso os Elementos do Array
for(let i=0; i<notas.length; i++){

	//mostrando os elementos na tela
	console.log(notas[i])

	//Estrutura Condicional
	if(notas[i] > notaMaior){

		notaMaior = notas[i]

	}
}

console.log("A maior nota é ",notaMaior)

// nomeArray.length -> puxar o atamanho do array