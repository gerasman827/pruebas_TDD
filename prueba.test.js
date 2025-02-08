import {Interprete} from './src/Interprete'



describe('prueba', () => {
    let interprete;
    let resultado;
    beforeEach(() => {
        interprete = new Interprete(80000,170);
        resultado = interprete.interpretacionCorporal();
        resultado
    });

    test('Debería calcular el IMC Superior', () => {
        expect(resultado).toBe('Peso superior')
    });


    test('Debería calcular que la persona es obesa ', () => {
        expect(resultado).toBe('Peso superior')
    })

    test('Debería calcular el IMC y devolver un valor numérico entero mayor a 0', () => {
        expect(Number.isInteger(resultado)).toBe(false);
        expect(resultado).toBe('Peso superior');
    })
    
})

