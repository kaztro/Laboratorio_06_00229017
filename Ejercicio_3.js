let E3 = function(a) {
    aux = [];
    i = 1;
    console.log('List of types:');
    for(let x of a) {
        console.log(i+'-'+x+' is '+typeof x);
        i++;
    } 
}

E3([1, 2.55, true, [25]]);