/**
 * Problema #4 - cantidad de palabras 
 * Cree una función que reciba como parámetro de entrada una cadena de texto y retorne la 
 * cantidad de palabras en ella. 
 */

function countWords(text) {
    // Retiro los espacios
    text = text.trim();
    // Usando el metodo 'split' divido las cadenas por espacio
    const words = text.split(/\s+/);
    // Por último retorno la cantidad de palabras de la cadena
    return words.length;
}

// console.log(countWords('Hola mundo que tal todo'));