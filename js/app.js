//Funcion para cargar combos
const cargarCombo = (select, array)=> {
   //CORREGIR PARA ERNTREGA EXTRA
   if(array.length > 0){
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        });
   } else {
    console.error("No existen elementos en el array")
   }
}
cargarCombo(prenda, datosPrenda)
cargarCombo(marca, datosMarca)

const datosCompletos = ()=> {
    if (prenda.value !== "..." && marca.value !== "..." && parseInt(ingreso.value) && ingreso.value > 20){
        return true   //REVISAR PARA ENTREGA ADICIONAL
    } else {
        return false
    }
}

const cotizo = () => {
    const valorCotizado = new Cotizador(ingreso.value, prenda.value, marca.value, costoFijo)
        importe.innerText = valorCotizado.cotizar()
        btnEnviar.classList.remove("ocultar")
}



const realizarCotizacion = () => datosCompletos() ? cotizo() : alert ("⚠️ Te quedaron datos sin completar!")



const enviarPorEmail = () =>{
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        prenda: prenda[prenda.selectedIndex].text,
        marca: marca[marca.selectedIndex].text,
        metrosCuadrados: ingreso.value,
        tasacion: importe.innerText
    }
    localStorage.setItem("Ultima cotizacion", JSON.stringify(cotizacion))
    alert("Cotizacion de prenda realizada, gracias por elegirnos")
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)