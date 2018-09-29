let E6 = function(string) {
    nString = '';
    for (let x of string) {
        switch (x) {
            case '0':
            nString += 'm';
            break;
            case '1':
            nString += 'u';
            break;
            case '2':
            nString += 'r';
            break;
            case '3':
            nString += 'c';
            break;
            case '4':
            nString += 'i';
            break;
            case '5':
            nString += 'e';
            break;
            case '6':
            nString += 'l';
            break;
            case '7':
            nString += 'a';
            break;
            case '8':
            nString += 'g';
            break;
            case '9':
            nString += 'o';
            break;
            default:
            console.log('Es probable que no hayas ingresado una cadena...');
        }
    }
    return nString;
}
//prueba 1
console.log(E6('0123456789'));
//prueba 2
console.log(E6('2131243215432543252353523523'));