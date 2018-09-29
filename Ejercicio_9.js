let crearA = function() {
    var array = new Array(20);
    for(let i = 0; i < 20; i++) array[i] = Math.floor(Math.random() * 21);
    E9(array);
}

let E9 = function(a) {
    azar = prompt('Podras atinar el numero?');
    cont = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == azar) {
            console.log('Ganaste!'); 
            break;
        }
        cont++;
    }
    if (cont == 20) console.log('Perdiste!!!'); 
}

console.log(crearA());