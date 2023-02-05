let guita = Number(0);
let aux;
const boton = window.document.getElementById("boton");
const cantidad = window.document.getElementById("cantidad");
const tienda = window.document.getElementById("tienda");
const reset = window.document.getElementById("reset");
const nombres = [];
const botones = [];


let mejoras = [{
    id: "m1",
    nombre: "Mejora",
    unidades: Number(0),
    precio: Number(10),
    multiplicador: 0.0011
}, {
    id: "m2",
    nombre: "Movida",
    unidades: Number(0),
    precio: Number(100),
    multiplicador: 0.01
}, {
    id: "m3",
    nombre: "NFT",
    unidades: Number(0),
    precio: Number(1000000),
    multiplicador: 0
}];


inicializar();

function inicializar() {
    if (localStorage.getItem("g") != 0) {
        cargar();
    }
    // dibujarTabla();
    // for (var i = 0; i < mejoras.length; i++) {
    //     aux = i;
    //     nombres[aux] = document.getElementById("nombre" + mejoras[aux].id);
    //     botones[aux] = document.getElementById("precio" + mejoras[aux].id);
    // }
    activarBotones();
    setInterval(function () {
        actualizarGuita();
    }, 10);
    setInterval(function () {
        guardar();
    }, 5000);
}

//Esto hace que suba el dinero cuando picas
function incremento() {
    guita += 1 + mejoras[0].unidades * mejoras[0].multiplicador;
}


//Esto hace que funcionen los botones, se hace al principio pero como es un addEventListener se queda hecho :3
function activarBotones() {
    document.getElementById("m1").addEventListener("click", function () {
        if (guita >= (mejoras[0].precio + (1 * mejoras[0].unidades))) {
            guita -= (mejoras[0].precio + (1 * mejoras[0].unidades));
            mejoras[0].unidades++;
        }
    });

    document.getElementById("m2").addEventListener("click", function () {
        if (guita >= (mejoras[1].precio + (1 * mejoras[1].unidades))) {
            guita -= (mejoras[1].precio + (1 * mejoras[1].unidades));
            mejoras[1].unidades++;
        }
    });

    document.getElementById("m3").addEventListener("click", function () {
        if (guita >= (mejoras[2].precio * ((mejoras[2].unidades) + 1))) {
            guita -= (mejoras[2].precio * ((mejoras[2].unidades) + 1));
            mejoras[2].unidades++;
        }
    });

}



//Esto hace correr la guita y dibujarla subiendo
function actualizarGuita() {
    for (var i = 0; i < mejoras.length; i++) {
        guita = Number(guita) + Number(mejoras[i].multiplicador * mejoras[i].unidades);
    }
    document.getElementById("cantidad").innerHTML = guita.toFixed(2) + "€"
}






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
}

























// function actualizarVisual() {
//     cantidad.innerHTML = guita.toFixed(2) + '€';
//     for (var i = 0; i < mejoras.length; i++) {
//         nombres[i].innerHTML = mejoras[i].nombre + "(" + mejoras[i].unidades + ")";
//         if (i != 2)
//             botones[i].value = mejoras[i].precio + (1 * mejoras[i].unidades) + "€";
//         else
//             botones[i].value = mejoras[2].precio * ((mejoras[2].unidades) + 1)+ "€";
//     }
// }
// function dibujarTabla() {
//     var t = "";
//     for (var i = 1; i <= 2; i++) {
//         t += "<tr>";
//         switch (i) {
//             case 1:
//                 for (var j = 0; j < mejoras.length; j++) {
//                     t += "<td id=\"nombre" + mejoras[j].id + "\"></td>";
//                 }
//                 break;
//             case 2:
//                 for (var j = 0; j < mejoras.length; j++) {
//                     t += "<td><input type=\"button\" id=\"precio" + mejoras[j].id + "\"></td>";
//                 }
//                 break;
//         }
//         t += "</tr>";
//     }
//     tienda.innerHTML = t;
// }