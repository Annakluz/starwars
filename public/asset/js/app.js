var cargarPagina = function (){
  cargarPersonajes();

};


var cargarPersonajes = function () {

var url = 'http://swapi.co/api/people/';
$.getJSON(url, function (response) {
  console.log(response);
  // La diferencia con .get es que siempre se obtiene data, usualmente se utiliza para cuando no sabemos que tipo de informacion vamos a obtener.
   // $.getJSON, solamente esperamos informacion tipo JSON. 

  var personajes = response.results;
  var total = response.count;

  mostrarTotalPersonajes(total);
  mostrarPersonajes(personajes);
});

};
var mostrarTotalPersonajes = function (total){
  $("#total").text("total de personajes:"+total);
}
var mostrarPersonajes = function(personajes) {
  var $ul = $("#personajes");
  personajes.forEach(function(personaje) {
    console.log(personaje);
    console.log(personaje.name);
    console.log(personaje.height);

    var $li = $("<li />");
    $li.text(personaje.name +" "+personaje.height);
    $ul.append($li);

  });
}
$(document).ready(cargarPagina);
