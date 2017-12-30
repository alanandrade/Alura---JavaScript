var pacientes = document.querySelectorAll(".paciente"); 
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut"); //Add a classe na linha 

    setTimeout(function(){//Aguarde 0,5s para remover
        event.target.parentNode.remove();
    }, 500);
});