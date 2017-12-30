//----------------------------//
//Arquivo responsável por adicionar a tabela dados do Form
//----------------------------//

var botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault(); //Previne o comportamento padrao de um btn de formulario
    
    var form = document.querySelector("#form-adiciona");
    
    //Traz os valores do form e function abaixo possui um objeto paciente
    var paciente = obtemPacienteDoFormulario(form);

    //Cria TR com os dados
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);        
        return; // Nao continua o restante da funcao
    }

    //Seleciona tabela de exibicao
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();//Resetar campos do form depois de enviar
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){ //Para cada item do array, faz alguma coisa
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

//Ordem de elementos criados na TD
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = []; //Array de erros

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    
    if(!validaPeso(paciente.peso)){ //Se o peso nao for valido
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){ //Se a altura nao for valida
        erros.push("Altura é invállida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}