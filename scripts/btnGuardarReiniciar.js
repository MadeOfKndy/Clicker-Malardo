


function botonGuardarClicado(){
    if (isBotonGuardarComprado){
        guardar()
    }else if(guita > 5000){
        if(confirm("¿Comprar botón de guardar (5000€)?")){
            guita -= 5000
            isBotonGuardarComprado = true
            document.getElementById("botonGuardar").innerHTML = "Guardar"
        }
    }else{
        alert("Has de comprar el botón de guardar por 5000 de pecunia")
    }
}




//Estas funciones muestran u ocultan el div rojo del botón de reiniciar

function mostrarDivReiniciar(){
    document.getElementById("divReiniciar").style.visibility = "visible"
}

function esconderDivReiniciar(){
    document.getElementById("divReiniciar").style.visibility = "hidden"
}



