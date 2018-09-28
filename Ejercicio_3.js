let E3 = function(a) {
    i = 1;
    number = 0;
    bool = 0;
    object = 0;
    string = 0;
    console.log('List of types:');
    for(let x of a) {
        console.log(i+'-'+x+' is '+typeof x);
        if (typeof x == 'number') number++;
        if (typeof x == 'boolean') bool++;
        if (typeof x == 'object') object++;
        if (typeof x == 'string') string++;
        i++;
    }
    console.log('Numbers in array: '+number);
    console.log('Booleans in array: '+bool);
    console.log('Objects in array: '+object);
    console.log('Strings in array: '+string); 
}

E3([1, 2.55, true, [25], 25, false, false, ['true'], [5, 65, 7], 2]);