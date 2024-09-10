/**
 * Problema #1 - invertir cadena
 * Cree una función que reciba como parámetro una cadena de caracteres y retorne dicha cadena invertida. 
 */

function reverseChain(text) {
    // Separo la cadena en un array que me lista los caractares
    const separateText = text.split("");
    // Usando el metodo 'reverse' invierto el orden de los caracteres
    const reverseInformation = separateText.reverse();
    // Por último junto y retorno los caracteres en una cadena de texto
    return reverseInformation.join("");
}

// console.log(reverseChain('Hello'));