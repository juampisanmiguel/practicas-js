class Cotizador {
    constructor(m2, factorPropiedad, factorUbicacion, costoFijo){
        this.m2 = parseInt(m2)
        this.factorPr = parseFloat(factorPropiedad)
        this.factorUb = parseFloat(factorUbicacion)
        this.costoFijo = parseFloat(costoFijo)
    }
    cotizar(){
        let resultado = (this.m2 * this.factorPr * this.factorUb * this.costoFijo)
        return resultado.toFixed(2)
    }
}