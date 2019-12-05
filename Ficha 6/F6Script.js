"use strict"

const API_KEY = "9091e687";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

function pesquisar() {

    /** ir buscar o valor **/
    var search_keyword = $("#caixa-pesquisa").val();

    var search_url = API_URL + "s=" + search_keyword;

    $.ajax({
        method: "GET",
        url: search_url
    }).done(function (msg) {
        if(msg.Response == "True"){
            var results = msg.Search;

            if(results.length <= 0){
                return;
            }
            var results_html = $(".filme"); //Array de elementos html.
                                            //Está a ir à classe filme para ir buscar todos os elementos

            //results_html.length só vai contar as vezes que a classe filme existe
            for(var i = 0; i < results_html.length ; ++i){

                if(i >= results.length){
                    break;
                }

                var result = results[i];
                var result_html = results_html[i];

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
            }

        }else{
            console.log("Error: invalid ajax response");
        }

    });
}
