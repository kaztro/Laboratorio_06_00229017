Usuarios = [];

registroUsuarios = function(user) {
    Usuarios.push(user);
}

let E11 = function(n, a, fn, nt, ce) {
    let usuario = { 
        Nombre: n,
        Apellido: a,
        'Fecha de Nacimiento': fn,
        'Numero de Telefono': nt,
        'Correo Electronico': ce
    };
    registroUsuarios(usuario);
}

E11('German', 'Kaztro', '12/08/99', '5550129', '00229017@uca.edu.sv');
E11('Julio', 'Castro', '20/14/78', '5552492', 'julio.e@lolito.com');
E11('Lya', 'Portillo', '30/14/75', '5252492', 'lya.s@lolito.com');
console.log(Usuarios);