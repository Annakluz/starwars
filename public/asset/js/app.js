var CargarPagina =function(){
    cargarPersonajes();
};

var cargarPersonajes =function (){
    $.ajax("http://swapi.co/api/people/",{
       // url: "http://swapi.co/api/people/",  podemos mover esto como parametro y da el mismo resultado
        method: "GET",
        dataType: "json",
        success: function(response){
            var personajes = response.results;
            var total = response.count;
            mostrarTotalPersonajes(total);
            mostrarPersonajes(personajes);
            
          /*  var $ul =$("#personajes")
            personajes.forEach(function(personaje){   //como parametro nos da la unidad de un arreglo. 
               
                var $li = $("<li />");
                $li.text(personaje.name + "-" + personaje.height + " cm");
                $ul.append($li);
                
                // console.log(personaje.name);
            });.... lo sacamos para checar otros metodos */
            
            
        },
        error:function(response){
            console.log("error", error)
        },
    });
};

var mostrarTotalPersonajes= functio(total){
    $("#total").text(total);
}

$(document).ready(CargarPagina);