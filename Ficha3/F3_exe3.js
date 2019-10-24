"use strict"
var imagem = null;

function escondeMostra() {
    console.log("esconde/Mostra");


    var visibilidade = getComputedStyle(imagem).getPropertyValue("visibility");

    if (visibilidade == "visible") {
        imagem.style.visibility = "hidden";
    }
    else {
        imagem.style.visibility = "visible";
    }
}

function esconde() {
    console.log("esconde");

    imagem.style.display = "none";
}

function mostra() {
    console.log("mostra");
    imagem.style.display = "inline-block";

}

/// alternativa document.onload(function(){bla bla;});
document.addEventListener("DOMContentLoaded", function () {
    imagem = document.getElementsByTagName("img")[0];
    var botao =  document.getElementById("botao");
    botao.addEventListener("mouseover",mostra);
});


