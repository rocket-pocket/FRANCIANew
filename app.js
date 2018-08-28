function abrirCerrarmenu(){

    let menu = document.getElementById("menu");
    let botonAbrir = document.getElementById("boton-menu-cerrado");
    let botonCerrar = document.getElementById("boton-menu-abierto")
    if (menu.className != "menu-desplegado"){

        menu.className = "menu-desplegado";
        botonCerrar.style.display = "inline";
        botonAbrir.style.display = "none"; 
    }else{

        menu.className = "menu-cerrado";
        botonCerrar.style.display = "none"; 
        botonAbrir.style.display = "inline";
    }
}
window.onscroll = function(){botonArriba()};

function botonArriba(){
    var botonArriba = document.getElementById("botonArriba");
  //  var cabecera = document.getElementById("radioMenu");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){

        botonArriba.style.display = "inline";
       // cabecera.classList.toggle("cabecera");
    }else{

        botonArriba.style.display = "none";
       // cabecera.classList.toggle("cabecera")
    }
}
function subir(){

    window.scrollTo(0,0)
}

function mostrarCoche(){

    var coche = "Llegar a Guardamar en coche desde Alicante tiene dos opciones, la autovía Alicante- Murcia en la que hay que tomar el desvío del aeropuerto o la N-340. En caso de venir desde Benidorm la opción es la autopista A-7. Elige las rutas para llegar más rápido."
    
    var parrafo = document.getElementById("transporte");
    parrafo.innerHTML = coche
}

function mostrarTren(){
    var tren = "La conexión más cercana en tren es en Alicante. La estación situada en el centro de la capital tiene cercana la de autobuses desde la que se sale hasta Guardamar."

    var parrafo = document.getElementById("transporte");

    parrafo.innerHTML = tren
}

function mostrarBus(){

    var bus = "La estación de autobuses se encuentra en C/ Molivent s/n. donde podrá viajar con Costa Azul (Alacant-Cartagena), Vegabus (Guardamar-Elx) y Agostense (Guardamar-Oriola).En la estación de autobuses hay una parada de taxi y parada de autobús urbano.";

    var parrafo = document.getElementById("transporte");

       parrafo.innerHTML = bus;
}

function mostrarAvion(){
    var avion = "Nos encontramos a unos 25 km del aeropuerto de Alicante, donde podrá utilizar un servicio de taxi para llegar hasta Guardamar.";

    var parrafo = document.getElementById("transporte");

    parrafo.innerHTML = avion 
}
function galeria1(){
    var imagen = document.getElementById("principal");

        imagen.src="img/guardamar.jpg" 
}
function galeria2(){
    var imagen = document.getElementById("principal");

    imagen.src="img/dunas.jpg" 
}
function galeria3(){
    var imagen = document.getElementById("principal");

    imagen.src="img/pinada.jpg" 
}
function galeria4(){
    var imagen = document.getElementById("principal");

    imagen.src="img/limon.jpg" 
}
