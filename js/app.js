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
 cargarCombo(propiedad, datosPropiedad)
 cargarCombo(ubicacion, datosUbicacion)
 
 const datosCompletos = ()=> {
     if (propiedad.value !== "..." && ubicacion.value !== "..." && parseInt(metros2.value) && metros2.value > 20 && metros2.value <= 1500 ){
         return true   //REVISAR PARA ENTREGA ADICIONAL
     } else {
         return false
     }
 }
 
 const cotizo = () => {
     const valorCotizado = new Cotizador(metros2.value, propiedad.value, ubicacion.value, costoM2)
         importe.innerText = valorCotizado.cotizar()
         btnEnviar.classList.remove("ocultar")
 }
 
 
 
 const realizarCotizacion = () => datosCompletos() ? cotizo() : alert ("⚠️ Te quedaron datos sin completar!")
 
 
 
 const enviarPorEmail = () =>{
     const cotizacion = {
         fechaCotizacion: new Date().toLocaleString(),
         propiedad: propiedad[propiedad.selectedIndex].text,
         ubicacion: ubicacion[ubicacion.selectedIndex].text,
         metrosCuadrados: metros2.value,
         tasacion: importe.innerText
     }
     localStorage.setItem("Ultima cotizacion", JSON.stringify(cotizacion))
     alert("Tasacion enviada, muchas gracias por confiar en nosotros")
     btnEnviar.classList.add("ocultar")
 }
 
 btnCotizar.addEventListener("click", realizarCotizacion)
 btnEnviar.addEventListener("click", enviarPorEmail)