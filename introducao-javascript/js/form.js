//----------------------------//
//Arquivo responsável por adicionar a tabela dados do Form
//----------------------------//

var botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault(); //Previne o comportamento padrao de um btn de formulario
    
    var form = document.querySelector("#form-adiciona");
    
    //Traz o objeto Paciente com cada campo do form
    var paciente = obtemPacienteDoFormulario(form);

    //Cria TR com os dados
    var pacienteTr = montaTr(paciente);

    
    //Seleciona tabela de exibicao
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();//Resetar campos do form depois de enviar
})

function obtemPacienteDoFormulario(form){
    //Objeto paciente, que retorna o valor de cada campo do input
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    //Function retorn paciente
    return paciente;
}

function montaTr(paciente){
    //Cria a variavel e adiciona a elas o criacao de linha e coluna HTML
    var pacienteTr = document.createElement("tr");
    
    pacienteTr.classList.add("paciente");

    //(appendChild) - Adicionar TD como filho de TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;//retorn uma linha com todos os dados
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}