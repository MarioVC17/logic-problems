/**
 * Problema #3 - distancia de haming 
 * Cree una función que reciba como parámetros de entrada dos cadenas de caracteres del mismo 
 * tamaño y retorne la cantidad de caracteres diferentes entre ellas.  
 */

function hamingDistance(text1, text2) {
    // Convierto ambas cadenas en letras minusculas
    text1 = text1.toLowerCase();
    text2 = text2.toLowerCase();
    // Valido si ambas cadenas tienen la misma cantidad de caracteres
    if (text1.length !== text2.length) throw new Error('Las cadenas no tienen la misma cantidad de caractares.');
    // Inicializo el contador
    let count = 0;
    // Recorro cada caracter de las cadenas para así validarlas
    for(let i = 0; i < text1.length; i++) {
        if(text1[i] !== text2[i]) count++;
    }
    // Retorno la cantidad de de caracteres diferentes encontrados
    return count;
}

// console.log(hamingDistance('', ''))