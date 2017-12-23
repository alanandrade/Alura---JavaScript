//----------------------------//
//Arquivo responsável por adicionar a tabela dados do Form
//----------------------------//

var botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault(); //Previne o comportamento padrao de um btn de formulario
    
    var form = document.querySelector("#form-adiciona");
    
    //Adicionando valor na variavel = (dentro do form.name.valor do input)
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //Cria a variavel e adiciona a elas o criacao de linha e coluna HTML
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    //Adiciona os valores das variaveis acima dentro do conteudo de texto dos TD
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //(appendChild) - Adicionar TD como filho de TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //Seleciona tabela de exibicao
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

})