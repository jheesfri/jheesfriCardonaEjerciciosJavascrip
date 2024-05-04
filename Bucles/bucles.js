//ejercicio_1
let numeroUser = parseInt(prompt("Ingresa un numero"))
for (let mul = 0; mul <= 10; mul++) {
    console.log(numeroUser * mul)
}

//ejercicio_2

let numerUsuario = parseInt(prompt("Ingresa un numero"))
let suma = numeroAdivinanza

while (numerUsuario != 0) {
    numerUsuario = parseInt(prompt("Ingresa un numero"))
    suma += numerUsuario
}
console.log(suma)

//ejercicio_4

console.log("ejercicio 4")

let numIngresado = parseInt(prompt("ingresa un numero para saber si es primo"))
let conteo = 0
for (let i = 1; i <= numIngresado; i++) {
    if ((numIngresado % i) === 0) {
        conteo++
    }

}
if (conteo === 2) {
    console.log("el numero " + numIngresado + " es primo")
} else {
    console.log(" el numero " + numIngresado + " no es primo")
}

//ejericio_5

console.log("ejercicio 5")

let numUserDivisor = parseInt(prompt("ingresa un numero"))

for (let i = 1; i <= numUserDivisor; i++) {
    if (numUserDivisor % i === 0) {
        console.log(i)
    }

}

//ejercicio 6

console.log("ejercicio 6")

let array = ["juan", "miguel", "mateo", "edwar", "diego", "camilo", "danny", "sam", "esteban", "elian"]
for (let index = 0; index < array.length; index++) {
    console.log(array[index])

}

//ejercicio 7

console.log("ejercicio 7")

let arraynum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let index = 0; index < arraynum.length; index++) {
    console.log(arraynum[index] * 2)

}

//ejercicio_9

console.log("ejercicio 9")

let arraynumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


for (let indice = 0; indice < arraynumeros.length; indice++) {
    if (arraynumeros[indice] % 2 === 0) {
        console.log(indice + " Es un numero par")
    }

}

//ejercicio_10

console.log("ejercicio 10")
let numeroParOImpar = parseInt(prompt("Ingresa Un Numero").trim())
let sumaPar = 0
let sumaImpar = 0

while (numeroParOImpar != 0) {
    if (numeroParOImpar % 2 === 0) {
        sumaPar += numeroParOImpar
        numeroParOImpar = parseInt(prompt("Ingresa un numero"))
    } else {
        sumaImpar = sumaImpar + numeroParOImpar
        numeroParOImpar = parseInt(prompt("Ingresa un numero"))
    }
}
console.log("los numeros pares sumaron " + sumaPar)
console.log("los numeros impares sumaron " + sumaImpar)

//ejercicio_11 

console.log("ejercicio 11")

let arrayP11 = [10,51,85,96,45,12,32,76,54,61]
console.log(arrayP11)
let numMayorP11 = arrayP11[0]
let numMenorP11 = arrayP11[0]
for(let i = 0; i < arrayP11.length; i ++){
    if(numMayorP11 <= arrayP11[i]){
        numMayorP11 = arrayP11[i]
    }
}
console.log("El numero mayor es " + numMayorP11)

//ejercicio_12

console.log("ejercicio 12")

let arrayP12 = [10,51,85,96,45,12,32,76,54,61]
console.log(arrayP12)
let numMayorP12 = arrayP12[0]
let numMenorP12 = arrayP12[0]
for(let i = 0; i < arrayP12.length; i ++){
    if(numMenorP12 >= arrayP12[i]){
        numMenorP12 = arrayP12[i]
    }
}
console.log("El numero menor es " + numMenorP12)

//ejercicio_13
console.log("Ejercicio 13")
let nombreJugador1P13 = prompt("Ingresa el nombre dek jugador Nº 1")
let nombreJugador2P13 = prompt("Ingresa el nombre dek jugador Nº 2")
let jugador1P13, jugador2P13
let ganadorP13 
do{ 
    jugador1P13 = prompt("jugador 1 ingresa 1 para ¨PIEDRA¨, 2 para ¨PAPEL¨ O 3 para ¨TIJERA¨").trim()
    jugador2P13 = prompt("jugador 2 ingresa 1 para ¨PIEDRA¨, 2 para ¨PAPEL¨ O 3 para ¨TIJERA¨").trim()

    if (jugador1P13 == 1 && jugador2P13 == 3) {
        console.log ("El ganador es: " + nombreJugador1P13)
    }else if (jugador1P13 == 2 && jugador2P13 == 1) {
        console.log ("El ganador es: " + nombreJugador1P13)
    }else if ( jugador1P13 == 3 && jugador2P13 == 2){
        console.log ("El ganador es: " + nombreJugador1P13)
    }else if ( jugador1P13 == jugador2P13){
        alert("ËMPATE¨ Vuelve a jugar ")
    }
}while (jugador1P13 == jugador2P13)

console.log ("El ganador es: " + nombreJugador2P13)


// ejercicio_14

console.log("Ejercicio 14")

let asterisco = ""
for (let i = 0; i < 5; i++) {
    asterisco = asterisco + "*"
    console.log(asterisco)
}