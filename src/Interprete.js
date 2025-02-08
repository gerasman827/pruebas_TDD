import { IndiceMasaCorporal } from './IndiceMasaCorporal.js';

export class Interprete {

    calculadora;
    pesoInferior = 18.5;
    pesoNormal = 24.9;
    pesoSuperior = 29.9;
    obesidad = 30;


    constructor(peso, altura) {
        this.calculadora = new IndiceMasaCorporal(peso, altura);
    }

    
    interpretacionCorporal() {
        const peso = this.calculadora.getPeso();
        const altura = this.calculadora.getAltura();
        if (peso && altura) {
            const resultado = this.calculadora.calcularIMC(peso, altura);
            if (resultado > 0) {
                const resul = [];
                const indicador = this.tablaResultado(resultado)
                
                return indicador
            } else {
                return null;
            }
        }
    }

    tablaResultado(resultado) {
        if (resultado < this.pesoInferior) {
            return "peso inferior al normal";
        } else {
            if (resultado > this.pesoInferior && resultado <= this.pesoNormal) {
                return "Peso normal";
            } else {
                if (resultado >= this.pesoNormal && resultado <= this.pesoSuperior) {
                    return "Peso superior";
                } else {
                    if (resultado > this.pesoSuperior) {
                        return "Obsesidad";
                    } else {
                        return null;
                    }
                }
            }
        }
    }
}
