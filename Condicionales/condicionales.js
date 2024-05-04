//ejercicio_1

console.log("Ejercicio 1")
let num1, num2
num1 = parseInt(prompt("Ingresa el numero 1"))
num2 = parseInt(prompt("Ingresa el numero 2"))
if (num1 > num2) {
    console.log("El " + num1 + " es mayor que el " + num2)
} else {
    console.log("El " + num2 + " es mayor que el " + num1)
}
//ejercicio_2

console.log("Ejercicio 2")
let num_1, num_2
num_1 = parseInt(prompt("Ingresa el numero 1"))
num_2 = parseInt(prompt("Ingresa el numero 2"))
if (num_1 === num_2) {
    console.log("Los numero son iguales")
} else {
    console.log("Los numero son diferentes")
}
//ejercicio_3

console.log("Ejercicio 3")
let numero_1, numero_2
numero_1 = parseInt(prompt("Ingresa el numero 1"))
numero_2 = parseInt(prompt("Ingresa el numero 2"))
if (numero_1 < numero_2) {
    console.log("El numero " + numero_2 + " es el mayor")
} else if (numero_1 > numero_2) {
    console.log("El numero " + numero_1 + " es el mayor")
} else {
    console.log("Los numeros son iguales")
}
//ejercicio_4

console.log("Ejercicio 4")
//ejemplo 1
console.log("Ejercicio 4 ejemplo 1")
let Num1, Num2, Num3, R1, Menor
Num1 = parseInt(prompt("Ingresa el numero 1"))
Num2 = parseInt(prompt("Ingresa el numero 2"))
Num3 = parseInt(prompt("Ingresa el numero 3"))

if (Num1 < Num2 && Num1 < Num3) {
    console.log("El numero " + Num1 + " es el menor")
} else if (Num2 < Num1 && Num2 < Num3) {
    console.log("El numero " + Num2 + " es el menor")
} else {
    console.log("El numero " + Num3 + " es el menor")
}
//ejemplo 2
console.log("Ejercicio 4 ejemplo 2")
if (Num1 < Num2) {
    R1 = Num1
} else {
    R1 = Num2
}
if (R1 < Num3) {
    Menor = R1
} else {
    Menor = Num3
}
console.log("El numero mas chico es: " + Menor)

// ejercicio_5
console.log("ejercicio 5")
let persona1 = {
    nombre: prompt("Ingresa nombre persona 1"),
    edad: parseInt(prompt("Ingresa edad persona 1")),
    altura: parseFloat(prompt("Ingresa altura persona 1"))
}
let persona2 = {
    nombre: prompt("Ingresa nombre persona 2"),
    edad: parseInt(prompt("Ingresa edad persona 2")),
    altura: parseFloat(prompt("Ingresa altura persona 2"))
}

if (persona1.altura > persona2.altura && persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " Es mas alto y el de mayor edad")
} else if (persona2.altura > persona1.altura && persona2.edad > persona1.edad) {
    console.log(persona2.nombre + " Es mas alto y " + persona2.nombre + " Es el de mayor edad")
} else if (persona2.altura > persona1.altura && persona1.edad > persona2.edad) {
    console.log(persona2.nombre + " Es mas alto y " + persona1.nombre + " Es el de mayor edad")
} else {
    console.log(persona1.nombre + " Es mas alto y " + persona2.nombre + " Es el de mayor edad")
}

//ejericio_6
console.log("ejercicio 6")
let Nombre, Edad, Altura, Vision
Nombre = prompt("Ingresa tu nombre")
Edad = parseInt(prompt("Ingresa tu edad"))
Altura = parseFloat(prompt("Ingresa tu altura"))
Vision = prompt("Ingresa tu Visio en una escala de 1 a 10")

if ((Edad >= 18 && Altura >= 150) && Vision >= 8) {
    console.log("Felicitaciones estas capacitado para conducir")
} else {
    console.log("Lo siento aun no estas capacitado para conducir")
}

