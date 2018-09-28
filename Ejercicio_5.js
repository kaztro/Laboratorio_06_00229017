let E5 = function(a, t) {
    finalR = [];
    for (let x of a) {
        (typeof x == t) ? finalR.push(x) : ""; 
    }
    return finalR;
}

console.log(E5([1, 2.55, true, [25], 25, false, false, ['true'], [5, 65, 7], 2], 'boolean'));