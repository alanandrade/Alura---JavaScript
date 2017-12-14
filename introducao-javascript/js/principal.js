var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Seleciona o paciente
var pacientes = document.querySelectorAll(".paciente"); //Mostra todo o TR do paciente

for (var i = 0; i < pacientes.length; i++) { // Se I for menor que pacientes, acrescenta mais um no I, length verifica a quantidade de itens
    //console.log(pacientes[i]); //var I(Indice) entre [] pega cada indice do array

    var paciente = pacientes[i]; //Adiciona a cada iteracao do FOR o indice dentro de paciente
    //Adicionando o I(Indice) nos pacientes, traz separadamente cada indice do loop separado

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
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

    if (pesoEhValido == true && alturaEhValida == true) { //Faz o calculo IMC somente se as duas variaveis continuam true
        // Calculo IMC e insercao no HTML
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}