//----------------------------//
//Arquivo responsável por adicionar a tabela dados do Form
//----------------------------//

var botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault(); //Previne o comportamento padrao de um btn de formulario
    
    var form = document.querySelector("#form-adiciona");
    
    //Traz o objeto Paciente com cada campo do form
    var paciente = obtemPacienteDoFormulario(form);

    //Cria a variavel e adiciona a elas o criacao de linha e coluna HTML
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Adiciona os valores das variaveis acima dentro do conteudo de texto dos TD
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    //(appendChild) - Adicionar TD como filho de TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //Seleciona tabela de exibicao
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

})

function obtemPacienteDoFormulario(form){
    //Objeto paciente, que retorna o valor de cada campo do input
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    //Function retorn paciente
    return paciente;
}