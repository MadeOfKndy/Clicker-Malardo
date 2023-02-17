let guita = Number(0);
let isBotonGuardarComprado = false

//Array con datos de cada mejora (idTexto: id del texto en el que poner unidades de mejoras, idBoton: id del boton en el que poner precio actual)
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
if (localStorage.getItem("g") != 0) {
    cargar();
}

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








