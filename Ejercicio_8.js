let creaMatriz3x3 = function() {
    var matriz = new Array(3);
    for (let k = 0; k < 3; k++) matriz[k] = new Array(3);
    return matriz    
}

let llenarMatriz3x3 = function(matriz) {
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);  
        }
    }
    return llenarMatriz3x3;
}

let E8 = function(a, b) {
    
}

E8(llenarMatriz3x3(creaMatriz3x3()), llenarMatriz3x3(creaMatriz3x3()));