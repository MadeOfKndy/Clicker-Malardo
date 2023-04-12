
//Funciones para los botones (porque ahora los botones funcionan con funciones y no con EventListeners, así pueden ser referenciados desde otros sitios)

//Esto hace que suba el dinero cuando picas
function incremento() {
    guita += 1 + (mejoras[0].unidades * mejoras[0].multiplicador);
}

//Esta función compra una de las mejoras, siendo m la mejora (en el array mejoras) que se ha intentado comprar. Cuando m sea 2, se habrá comprado un NFT.
function comprar(m){
    if (guita >= mejoras[m].precio) {
        if (m!=2) {
            guita -= (mejoras[m].precio)
            mejoras[m].precio ++
        } else {
            guita -= (mejoras[m].precio)
            mejoras[m].precio = mejoras[m].precio * 2
        }
        mejoras[m].unidades++
        actualizarMejora(m)
    }
}


//Aquí se actualizan el precio y la cantidad de mejoras en el html. No está dentro de la función comprar porque hace falta llamarlo al cargar la página sin que se haya nada
function actualizarMejora(m){
    document.getElementById(mejoras[m].idTexto).innerHTML = mejoras[m].nombre + " ("+ mejoras[m].unidades + ")"
    document.getElementById(mejoras[m].idBoton).innerHTML = mejoras[m].precio + "€"
}

