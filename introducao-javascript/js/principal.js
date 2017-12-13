var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Seleciona o paciente
var paciente = document.querySelector("#primeiro-paciente"); //Mostra todo o TR do paciente

// PESO
var tdPeso = paciente.querySelector(".info-peso"); //Somente a classe HTML do .info-peso
var peso = tdPeso.textContent;//Somente o conteudo da classe .info-peso

// ALTURA
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// IMC Selecionado
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

// VALIDACAO
if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if(pesoEhValido && alturaEhValida){ //Exibi IMC somente se as duas variaveis continuam true
    // Calculo IMC e insercao no HTML
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}