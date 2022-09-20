
const productos = [
    {   
        id: 1,  
        nombre: "Remera pocket tee",
        categoria: "Remeras",
        marca:"Nike",
        precio: 7500,
        disponibilidad: true,
        image:"img/pocket.jpg",
    },
    {   
        id: 2,
        nombre: "Buzo anorak",
        categoria: "Buzos",
        marca: "Burton",
        precio: 12000,
        disponibilidad: false,
        image:"img/anorak.webp",
    },
    {   
        id: 3,
        nombre: "Vans old skool",
        categoria: "Zapatillas",
        marca: "Vans",
        precio: 17500,
        disponibilidad: true,
        image:"img/oldskool.jpg",
    },
    {   
        id: 4,
        nombre: "Cargo militar",
        categoria: "Pantalones",
        marca: "Cacharel",
        precio: 12560,
        disponibilidad: true,
        image:"img/cargo.jpg",
    }
]

const cart = [];

const updateCart=(cart)=>{
    let cartContainer = document.querySelector("#cart");

    let container = document.querySelector("#cartContainer");
    if(container){
        container.parentNode.removeChild(container);
    }

    let div= document.createElement("div");
    div.setAttribute("id", "cartContainer");
    for (const product of cart) {
        div.innerHTML+=`
            <div class="cart.item">
                <h4>Producto: ${product.nombre}</h4>
                <h4>Precio ${product.precio}:</h4> 
                <h4>Cantidad ${product.cantidad}</h4>         
            </div>
        `;
    }
        cartContainer.appendChild(div);
}

const cargarEventos=()=>{
    let buttons = document.querySelectorAll(".button");
    for (const button of buttons) {
        button.addEventListener('click', ()=>{
         const prod= cart.find(product=>product.id == button.id);
         if(prod){
            prod.cantidad++
         }else{
            const prod= cart.find(product=>product.id == button.id);
            if(prod){
                let newProduct={
                    id: prod.id,
                    nombre: prod.nombre,
                    categoria: prod.categoria,
                    marca: prod.marca,
                    precio: prod.precio,
                    disponibilidad: prod.disponibilidad,
                    image:prod.image,
                    camtidad: prod.cantidad,
                }
                cart.push(newProduct);
            }
         }
            updateCart(cart);            
        });
    }
}

//Funcion para cargar mis productos
const cargarProductos=(productos)=>{
    let container = document.querySelector("#container");
    for (const product of productos){
        let div= document.createElement("div");
        div.setAttribute("class", "card");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.nombre}">
            <h3>${product.precio}</h3>
            <h4>${product.nombre}</h4>
            <button class="button" id="${product.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
    }
    cargarEventos()
}


cargarProductos(productos);

