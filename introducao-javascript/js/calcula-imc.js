//----------------------------//
//Arquivo responsável pelo calculo e validacao IMC
//----------------------------//

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Seleciona o paciente
var pacientes = document.querySelectorAll(".paciente"); //Mostra todo o TR do paciente

for (var i = 0; i < pacientes.length; i++) { // Se I for menor que pacientes, acrescenta mais um no I, length verifica a quantidade de itens

    //console.log(pacientes); //Traz todos os elementos do Array 5x
    //console.log(pacientes[i]); //Traz todos os elementos separados pelo loop que foi realizado

    var paciente = pacientes[i]; //Adiciona a cada iteracao do FOR o indice dentro de paciente
    //Indice[i] acessa cada posicao do array e adiciona em pacientes

    // PESO
    var tdPeso = paciente.querySelector(".info-peso"); //Somente a classe HTML do .info-peso
    var peso = tdPeso.textContent;//Somente o conteudo da classe .info-peso

    // ALTURA
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    // IMC Selecionado
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);//Resultado TRUE ou FALSE
    var alturaEhValida = validaAltura(altura);

    // VALIDACAO - Caso for invalido por causa da (!), adiciona o texto e classe abaixo
    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido == true && alturaEhValida == true) { //Faz o calculo IMC somente se as duas variaveis continuam true
        // Calculo IMC e insercao no HTML
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(0);
}