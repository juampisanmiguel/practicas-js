//FIZZBUZZ
for (let i = 1; i <= 100; i ++){
    if (i % 5==0 && i % 3==0) {
        console.log("FizzBuzz")
    }
    else if (i % 3==0){
         console.log("Fizz")
        }
    else if (i % 5==0){
         console.log("Buzz")
        }
    else {
        console.log (i)
    }
}

//Practica clase 2

// let nombre = prompt("Ingresa tu nombre")
// let edad = parseInt(prompt("Ingresa tu edad"));

// if (edad >= 18 && edad < 21){
//     alert ("Bienvenido " + nombre + " podes ingresar al bar pero no tomar alcohol")
// } else if  (edad >= 21){
//     alert ("Bienvenido al bar " + nombre + " esperamos que disfrutes un buen trago")
// } else {
//     alert ("Sos menor de edad, no podes ingresar")
// }


//Mostrar tabla de multiplicar de un numero

let number = parseInt(prompt("Ingresa un numero del 1 al 10:"))
for (let i=1; i<=10; i++){
    console.log(number*i)
}

//-----------------HASTA ACA PUSHEE EN GIT-----------------------//

//Numero Par o impar (sacado de pledu)

let i = parseInt(prompt("Ingresa un numero"))
if (i%2===0){
    console.log("Tu numero es par")
} else {
    console.log("Tu numero es impar")
}


//Adivina el numero (sacado de pledu)
    let numeroSecreto = 14
    let numeroUsuario = parseInt(prompt("Cual es el numero secreto? (recorda que es del 1 al 20)"))

    if (numeroUsuario<numeroSecreto){
        console.log("El numero elegido es mas chico que el secreto")
    } else if (numeroUsuario>numeroSecreto){
        console.log("El numero elegido es mas grande que el secreto")
    } else {
        console.log("Felicitaciones! Adivinaste el numero")
    }


//¿Puedo jubilarme? (sacado de pledu)

let genero = prompt("Sos hombre o mujer?").toLowerCase()
let edad = parseInt(prompt("Que edad tenes?"))

if ((genero==="hombre" && edad >= 65) || (genero==="mujer" && edad >= 60)){
    alert ("Te podes jubilar")
} else {
    alert("Todavia no estas en edad de jubilarte")
}

//------------------EJERCICIOS WHILE------------------

//Mi primer bot (sacado de pledu)

let mesa = 1
let clientes = 20

while (mesa <= clientes){
    console.log("Bienvenidx! Su mesa es la", mesa)
    mesa++
}

//Par o impar

let n = parseInt(prompt("Ingresa un numero"))
while (n>0){
if (n%2===0){
    console.log("El numero elegido es par")
} else if (n%2===1){
    console.log("El numero elegido es impar")
} n=parseInt(prompt("Volve a elegir otro numero"))
 }
 console.log("El numero elegido es incorrecto")

 //contarDeA_n (sacado de pledu)

 function contarDeA_n(contar_de_a, contar_hasta){
    let i = 1 
    while (i<=contar_hasta){
      console.log(i)
      i+=contar_de_a
    }
  }
  
  contarDeA_n(3,50)

//Factorial (En este ejercicio, deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.)
const factorial = (numero) => {
    let contador = 1
    let resultado = 1
    if (numero===1 || numero===0){
        return resultado
    } else {
        while (contador<=numero){
            resultado*=contador
            contador++
        } return resultado
    }
}