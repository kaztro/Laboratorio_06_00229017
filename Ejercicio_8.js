//Crea la estructura de la matriz
let creaMatriznxn = function(orden) {
    var matriz = new Array(orden);
    for (let k = 0; k < orden; k++) matriz[k] = new Array(orden);
    return matriz;    
}

//Llena la matriz con numeros del 0 al 9 al azar
let llenarMatriznxn = function(matriz, orden) {
    for (let i = 0; i < orden; i++) {
        for(let j = 0; j < orden; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);  
        }
    }
    return matriz;
}

let E8 = function(a, b, ordenA, ordenB) {
    if (ordenA != ordenB) {
        return 'Esto no puede operarse...'
    }
    var orden = ordenA;
        c = creaMatriznxn(orden);
        for (let i = 0; i < orden; i++) {
            for(let j = 0; j < orden; j++) {
               c[i][j] = a[i][j] + b[i][j];
            }
        }
    return c;
}
//Primera matriz 'A'; orden: 4:
ordenA = 4;
A = llenarMatriznxn(creaMatriznxn(ordenA), ordenA);
console.log(A);
//Primera matriz 'B'; orden: 4:
ordenB = 4;
B = llenarMatriznxn(creaMatriznxn(ordenB), ordenB);
console.log(B);
//Suma de funciones:
console.log('A+B=C; C= ');
console.log(E8(A, B, ordenA, ordenB));