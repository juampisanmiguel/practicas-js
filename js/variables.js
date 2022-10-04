//CONECTANDO CON EL DOM
const propiedad = document.querySelector("#propiedad")
const ubicacion = document.querySelector("#ubicacion")
const metros2 = document.querySelector("#metros2")
const btnCotizar = document.querySelector("button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")

//BASE DE DATOS
const datosPropiedad = [{tipo: "Casa", factor: 1.15},
                        {tipo: "Departamento", factor: 1.08},
                        {tipo: "Quinta", factor: 1.19},
                        {tipo: "Barrio cerrado", factor: 1.28},
                        {tipo: "Oficina", factor: 1.21},]


const datosUbicacion = [{tipo: "Centro", factor: 1.22},
                        {tipo: "Zona quintas", factor: 1.15},
                        {tipo: "Afueras de la ciudad", factor: 1.06},
                        {tipo: "Costa Verde", factor: 1.35},
]


 const costoM2 = 630