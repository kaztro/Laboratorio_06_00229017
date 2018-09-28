let E6 = function(s) {
    r = '';
    for (let x of s) {
        switch(x) {
            case 0:
            r.push(x);
            break;
            case 1:
            r.push(x);
            break;
            case 2:
            r.push(x);
            break;
            case 3:
            r.push(x);
            break;
            case 4:
            r.push(x);
            break;
            case 5:
            r.push(x);
            break;
            case 6:
            r.push(x);
            break;
            case 7:
            r.push(x);
            break;
            case 8:
            r.push(x);
            break;
            case 9:
            r.push(x);
            break;
        }
    }
    aux = r.split('');
    j = aux.reverse();
    z = j.join('');
    return z;
}

console.log(E6('0123456789'));