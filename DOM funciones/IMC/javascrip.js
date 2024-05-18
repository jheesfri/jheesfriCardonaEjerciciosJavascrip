let estatura = document.getElementById("estatura")
let peso = document.getElementById("peso")
let calcular = document.getElementById("calcular")

calcular.addEventListener("click",function(){
    console.log("hola")
    let division = parseInt(peso.value) / parseFloat((estatura.value / 100) * (estatura.value / 100)  )
    console.log(division)
    console.log(peso.value)
    console.log(estatura.value)
    document.getElementById("resultadoP").textContent = division.toFixed(2)
    document.getElementById("resultadoInput").value = division.toFixed(2)
})

