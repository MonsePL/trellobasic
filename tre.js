alert("miau")

function Cosaporhacer(cosa){
  this.cosa = cosa;
}

//se crea un array vacio para poner las cosas que vamos a hacer//
var muchascosas= []

function crearlista(){
  //la variable cosapres será igual al valor intro de la primera cajita//
  var cosapres = document.getElementById("agregarpendpresente")
  // se crea un nuevo objeto llamado cosanueva en base a la clase cosa por hacer//
  var cosanueva = new Cosaporhacer(cosapres.value)
  //se agrega la cosa nueva al array vacio//
  muchascosas.push(cosanueva)
  mostrarlista()
}


function mostrarlista(){
  //se identifica el lugar (lista) donde se va a imprimir//
  var listacosasp = document.getElementById("listaPresente")
  //se crea un nuevo elemento de lista//
  var lista = document.createElement ("ul")
  listacosasp.removeChild(listacosasp.firstChild);

  //se recorre el array para crear un elemento li en base de la clase y como se crean los obj//
  muchascosas.forEach(function(cosaporhacer){
  var elemento = document.createElement("li")

  elemento.innerText = cosaporhacer.cosa
  lista.appendChild(elemento)
  })
  listacosasp.appendChild(lista)
}



//Esto va a ser para las cosas a futuro por eso le puse f :P//
function Cosaporhacerf(cosaf){
  this.cosaf = cosaf;
}
//se crea un array vacio para poner las cosas que vamos a hacer//

var muchascosasf= []

function crearlistaf(){
  //la variable cosafut será igual al valor intro de la primera cajita//
  var cosafut = document.getElementById("agregarpendfuturo")
  // se crea un nuevo objeto llamado cosanueva en base a la clase cosa por hacer//
  var cosanuevaf = new Cosaporhacerf(cosafut.value)
  //se agrega la cosa nueva al array vacio//
  muchascosasf.push(cosanuevaf)
  mostrarlistaf()
}


function mostrarlistaf(){
  //se identifica el lugar (lista) donde se va a imprimir//
  var listacosasp = document.getElementById("listafuturo")
  //se crea un nuevo elemento de lista//
  var lista = document.createElement ("ul")

  listacosasp.removeChild(listacosasp.firstChild);


  //se recorre el array para crear un elemento li en base de la clase y como se crean los obj//
  muchascosasf.forEach(function(cosaporhacerf){
  var elemento = document.createElement("li")

  elemento.innerText = cosaporhacerf.cosaf
  lista.appendChild(elemento)
  })
  listacosasp.appendChild(lista)
}




//Aqui voy a hacer una nueva lista//
function Bloque(){
  This.nombre = nombre;
  this.tareas = tareas;

}
//se crea un array vacio para poner las cosas que vamos a hacer//

var bloquenuevastareas= []

function crearbloque(){
  //la variable listita será igual al valor intro de la primera cajita//
  var listita = document.getElementById("agregarlista")
  // se crea un nuevo objeto llamado cosanueva en base a la clase cosa por hacer//
  var nuevobloque = new Bloque(listita.value)
  //se agrega la cosa nueva al array vacio//
  bloquenuevastareas.push(nuevobloque)
  mostrarbloque()
}


function mostrarbloque(){
  //se identifica el lugar (bloque) donde se va a imprimir//
  var listacosasp = document.getElementById("segmento")
  //se crea un nuevo elemento del bloque //
  var lista = document.createElement ("tr")

  //se recorre el array para crear un elemento td en base de la clase y como se crean los obj//
  bloquenuevastareas.forEach(function(bloque){
    var elemento = document.createElement("td")

  elemento.innerText = bloque.nombre.tareas
  lista.appendChild(elemento)
  })
  listacosasp.appendChild(lista)
}
