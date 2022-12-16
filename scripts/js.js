let guita = Number(0);
let aux;
const boton = window.document.getElementById("boton");
const cantidad = window.document.getElementById("cantidad");
const tienda = window.document.getElementById("tienda");
const reset = window.document.getElementById("reset");
const nombres = [];
const botones = [];
let datos = {
    g: 0,
    m1: 0,
    m2: 0,
    m3: 0
}
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
    if(localStorage.getItem("g")!=0){
        cargar();
    }
    dibujarTabla();
    for (var i = 0; i < mejoras.length; i++) {
        aux = i;
        nombres[aux] = window.document.getElementById("nombre" + mejoras[aux].id);
        botones[aux] = window.document.getElementById("precio" + mejoras[aux].id);
    }
    sincronizarMejoras();
    activarBotones();
    setInterval(function () {
        actualizarVisual()
    }, 20);
    setInterval(function () {
        actualizar();
    }, 10);
    setInterval(function(){
        guardar();
    }, 5000);
}

boton.addEventListener("click", function () {
    incremento();
});

function incremento() {
    guita += 1 + mejoras[0].unidades * mejoras[0].multiplicador;
}

function activarBotones() {
    botones[0].addEventListener("click", function () {
        if (guita >= (mejoras[0].precio + (1 * mejoras[0].unidades))) {
            guita -= (mejoras[0].precio + (1 * mejoras[0].unidades));
            mejoras[0].unidades++;
            datos.m1++;
        }
    });
    botones[1].addEventListener("click", function () {
        if (guita >= (mejoras[1].precio + (1 * mejoras[1].unidades))) {
            guita -= (mejoras[1].precio + (1 * mejoras[1].unidades));
            mejoras[1].unidades++;
            datos.m2++;
        }
    });
    botones[2].addEventListener("click", function () {
        if (guita >= (mejoras[2].precio * mejoras[2].unidades)) {
            guita -= (mejoras[2].precio * mejoras[2].unidades);
            mejoras[2].unidades++;
            datos.m3++;
        }
    });
    reset.addEventListener("click", function(){
        reiniciar();
    })
}

function actualizarVisual() {
    cantidad.innerHTML = guita.toFixed(2) + '€';
    for (var i = 0; i < mejoras.length; i++) {
        nombres[i].innerHTML = mejoras[i].nombre + "(" + mejoras[i].unidades + ")";
        botones[i].value = mejoras[i].precio + (1 * mejoras[i].unidades) + "€";
    }
}

function actualizar() {
    for (var i = 0; i < mejoras.length; i++) {
        guita = Number(guita) + Number(mejoras[i].multiplicador * mejoras[i].unidades);
    }
}

function dibujarTabla() {
    var t = "";
    for (var i = 1; i <= 2; i++) {
        t += "<tr>";
        switch (i) {
            case 1:
                for (var j = 0; j < mejoras.length; j++) {
                    t += "<td id=\"nombre" + mejoras[j].id + "\"></td>";
                }
                break;
            case 2:
                for (var j = 0; j < mejoras.length; j++) {
                    t += "<td><input type=\"button\" id=\"precio" + mejoras[j].id + "\"></td>";
                }
                break;
        }
        t += "</tr>";
    }
    tienda.innerHTML = t;
}

function reiniciar() {
    localStorage.setItem("g", 0);
    localStorage.setItem("m1", 0);
    localStorage.setItem("m2", 0);
    localStorage.setItem("m3", 0);
    location.reload()
}

function guardar() {
    localStorage.setItem("g", guita);
    localStorage.setItem("m1", datos.m1);
    localStorage.setItem("m2", datos.m2);
    localStorage.setItem("m3", datos.m3);
}

function cargar(){
    datos.g = Number(localStorage.getItem("g"));
    datos.m1 = Number(localStorage.getItem("m1"));
    datos.m2 = Number(localStorage.getItem("m2"));
    datos.m3 = Number(localStorage.getItem("m3"));
    guita = datos.g;
}

function sincronizarMejoras(){
    mejoras[0].unidades = Number(datos.m1);
    mejoras[1].unidades = Number(datos.m2);
    mejoras[2].unidades = Number(datos.m3);
}