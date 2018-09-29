let menu = function() {
    console.log('1.Ingresar Persona');
    console.log('2.Buscar Persona');
    console.log('3.Modificar Persona');
    console.log('4.Eliminar Persona');
    console.log('5.Mostrar todas las Personas');
    console.log('6.Salir'); 
}

let validarMenu = function() {
    menu();
    op = prompt('Ingresa una de las opciones:');
    while(op != 1 || op != 2 || op != 3 || op != 4 || op != 5 || op != 6) {
        menu();
        op = prompt('Ingresa una de las opciones:');
    }
    E12(op);
}
//----------------------INGRESO-----------------------------------------------------
registroPersonas = function(person) {
    personasR.push(person);
    validarMenu();
}

let ingresarP = function() {
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
let buscar = function() {
    n = prompt('Ingresa el nombre a buscar: ');
    a = prompt('Ingresa el apellido a buscar: ');
}
//-------------------------------------------------------------------------------------
let E12 = function(op) {
    switch (op) {
        case 1:
            ingresarP();
        break;
        case 2:

        break;
        case 3:
        break;
        case 4:
        break;
        case 5:
        break;
        case 6:
        break;
        default:
        validarMenu();
    }
}

//MAIN
personasR = [];