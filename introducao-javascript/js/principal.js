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

    var pesoEhValido = true;
    var alturaEhValida = true;

    // VALIDACAO
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido == true && alturaEhValida == true) { //Faz o calculo IMC somente se as duas variaveis continuam true
        // Calculo IMC e insercao no HTML
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(0);
    }
}

var botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault(); //Previne o comportamento padrao de um btn de formulario
    console.log("Botao de adicionar clicado!");
})