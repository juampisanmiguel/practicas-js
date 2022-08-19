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

let nombre = prompt("Ingresa tu nombre")
let edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18 && edad < 21){
    alert ("Bienvenido " + nombre + " podes ingresar al bar pero no tomar alcohol")
} else if  (edad >= 21){
    alert ("Bienvenido al bar " + nombre + " esperamos que disfrutes un buen trago")
} else {
    alert ("Sos menor de edad, no podes ingresar")
}


//Mostrar tabla de multiplicar de un numero

let number = parseInt(prompt("Ingresa un numero del 1 al 10:"))
for (let i=1; i<=10; i++){
    console.log(number*i)
}