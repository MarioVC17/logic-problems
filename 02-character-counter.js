/**
 * Problema #2 - cantidad de veces que se repite un caracter 
 * Cree una función que reciba como parámetros de entrada: una cadena de texto y un caracter; y 
 * retorne la cantidad de veces que dicho caracter se repite dentro de la cadena de texto. 
 */

function characterCounter(text, char) {
    // Convierto ambas cadenas en letras minusculas
    text = text.toLowerCase();
    char = char.toLowerCase();
    // Inicializo el contador
    let count = 0;
    // Separo la cadena en un array que me lista los caractares
    const separateText = text.split("");
    // Recorro cada caracter de la palabra para así validarla con el caracter
    separateText.forEach(letter => {
        if(letter === char) count++
    });
    // Retorno la cantidad de coindicencias
    return count;
}

// console.log(characterCounter('', ''));