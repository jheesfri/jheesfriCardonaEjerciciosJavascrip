let notas = [
    {
        id: 1,
        titulo: "Sacar la basura",
        texto: "El perro la puede dañar",
        realizado: false
    },
    {
        id: 2,
        titulo: "Comprar materiales",
        texto: "Tela peluche 8 mtr",
        realizado: false
    },
    {
        id: 3,
        titulo: "Comprar insumos",
        texto: "8000 llaves nikel #6",
        realizado: false
    },
    {
        id: 4,
        titulo: "Moto",
        texto: "Cambiar aceite",
        realizado: false
    }
]

let idGlobal = 4
let titulo = document.getElementById("titulo")
let descripcionNota = document.getElementById("descripcion")
let botonGuardar = document.getElementById("btnGuardarNota")
let botonLimpiar = document.getElementById("btnLimpiar")
let contenedorTarjetas = document.getElementById("contendorTarjetas")

mostrarTarjeta(contenedorTarjetas, notas)

botonLimpiar.addEventListener("click", function () {
    limpiarInput()
})

botonGuardar.addEventListener("click", function () {
    if (titulo.value == "" || descripcionNota.value == "") {
        alert("Hay campos vacios")
    } else {
        guardarNota(titulo.value, descripcionNota.value, notas)
    }

})

function guardarNota(titulo, descripcionNota, lista) {
    let nota = {
        id: idGlobal++,
        titulo: titulo,
        texto: descripcionNota,
        realizada: false
    }
    lista.push(nota)
    limpiarInput()
    mostrarTarjeta(contenedorTarjetas, lista)
}
function limpiarInput() {
    titulo.value = ""
    descripcionNota.value = ""
}
/*function limpiarContenedor() {
    contenedorTarjetas.innerHTML = ""
}*/
function mostrarTarjeta(divPadre, array) {
    divPadre.innerHTML = ""
    if (array.length === 0) {
        contenedorTarjetas.innerHTML = `<p>NO HAY NADA PARA MOSTRAR</p>`
    } else {
        for (let i = 0; i < array.length; i++) {
            let tarjeta = document.createElement("div")
            tarjeta.innerHTML = `
            <div class="card m-1" style="width: 13rem;">
             <input onClick="marcaRealizada(${i},notas)" type="checkbox" ${array[i].realizado ? "checked" : ""}>
             <h5 class="card-title border-bottom">${array[i].titulo}</h5>
             <div class="card-body">
             <p class="card-text ${array[i].realizado ? "text-decoration-line-through" : ""}">${array[i].texto}</p>
              <button type="button" class="btn btn-primary" onClick="borrarNota(${array[i].id})">Borrar nota</button>
             </div>
            </div>`
            divPadre.appendChild(tarjeta)
            console.log(notas[i].realizado);
        }
    }

}
function borrarNota(indice) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id === indice) {
            notas.splice(i, 1)
        }
    }
    mostrarTarjeta(contenedorTarjetas, notas)
}

function marcaRealizada(indice, lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === lista[indice].id) {
            lista[indice].realizado = !lista[indice].realizado

        }

    }
    mostrarTarjeta(contenedorTarjetas, lista)
}


function filtroRealizado(notas) {
    const checkboxRealizado = document.getElementById('realizadas');
    const notasFiltradas = [];

    for (let i = 0; i < notas.length; i++) {
        if (checkboxRealizado.checked && notas[i].realizado) {
            notasFiltradas.push(notas[i]);
        } else if (!checkboxRealizado.checked) {
            notasFiltradas.push(notas[i]);
        }
    }

    mostrarTarjeta(contenedorTarjetas, notasFiltradas);
}

let buscar = document.getElementById('buscar');

buscar.addEventListener('input', (evento) => {
    console.log(evento.target.value);

    let notasFiltradas = notas.filter(nota => nota.titulo.toLowerCase().includes(evento.target.value.toLowerCase()) || nota.texto.toLowerCase().includes(evento.target.value.toLowerCase()))
    console.log(notasFiltradas);
     
    if (evento.target.value != "") {
        mostrarTarjeta(contenedorTarjetas, notasFiltradas);
    }else{
        mostrarTarjeta(contenedorTarjetas,notas )
    }
})