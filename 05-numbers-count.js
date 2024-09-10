/**
 * Problema #5 - contar números en una cadena
 * Cree una función que reciba como parámetro de entrada una cadena de texto y retorne la 
 * cantidad de números en ella.
 */

function countNumbers(text) {
    // Separo la cadena en un array que me lista los caractares
    const separateText = text.split("");
    // Filtro los caracteres que coincidan con '0123456789'
    const listNumbers = separateText.filter((char) => '0123456789'.includes(char));
    // Retorno la cantidad de números de la cadena
    return listNumbers.length;
}

// console.log(countNumbers('September 09 of 2024'));