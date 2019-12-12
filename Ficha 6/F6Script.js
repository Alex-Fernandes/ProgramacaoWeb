"use strict"

const API_KEY = "9091e687";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

var div_filme_clone = null;

function pesquisar() {

    /** ir buscar o valor **/
    var search_keyword = $("#caixa-pesquisa").val();

    var search_url = API_URL + "s=" + search_keyword;

    $.ajax({
        method: "GET",
        url: search_url
    }).done(function (msg) {
        if(msg.Response == "True"){
            var results = msg.Search; // array dos elementos

            var lista_filmes = $("#lista-filmes");
            lista_filmes.html("");

           results.forEach(function (result) {

                var result_html = div_filme_clone.clone();

                var titulo = result.Title;
                var ano = result.Year;
                var tipo = result.Type;
                var poster = result.Poster;

                var titulo_html = $(".titulo", result_html);
                var ano_html = $(".ano", result_html);
                var tipo_html = $(".tipo", result_html);
                var poster_html = $(".poster", result_html);

                //introduzir no html os valores
                titulo_html.text(titulo);
                ano_html.text(ano);
                tipo_html.text(tipo);
                poster_html.attr("src",poster);


                console.log("Titulo: " + titulo);
                console.log("Ano: " + ano);
                console.log("Tipo: " + tipo);
                console.log("Poster: " + poster);


                lista_filmes.append(result_html);
           });

        }else{
            console.log("Error: invalid ajax response");
        }

    });
}

$(function () {
    //Equivalente On document load
    var div_filme = $(".filme"); // seleciona a div
    div_filme_clone =  div_filme.clone(); // clona a div para a variavel div_filme_clone
    div_filme.hide(); // faz que a div fique escondida

});
