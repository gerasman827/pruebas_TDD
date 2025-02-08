export class IndiceMasaCorporal {
    altura = 0; //medida en centimetros
    peso = 0; // medida en gramos

    constructor(peso, altura) {
        this.altura = altura;
        this.peso = peso;
    }

    getPeso(){
        return this.peso;
    }

    getAltura() {
        return this.altura;
    }

    /**
     * Calcula el índice de masa corporal de una persona
     * @param {*} peso peso en gramso de la persona
     * @param {*} altura altura de la persona en centimetros
     * @returns <resultado> valor del indice del masa corporal
     */
    calcularIMC(p, a) {
        let resultado = null;

        if (p > 0 && a > 0) {
            const peso = this.convertirPeso(p);
            const altura = this.convertirAltura(a);

            if (peso > 0 && altura > 0) {
                resultado = (peso / (altura * altura));
                return resultado;
            } else {
                return null
            }
        } else {
            return null
        }
    }

    /**
     * convierte el peso de gramos a kilogramos
     * @param {*} peso el peso de la persona en gramos
     * @returns el peso en kilogramos
     */
    convertirPeso(peso) {
        return peso / 1000;
    }

    /**
     * convierte la altura de centimetros a metros
     * @param {*} altura en centimetros
     * @returns al altura en metros
     */
    convertirAltura(altura) {
        return altura / 100;
    }

    mostrarMensaje(codigo) {
        if (codigo == 1) {
            return "La conversión de los valores de peso o altura no fue exitosa"
        }

        if (codigo == 2) {
            return "EL valor de peso debe ser mayor a 2500 gramos y la altura debe ser mayor a 50 centímetros";
        }
    }

}