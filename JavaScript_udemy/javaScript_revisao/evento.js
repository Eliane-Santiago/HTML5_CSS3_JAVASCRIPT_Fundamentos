// https://www.w3schools.com/js/ -> documentação JavaScript


function mensagem(nome){
	alert("Parabens!!! Você conseguiu.. " +nome);
}

function pagina(){
	alert("Carregamento da pagina realizado.");
}

function mudaCor(cor){
	var elemento = document.getElementById("mensagem"); // acessando o id

	elemento.style.color = cor;
} 