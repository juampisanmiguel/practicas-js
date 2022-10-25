//CONECTANDO CON EL DOM
const prenda = document.querySelector("#prenda")
const marca = document.querySelector("#marca")
const ingreso = document.querySelector("#ingreso")
const btnCotizar = document.querySelector("button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")

//BASE DE DATOS
const datosPrenda = [{tipo: "Remera", factor: 1.08},
                        {tipo: "Buzo", factor: 1.15},
                        {tipo: "Pantalon", factor: 1.10},
                        {tipo: "Campera", factor: 1.28},
                        {tipo: "Accesorio", factor: 1.20},]


const datosMarca = [{tipo: "Nike", factor: 1.22},
                        {tipo: "Adidas", factor: 1.15},
                        {tipo: "Tommy Hilfiger", factor: 1.35},
                        {tipo: "Vans", factor: 1.06},
]


 const costoFijo = 1.15