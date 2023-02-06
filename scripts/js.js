let guita = Number(10000000);


//Array con datos de cada mejora
let mejoras = [{
    idTexto: "m1",
    idBoton: "b1",
    nombre: "Mejora",
    unidades: Number(0),
    precio: Number(10),
    precioInicial: Number(10),
    multiplicador: 0.0011
}, {
    idTexto: "m2",
    idBoton: "b2",
    nombre: "Movida",
    unidades: Number(0),
    precio: Number(100),
    precioInicial: Number(100),
    multiplicador: 0.01
}, {
    idTexto: "m3",
    idBoton: "b3",
    nombre: "NFT",
    unidades: Number(0),
    precio: Number(1000000),
    precioInicial: Number(1000000),
    multiplicador: 0
}];







//Carga el localStorage
// if (localStorage.getItem("g") != 0) {
//     cargar();
// }

//Dibuja todads las mejoras al cargar la página
for (let i = 0; i < mejoras.length; i++) {
    actualizarMejora(i)
}

//Esto va actualizando la guita constantemente
setInterval(function () { 
   for (var i = 0; i < mejoras.length; i++) {
        guita = Number(guita) + Number(mejoras[i].multiplicador * mejoras[i].unidades);
   }
   document.getElementById("cantidad").innerHTML = guita.toFixed(2) + "€"
}, 10);


//Esto va guardando
setInterval(function () {
    guardar();
}, 5000);








//Funciones para los botones (porque ahora los botones funcionan con funciones y no con EventListeners, así pueden ser referenciados desde otros sitios)

//Esto hace que suba el dinero cuando picas
function incremento() {
    guita += 1 + mejoras[0].unidades * mejoras[0].multiplicador;
}

//Esta función compra una de las mejoras, siendo m la mejora (en el array mejoras) que se ha intentado comprar. Cuando m sea 2, se habrá comprado un NFT.
function comprar(m){
    if (guita >= mejoras[m].precio) {
        if (m!=2) {
            guita -= (mejoras[m].precio)
            mejoras[m].precio ++
        } else {
            guita -= (mejoras[m].precio)
            mejoras[m].precio +=1000000
        }
        mejoras[m].unidades++
        actualizarMejora(m)
    }
}

//Aquí se actualizan el precio y la cantidad de mejoras en la tabla de la tienda. No está dentro de la función comprar porque al cargar la página se le llama sin comprar nada
function actualizarMejora(m){
    document.getElementById(mejoras[m].idTexto).innerHTML = mejoras[m].nombre + " ("+ mejoras[m].unidades + ")"
    document.getElementById(mejoras[m].idBoton).innerHTML = mejoras[m].precio + "€"
}











//Aqui las tres funciones que modifican el localStorage

function reiniciar() {
    guita = 0
    mejoras[0].unidades = 0
    mejoras[1].unidades = 0
    mejoras[2].unidades = 0
    guardar()
}


function guardar() {
    localStorage.setItem("g", guita);
    localStorage.setItem("m1", mejoras[0].unidades);
    localStorage.setItem("m2", mejoras[1].unidades);
    localStorage.setItem("m3", mejoras[2].unidades);
}


function cargar() {
    guita = Number(localStorage.getItem("g"));
    mejoras[0].unidades = Number(localStorage.getItem("m1"));
    mejoras[1].unidades = Number(localStorage.getItem("m2"));
    mejoras[2].unidades = Number(localStorage.getItem("m3")); 
    
    mejoras[0].precio = mejoras[0].precioInicial + mejoras[0].unidades
}

