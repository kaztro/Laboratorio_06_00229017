let E1 = function(number, array) {
    auxN = 0;
    for (let i of array) (i == number) ? auxN += 1 : auxN += 0;
    if (auxN != 0) return auxN;
    console.log('El numero ' + number + ' no esta dentro del arreglo');
}
//Numero: 5, Aparece 3 veces en el arreglo
console.log(E1(5, [5,8,24,5,9,25,5]));
//Numero: 5, No esta en el arreglo
console.log(E1(5, [0,8,24,6,9,25,8]));