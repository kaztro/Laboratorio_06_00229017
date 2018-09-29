let sumatoria = function(datos) {
    result = 0;
    for (let i of datos)  result += i;
    return result;
}

let E7 = function(valores) {
    x = (1/valores.length) * sumatoria(valores);
    for (let xi of valores) {
        dx = Math.sqrt((1/(valores.length - 1) * sumatoria([Math.pow(xi-x, 2)])));
    }
    console.log('X='+x.toFixed(2)+'±'+dx.toFixed(2));
}

E7([14.4, 14.5, 14.4, 14.3, 14.6, 14.5]);
