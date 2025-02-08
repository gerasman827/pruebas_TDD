const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { Interprete } = require('./Interprete');

let interprete;
let resultadoIMC;
let categoria;

Given('que el usuario ingresa un peso de {string} kg', function (peso) {
    const pesoEnGramos = parseFloat(peso) * 1000;
    if (!interprete) {
        interprete = new Interprete(pesoEnGramos, 0); // La altura se asignará después
    } else {
        interprete.calculadora.peso = pesoEnGramos;
    }
});

Given('una altura de {string} metros', function (altura) {
    const alturaEnCm = parseFloat(altura) * 100;
    if (interprete) {
        interprete.calculadora.altura = alturaEnCm;
    }
});

When('se calcula el IMC', function () {
    resultadoIMC = interprete.interpretacionCorporal();
    categoria = resultadoIMC ? resultadoIMC[1] : null;
});

Then('el resultado del IMC debe ser {string}', function (expectedIMC) {
    const actualIMC = resultadoIMC ? resultadoIMC[0].toFixed(2) : null;
    expect(actualIMC).to.equal(expectedIMC);
});

Then('se muestra la categoría {string}', function (expectedCategoria) {
    expect(categoria).to.equal(expectedCategoria);
});

Then('se muestra un mensaje de error {string}', function (expectedErrorMessage) {
    expect(resultadoIMC).to.be.null;
    expect(interprete.calculadora.mostrarMensaje(2)).to.equal(expectedErrorMessage);
});
