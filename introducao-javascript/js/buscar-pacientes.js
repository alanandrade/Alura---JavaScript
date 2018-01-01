var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando paciente...");
    var xhr = new XMLHttpRequest(); //Cria a requisicao da API
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //Endereco da requisicao
    xhr.send(); //Envio da Requisicao
    
    xhr.addEventListener("load", function(){ //Quando estiver pronto, realize a funcao
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //Converte de STRING para um Obejto ARRAY JS
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    });
});