//ejercicio_1
console.log("-----------------ejercicio 1--------------")
const numeross = [1, 2, 3, 4, 5];
let numeros_dobles = numeross.map(num => num * 2)
console.log(numeross)
console.log(numeros_dobles)

//ejercicio_2
console.log("-----------------ejercicio 2--------------")
const palabras = ['hola', 'mundo', 'javascript']
let palabras_mayusculas = palabras.map(posicion => posicion.toUpperCase())
console.log(palabras_mayusculas)

//ejercicio_3
console.log("-----------------ejercicio 3--------------")
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 40 }
]
let edad_personas = personas.map(persona => persona.edad)
console.log(edad_personas)

//ejercicio_4
console.log("-----------------ejercicio 4--------------")
const numeros = [1, 2, 3];
const letras = ['a', 'b', 'c'];
let combinacion = numeros.map(num => num + letras)
console.log(combinacion)
