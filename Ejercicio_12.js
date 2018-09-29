let menu = function() {
    console.log('1.Ingresar Persona');
    console.log('2.Buscar Persona');
    console.log('3.Modificar Persona');
    console.log('4.Eliminar Persona');
    console.log('5.Mostrar todas las Personas');
    console.log('6.Salir'); 
}

let validarMenu = function () {
    var op = 0;
    menu();
    op = prompt('Ingresa una de las opciones:');
    if (op != 1 && op != 2 && op != 3 && op != 4 && op != 5 && op!= 6) validarMenu();
    E12(op);
}
//----------------------INGRESO-----------------------------------------------------
registroPersonas = function (person) {
    personasR.push(person);
    validarMenu();
}

let ingresarP = function () {
    n = prompt('Ingresa el nombre: ');
    a = prompt('Ingresa el apellido: ');
    fn = prompt('Ingresa la FNacimiento: ');
    nt = prompt('Ingresa el NTelefono: ');
    ce = prompt('Ingresa el Correo: ');
    let personaO = {
        Nombre: n,
        Apellido: a,
        'Fecha de Nacimiento': fn,
        'Numero de Telefono': nt,
        'Correo Electronico': ce
    };
    registroPersonas(personaO);
}
//-------------------------------------------------------------------------------------
//----------------------------BuscarPer-------------------------------------------------
let buscar = function () {
    n = prompt('Ingresa el nombre a buscar: ');
    a = prompt('Ingresa el apellido a buscar: ');
    for (let obj of personasR) {
        if (obj.Nombre == n && obj.Apellido == a) console.log(obj);
        else { console.log('No se encontro esa persona'); }
    }
    validarMenu();
}
//-------------------------------------------------------------------------------------
//----------------------------ModificarPer-------------------------------------------------
let modificar = function () {
    n = prompt('Ingresa el nombre a modificar: ');
    a = prompt('Ingresa el apellido a modificar: ');
    for (let i = 0; i < personasR.length; i++) {
        if (personasR[i].Nombre == n && personasR[i].Apellido == a) sustituir(i);
        else { console.log('No se encontro esa persona'); }
    }
}

let sustituir = function (indice) {
    personasR[i].Nombre = prompt('Ingresa el nombre: ');
    personasR[i].Apellido = prompt('Ingresa el apellido: ');
    personasR[i]['Fecha de Nacimiento'] = prompt('Ingresa la FNacimiento: ');
    personasR[i]['Numero de Telefono'] = prompt('Ingresa el NTelefono: ');
    personasR[i]['Correo Electronico'] = prompt('Ingresa el Correo: ');
    validarMenu();
}
//-------------------------------------------------------------------------------------
//----------------------------EliminarPer-------------------------------------------------
let eliminarPer = function () {
    n = prompt('Ingresa el nombre a eliminar: ');
    a = prompt('Ingresa el apellido a eliminar: ');
    for (let i = 0; i < personasR.length; i++) {
        if (personasR[i].Nombre == n && personasR[i].Apellido == a) deleteP(i);
        else { console.log('No se encontro esa persona'); }
    }
}

let deleteP = function (i) {
    index = personasR.indexOf(personasR[i]);
    personasR = personasR.slice(0, index).concat(personasR.slice(index + 1));
    validarMenu();
}
//-------------------------------------------------------------------------------------
//----------------------------EliminarPer-------------------------------------------------
let mostrarTodo = function () {
    console.log(personasR);
    validarMenu();
}
//-------------------------------------------------------------------------------------
let E12 = function (op) {
    switch (op) {
        case '1':
            ingresarP();
            break;
        case '2':
            buscar();
            break;
        case '3':
            modificar();
            break;
        case '4':
            eliminarPer();
            break;
        case '5':
            mostrarTodo();
            break;
        case '6':
            return '';
            break;
        default:
            validarMenu();
    }
}

//MAIN
personasR = [];

validarMenu();