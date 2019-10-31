"use strict"
var imagem = null;

function escondeMostra() {
    console.log("esconde/Mostra");

/*
    var visibilidade = getComputedStyle(imagem).getPropertyValue("visibility");

    if (visibilidade == "visible") {
        imagem.style.visibility = "hidden";
    }
    else {
        imagem.style.visibility = "visible";
    }*/

    var visibilidade = imagem.css("visibility");
    if (visibilidade == "visible"){
        imagem.css("visibility", "hidden");
    }else{
        imagem.css("visibility", "visible");
    }
}

function esconde() {
    console.log("esconde");

   // imagem.style.display = "none"; mesma coisa que:
    imagem.hide();
}

function mostra() {
    console.log("mostra");
    //imagem.style.display = "inline-block";
   // imagem.css("display","inline-block");
    imagem.show();
}

/// alternativa document.onload(function(){bla bla;});
/*
document.addEventListener("DOMContentLoaded", function () {
    imagem = document.getElementsByTagName("img")[0];
    var botao =  document.getElementById("botao");
    botao.addEventListener("mouseover",mostra);
});*/


$(document).ready(function () {
    //imagem = document.getElementsByTagName("img")[0];
    imagem = $("img");

    //var botao =  document.getElementById("botao");
    //botao.addEventListener("mouseover",mostra);
    $("#botao").mouseover(mostra);
});




























