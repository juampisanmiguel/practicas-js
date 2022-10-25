class Cotizador {
    constructor(cF, factorPrenda, factorMarca, costoFijo){
        this.cF = parseInt(cF)
        this.factorPr = parseFloat(factorPrenda)
        this.factorMa = parseFloat(factorMarca)
        this.costoFijo = parseFloat(costoFijo)
    }
    cotizar(){
        let resultado = (this.cF * this.factorPr * this.factorMa * this.costoFijo)
        return resultado.toFixed(2)
    }
}