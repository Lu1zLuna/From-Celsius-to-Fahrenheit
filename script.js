var valorEmCelsiusTexto = prompt("Qual a temperatura em graus Celsius que você deseja converter para Fahrenheit?")
var valorEmCelsiusNumero = parseFloat(valorEmCelsiusTexto)

var valorEmFahrenheit = 1.8 * valorEmCelsiusNumero + 32
var valorEmFahrenheitNumero = parseInt(valorEmFahrenheit)
    
document.write("<h1>" + "........................ " + valorEmCelsiusNumero + "ºC equivalem a " + valorEmFahrenheitNumero + "F" + " ........................" +"</h1>")
// <- isso é um comentário.

//Revisão:
//variável -> var int, float, string
//funções: alert, parseInt, ParseFloat, prompt
//Operações: + -> somar, * -> multiplicar