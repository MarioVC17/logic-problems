/**
 * Problema #6 - cantidad de veces que se repiten las palabras de un párrafo 
 * Cree una función que reciba como parámetro de entrada una cadena de texto y retorne alguna 
 * estructura de datos que muestre las palabras y la cantidad de veces que se repite cada una en la 
 * cadena. 
 */

function countParagraphWord(text) {
    // Convierto la cadena en minúsculas y eliminó los signos de puntuación
    text = text.toLowerCase().replace(/[^\w\s]/g, '');
    // Separo la cadena en un array que me lista las palabras
    const words = text.split(/\s+/);
    // Creo un objeto dónde guardaré la información
    const listWords = {};
    // Recorro y cuento la cantidad de palabras
    words.forEach(word => {
        (listWords[word]) ? listWords[word]++ : listWords[word] = 1;
    });
    // Retorno la información organizada en el objeto
    return listWords;
}

// console.log(countParagraphWord(''));