//ejercicio_7
console.log("Ejercicio 7")
let NombreMio = "jheesfri"
let pase = "vip"
let entrada = "si"
let usarEntrada = "si"
let valor_entrada = 1000
let NombreUser, paseUser, entradaUser, usar_entrada_user
NombreUser = prompt("Ingresa tu nombre")
paseUser = prompt("Ingresa tu pase vip o normal")
entradaUser = prompt("Ingresa ¨si¨ si posees entrada y ¨no¨ en caso contrario")
if (NombreMio == NombreUser || pase == paseUser) {
    console.log("Bienvenido puedes ingresar")
} else if (entrada == entradaUser) {
    usar_entrada_user = prompt("Desea usar la entrada ¨si¨ o ¨no¨")
    if (usarEntrada == usar_entrada_user) {
        console.log("Bienvenido puedes ingresar")
    } else {
        console.log("ok, muchas gracias esperamos que vuelvas pronto")
    }
} else {
    let deseas_comprar = prompt("deseas comprar entrada ¨si¨ o ¨no¨")
    if (deseas_comprar == "si") {
        let dinero_disponible = prompt("Dinero disponible")
        if (dinero_disponible >= valor_entrada) {
            console.log("Compra exitosa, Puedes entrar")
        } else {
            console.log("Compra fallida")
        }
    }
    console.log("ok, muchas gracias esperamos que vuelvas pronto")
}

//ejercicio_8
console.log("Ejercicio 8")
let numero_incognita = 4
let numero_ingresado = parseInt(prompt("ingresa un numero"))
if (numero_ingresado === numero_incognita) {
    console.log("Ganaste, haz adivinado el numero")
} else if (numero_ingresado > numero_incognita) {
    console.log("El numero ingresado es mayor, haz un segundo intento")
    numero_ingresado = parseInt(prompt("2do intento ingresa un numero"))
    if (numero_ingresado === numero_incognita) {
        console.log("Ganaste, haz adivinado el numero")
    } else if (numero_ingresado > numero_incognita) {
        console.log("El numero ingresado es mayor, haz un tercer intento")
        numero_ingresado = parseInt(prompt("3er intento ingresa un numero"))
        if (numero_ingresado === numero_incognita) {
            console.log("Ganaste, haz adivinado el numero")
        } else if (numero_ingresado > numero_incognita) {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        } else {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        }
    } else {
        console.log("El numero ingresado es menor, haz un tercer intento")
        numero_ingresado = parseInt(prompt("3er intento ingresa un numero"))
        if (numero_ingresado === numero_incognita) {
            console.log("Ganaste, haz adivinado el numero")
        } else if (numero_ingresado > numero_incognita) {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        } else {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        }
    }
} else {
    console.log("El numero ingresado es menor, haz un segundo intento")
    numero_ingresado = parseInt(prompt("2do intento ingresa un numero"))
    if (numero_ingresado === numero_incognita) {
        console.log("Ganaste, haz adivinado el numero")
    } else if (numero_ingresado > numero_incognita) {
        console.log("El numero ingresado es mayor, haz un tercer intento")
        numero_ingresado = parseInt(prompt("3er intento ingresa un numero"))
        if (numero_ingresado === numero_incognita) {
            console.log("Ganaste, haz adivinado el numero")
        } else if (numero_ingresado > numero_incognita) {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        } else {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        }
    } else {
        console.log("El numero ingresado es menor, haz un tercer intento")
        numero_ingresado = parseInt(prompt("3er intento ingresa un numero"))
        if (numero_ingresado === numero_incognita) {
            console.log("Ganaste, haz adivinado el numero")
        } else if (numero_ingresado > numero_incognita) {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        } else {
            console.log("Lo siento fallaste tus 3 intentos perdiste")
        }
    }
}

//ejercicio_9
console.log("Ejercicio 9")
let mi_edad = parseInt(prompt("Ingresa tu edad Jheesfri"))
if (mi_edad <= 12) {
    console.log("Eres un infante")
} else if (mi_edad >= 13 && mi_edad <= 18) {
    console.log("Eres adolecentes")
} else if (mi_edad >= 19 && mi_edad <= 45) {
    console.log("Eres un mayor joven")
} else if (mi_edad >= 46 && mi_edad <= 99) {
    console.log("Eres un anciano")
} else {
    alert("¿en realidad tinees esa edad?")
}

//ejercicio_10
console.log("Ejercicio 10")
let jugador_1 = prompt("el jugador 1 ingresa (´piedra´, ´papel´ o ´tijera´)")
let jugador_2 = prompt("el jugador 2 ingresa (´piedra´, ´papel´ o ´tijera´)")

