let listaClientes = JSON.parse(localStorage.getItem("listadoClient")) || [];

//contructor de clientes
class Cliente{
    constructor(id, nombre, apellido, direccion){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        
    }
    confirmarCliente(){
        
        swal ({
            title: "OK",
            text: "el cliente se agrego correctamente a la lista",
            icon: "success",
            button: "ok",
          });   
    }

    imprimirClienteNuevo(){
        
        let listadoClientes = document.getElementById("listadoClientes");
        listaClientes.forEach( obj => {
            listadoClientes.innerHTML += `<tr><td class="tablaEstilo"> ${obj.id} </td><td class="tablaEstilo"> ${obj.nombre} </td><td class="tablaEstilo"> ${obj.apellido} </td><td class="tablaEstilo"> ${obj.direccion} </td></tr>`;
        });
        
    }

    //verDatos(){
    //  crear un metodo para ver datos a traves del id
    //} 

    borrarCliente(){
        //pedir validacion para eliminar
        let borrar = false
        borrar = confirm("quiere borrar el cleinte que ingreso?")
        if (borrar == true){
            listaClientes.pop(this.Cliente);
        }
    }
}


const agregarCliente = (nombre, apellido, direccion) => {
    
    let id = listaClientes.length + 10000;
    let nuevoCliente = new Cliente (id, nombre, apellido, direccion);
    //
    listaClientes.push(nuevoCliente);
    localStorage.setItem("listadoClient",JSON.stringify(listaClientes))
    nuevoCliente.imprimirClienteNuevo();
    nuevoCliente.confirmarCliente();
    crearNuevaCuenta(nuevoCliente.id);
    formClientes.reset();   
}
//haciendo validaciones del form

const validarFormCliente  = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;

    nombre !== "" ?  nombre : sAlertError();
    apellido !== "" ?  apellido : sAlertError();
    direccion !== "" ?  direccion : sAlertError();
    nombre && apellido && direccion && agregarCliente(nombre, apellido, direccion);
}
 

// USO sweet alert -- intente pasarlle parametros para no repetir codigo, pero no pude
const sAlertError = () => {
    swal ({
    title: "Error",
    text: "faltan campos por completar",
    icon: "error",
    button: "completar campo",
  });
}
// fin seet alert



//evento para crear un cliente y una cuenta asociada a el

let formClientes = document.getElementById("formClientes")
const enviar = document.getElementById("enviarClientes")
enviar.onclick = (e) => {
    e.preventDefault();
    validarFormCliente();
    
}
//evento limpiar storage
let btnLimpiar = document.getElementById("btnLimpiar")
btnLimpiar.onclick = () => { 
    localStorage.clear();
    location.reload();
}


//constructor ctas-ctes

let listadoCuentas = JSON.parse(localStorage.getItem("listadoCC")) || []
class CuentaCorriente{
    constructor(numeroCuenta, titular, compras, deuda, estado){
        this.numeroCuenta = numeroCuenta;
        this.titular = titular; //aca tiene que ir el id
        this.compras = compras;
        this.deuda = deuda;
        this.estado = estado;
        
    }
}

const crearNuevaCuenta = (id, nombre, apellido) =>{

    let numeroCuenta = listadoCuentas.length + 500000;
    let titularId = id;
    let titularNombre = apellido + ", " + nombre
    let compras = [];
    let deuda = 0;
    let estado = "activo";


    let NuevaCuentaCorriente = new CuentaCorriente (numeroCuenta, titularId, titularNombre, compras, deuda, estado);
    listadoCuentas.push(NuevaCuentaCorriente);
    localStorage.setItem("listadoCC",JSON.stringify(listadoCuentas))
    return console.log(listadoCuentas);
     
}


