let E4 = function(a) {
    if (a.length%2 == 0) {
        while(a.length != 0){
        sum = a[0] + a[a.length - 1];
        console.log(sum);
        a = a.slice(0, 0).concat(a.slice(1));
        a = a.slice(0, a.length - 1).concat(a.slice(a.length));
        }
    }
    while(a.length != 1){
        sum = a[0] + a[a.length - 1];
        console.log(sum);
        a = a.slice(0, 0).concat(a.slice(1));
        a = a.slice(0, a.length - 1).concat(a.slice(a.length)); 
    }
    console.log(a[0]*2);
}

E4([1, 2, 3, 2, 1, 5, 7]);