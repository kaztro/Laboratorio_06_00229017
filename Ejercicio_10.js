let E10 = function(n, a, fn, nt, ce) {
    let usuario = { 
        Nombre: n,
        Apellido: a,
        'Fecha de Nacimiento': fn,
        'Numero de Telefono': nt,
        'Correo Electronico': ce
    };
    console.log('Nombre: '+usuario.Nombre);
    console.log('Apellido: '+usuario.Apellido);
    console.log('Fecha de Nacimiento: '+usuario["Fecha de Nacimiento"]);
    console.log('Numero de Telefono: '+usuario["Numero de Telefono"]);
    console.log('Correo Electronico: '+usuario["Correo Electronico"]);
}

E10('German', 'Kaztro', '12/08/99', '5550129', '00229017@uca.edu.sv');