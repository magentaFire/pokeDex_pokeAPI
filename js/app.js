// $.getJSON("http://pokeapi.co/api/v2/pokemon/",
// 	function (response) {
// 	var pokemons = response.results;
// 	crearPokemons(pokemons);
// });
//
// function crearPokemons(pokemons) {
// 	var ul = document.getElementById("pokemons");
//
// 	pokemons.forEach(function (pokemon) {
// 		$("<li />").appendTo("ul").text(pokemon.name);
// 		// var li = document.createElement("li");
// 		// li.textContent = pokemon.name;
// 		// ul.appendChild(li);
// 	});
// }

$(document).ready(start);

var contador = 1;

function start(){
		cargarPokemon();
};

function cargarPokemon(){
	var url = "http://pokeapi.co/api/v2/pokemon/";
	$.getJSON(url, function (response) {
  	console.log(response.results);
    var pokemons = response.results;
  	mostrarPokemon(pokemons);
});
};

function mostrarPokemon(pokemons){
	pokemons.forEach(function(pokemon){
    $("<div />").appendTo("#pokeContainer").addClass("col s12 m3 pokeColumn" + contador);
    $("<div />").appendTo(".pokeColumn" + contador).addClass("card blue-grey darken-1 pokeCard" + contador);
    $("<div />").appendTo(".pokeCard" + contador).addClass("card-content white-text pokeSubContainer" + contador);
    $("<a />").appendTo(".pokeCard" + contador).addClass("card-action pokeDetalle" + contador).text("detalle");
    $("<span />").appendTo(".pokeSubContainer" + contador).attr({
        class: "card-title",
        id: "pokeName" + contador
      });
    $("<img />").appendTo(".pokeSubContainer" + contador).attr({
        class: "poke-image",
        id: "pokeImg" + contador,
        alt: "imagen" + contador
      });
    contador += 1;
	});
};



function mostrarTotal(total){
	$('#total').text(total);
}
