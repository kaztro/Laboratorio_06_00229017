let E2 = function(a) {
    aux = 0;
    for (i of a) (typeof i != 'a' || typeof i != true) ? aux = aux + i : "";
    return 'La suma es: ' + aux + ' El promedio es: ' + aux/a.length; 
}

console.log(E2([1, 2, 3, 4, 5]));