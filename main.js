//Defino mi clase constructora
class producto {
    constructor (nombre, categoria, marca, precio, estado, disponibilidad){
        this.nombre=nombre;
        this.categoria=categoria;
        this.marca=marca;
        this.precio=precio;
        this.estado=estado;
        this.disponibilidad=disponibilidad;
    }
    //Metodo para habilitar stock
    habilitar(){
        let error="Producto disponible"
        if(this.disponibilidad!=true){
            this.disponibilidad=true
        } else {
            console.log(error)
        }
    }

    //Metodo para deshabilitar stock
    deshabilitar(){
        let error="Producto no disponible"
        if(this.disponibilidad!=false){
            this.disponibilidad=false
        } else {
            console.log(error)
        }
    }
}


//Creo el array
const productosVintage = []


//Defino mis productos
let producto1= new producto("Remera pocket tee", "Remeras", "Nike", 7500, "Semi-nuevo", true)
let producto2= new producto("Remera three stripes", "Remeras", "Adidas", 6200, "Nuevo", true)
let producto3= new producto("Buzo anorak", "Buzos", "Undefined", 12000, "Usado", false)
let producto4= new producto("Buzo batik", "Buzos", "Roberto Sanchez", 17500, "Nuevo", true)
let producto5= new producto("Campera big logo", "Camperas", "Nike", 13100, "Usado", false)
let producto6= new producto("Parka polar", "Camperas", "John Cook", 27500, "Nuevo", true)
let producto7= new producto("Vans old skool", "Zapatillas", "Vans", 17500, "Semi-nuevo", true)
let producto8= new producto("Air max 97", "Zapatillas", "Nike", 12800, "Usado", true)
let producto9= new producto("Gorra ski", "Accesorios", "Polo", 5500, "Usado", false)
let producto10= new producto("Riñonera bicolor", "Accesorios", "Bensimon", 11100, "Nuevo", true)
let producto11= new producto("Cargo militar", "Pantalones", "Cacharel", 12560, "Usado", true)
let producto12= new producto("Jean boyfriend", "Pantalones", "Bensimon", 10000, "Nuevo", false)


//Pusheo los productos al array
productosVintage.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12)


//Muestro los productos
console.table(productosVintage);


//Llamo al metodo para habilitar stock en el producto 3
producto3.habilitar()


//Llamo al metodo para deshabilitar stock en el producto 1
producto1.deshabilitar()


//Aplico filter para imprimir los productos que se encuentran disponibles
let stockDisponible = productosVintage.filter(producto=>producto.disponibilidad==true)
//Muestro todos los productos que cuento con stock en mi sitio
console.table(stockDisponible)

//Aplico filtro para que me imprima los productos con un precio mayor a 12.000
let precioMayor12000 = productosVintage.filter(producto=>producto.precio>=12000)
//Muestro estos productos
console.table(precioMayor12000)


//Creo un map para incrementar en un 21% el precio de mis productos
let precioConIva = productosVintage.map((producto)=> {
    return {
        nombre: producto.nombre,
        precio: producto.precio*1.21
    }
})
//Muestro los productos con IVA
console.table(precioConIva)


//Creo una funcion para agregar productos

function agregarProducto(){
    let nombreNuevoProducto=prompt("Ingresa el nombre del nuevo producto:")
    let categoriaNuevoProducto=prompt("A que categoria pertenece?")
    let marcaNuevoProducto=prompt("Ingresa la marca:")
    let precioNuevoProducto=Number(prompt("Ingresa el precio"))
    let estadoNuevoProducto=prompt("Ingresa el estado en el que se encuentra")
    let disponibilidadNuevoProducto=confirm("Ingresa si esta disponible")

    let productoNuevo = new producto(nombreNuevoProducto, categoriaNuevoProducto, marcaNuevoProducto, precioNuevoProducto, estadoNuevoProducto, disponibilidadNuevoProducto)

    productosVintage.push(productoNuevo)
    console.table(productosVintage)
}

//Creo un ciclo para agregar cuantos productos yo desee

let cargarOtroProducto = confirm("Desea agregar un producto?")
while (cargarOtroProducto!=false){
    agregarProducto()
    cargarOtroProducto = confirm("Queres seguir agregando productos?")
}