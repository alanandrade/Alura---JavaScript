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

var imc = peso / (altura * altura);
console.log(imc);
