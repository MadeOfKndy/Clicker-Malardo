//Aqui las tres funciones que modifican el localStorage

function reiniciar() {
    guita = 0

    for(var i = 0; i < mejoras.length; i++){
        mejoras[i].unidades=0
        mejoras[i].precio = mejoras[i].precioInicial
        actualizarMejora(i)
        
    }

    isBotonGuardarComprado = false
    document.getElementById("botonGuardar").innerHTML = "<del>Guardar</del>"
    guardar()
    esconderDivReiniciar()

}


function guardar() {
    localStorage.setItem("g", guita);
    for (let i = 0; i < mejoras.length; i++) {
        localStorage.setItem(mejoras[i].idTexto, mejoras[i].unidades);
    }
    localStorage.setItem("isBotonGuardarComprado", isBotonGuardarComprado)
}



function cargar() {
    guita = Number(localStorage.getItem("g"));
    for (let i = 0; i < mejoras.length; i++) {
        mejoras[i].unidades = Number(localStorage.getItem(mejoras[i].idTexto));
    }

    mejoras[0].precio = mejoras[0].precioInicial + mejoras[0].unidades
    mejoras[1].precio = mejoras[1].precioInicial + mejoras[1].unidades
    mejoras[2].precio = mejoras[2].precioInicial*(Math.pow(mejoras[2].unidades + 1 , 2))


    //botón de guardar (por defecto no está comprado)
    isBotonGuardarComprado = localStorage.getItem("isBotonGuardarComprado")
    if (isBotonGuardarComprado){document.getElementById("botonGuardar").innerHTML = "Guardar"}

    
}