if (jugador_1 == "piedra" && jugador_2 == "piedra") {
    console.log("Empataron")
} else if (jugador_1 == "piedra" && jugador_2 == "papel") {
    console.log("el jugador 2 a ganado")
} else if (jugador_1 == "piedra" && jugador_2 == "tijera") {
    console.log("el jugador 1 a ganado")
} else if (jugador_1 == "papel" && jugador_2 == "piedra") {
    console.log("el jugador 1 a ganado")
} else if (jugador_1 == "tijera" && jugador_2 == "piedra") {
    console.log("el jugador 2 a ganado")
} else if (jugador_1 == "papel" && jugador_2 == "tijera") {
    console.log("el jugador 2 a ganado")
} else if (jugador_1 == "papel" && jugador_2 == "papel") {
    console.log("Empataron")
} else if (jugador_1 == "tijera" && jugador_2 == "papel") {
    console.log("el jugador 1 a ganado")
} else if (jugador_1 == "tijera" && jugador_2 == "tijera") {
    console.log("Empataron")
} else {
    console.log("uno de los jugadores a echo trampa")
}


//ejercicio_11

console.log("Ejercicio 11")
let color_user = prompt("Ingrese un color")
switch (color_user) {
    case "blanco":
    case "negro":
        console.log("falta de color");
        break;
    case "verde":
        console.log("el color de la naturaleza");
        break;
    case "azul":
        console.log("el color del agua ");
        break;
    case "amarillo":
        console.log("el color del sol");
        break;
    case "rojo":
        console.log("el color del fuego");
        break;
    case "marron":
        console.log("el color de la tierra");
        break;
    default:
        console.log("Excelente eleccion no lo teniamos pensado");
        break;
}

// ejercicio_12

console.log("Ejercicio 12")
let valor_1 = parseInt(prompt("Ingresa el primer numero"))
let operando = prompt("Ingresa el operando ´* si vas a multiplicar´, ´/ si vas a dividir´, ´+ si vas a sumar´, - si vas a restar")
let valor_2 = parseInt(prompt("Ingresa el segundo numero"))
let suma = valor_1 + valor_2
let resta = valor_1 - valor_2
let multiplicacion = valor_1 * valor_2
let division = valor_1 / valor_2
if (operando === "+") {
    alert("el resultado de la suma es: " + suma)
} else if (operando === "-") {
    alert("el resultado de la resta es: " + resta)
} else if (operando === "*") {
    alert("el resultado de la multiplicacion es: " + multiplicacion)
} else if (valor_1 === 0 || valor_2 === 0) {
    alert("ERROR el divisor ingresado es ¨0¨")
} else {
    alert("el resultado de la division es: " + division)
}

//ejercicio_13

console.log("Ejercicio 13")
let nombre_user = prompt("Ingresa tu nombre")
let apellidos_user = prompt("Ingresa tus apellidos")
let numero_user = prompt("Ingresa tu nº de indentidad")
let nacionalidad_user = prompt("Ingresa tu nacinoalidad")
let lugar_nacionmiento_user = prompt("Ingresa tu lugar de nacimiento")
let altura_user = prompt("Ingresa tu estatura")
let genero_user = prompt("Tu genero es: ¨Masculino¨ o ¨Femenino¨")
let fecha_nacinmiento_user = prompt("Ingresa la fecha de nacimiento en este formato ¨DD/MM/AAAA¨")
console.log(nombre_user, apellidos_user, numero_user, nacionalidad_user, lugar_nacionmiento_user, altura_user, genero_user, fecha_nacinmiento_user)
let confirmacion_datos = prompt("¿Los datos ingresado son correctos? escribe ¨si¨ o ¨no¨")
if (confirmacion_datos === "si") {
    let dni = {
        nombre: nombre_user,
        apellidos: apellidos_user,
        numeroid: numero_user,
        nacionalidad: nacionalidad_user,
        nacimeinto: lugar_nacionmiento_user,
        altura: altura_user,
        genero: genero_user,
        fecha_n: fecha_nacinmiento_user
    }
    alert("Registro exitoso")
    console.table(dni)
} else {
    alert("Vuelva a intentarlo en 1 mes")
}