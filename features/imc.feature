
Feature:
Scenario: Calcular el IMC con peso y altura válidos
  Given que el usuario ingresa un peso de "70" kg
  And una altura de "1.75" metros
  When se calcula el IMC
  Then el resultado del IMC debe ser "22.86"
  And se muestra la categoría "Peso normal"

Scenario: Intentar calcular el IMC con datos no válidos
  Given que el usuario ingresa un peso de "-50" kg
  And una altura de "0" metros
  When se intenta calcular el IMC
  Then se muestra un mensaje de error "Datos no válidos. Verifique peso y altura."

Scenario: Calcular el IMC y mostrar la categoría "Sobrepeso"
  Given que el usuario ingresa un peso de "85" kg
  And una altura de "1.75" metros
  When se calcula el IMC
  Then el resultado del IMC debe ser "27.76"
  And se muestra la categoría "Sobrepeso"

Scenario: Calcular el IMC y mostrar la categoría "Obesidad"
  Given que el usuario ingresa un peso de "95" kg
  And una altura de "1.70" metros
  When se calcula el IMC
  Then el resultado del IMC debe ser "32.87"
  And se muestra la categoría "Obesidad"