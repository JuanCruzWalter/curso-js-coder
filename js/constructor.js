//declaro arrays para pushearle objetos 
const listaClientes = [];
const listaProducos = [];

//contructor de clientes
class Cliente{
    constructor(id, nombre, apellido, tieneCuentas, direccion){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tieneCuentas = tieneCuentas;
        this.direccion = direccion;
        
    }
    confirmarCliente(){
        let listadoClientes = document.getElementById("listadoClientes")
        listadoClientes.innerHTML = `<P> a creado un cliente nuevo, llamado: ${this.nombre } ${this.apellido }, con el id: ${ this.id }<P><br>`;
    }
    borrarCliente(){
        let borrar = false
        borrar = confirm("quiere borrar el cleinte que ingreso?")
        if (borrar == true){
            listaClientes.pop(this.Cliente);
        }
    }

   
}
const agregarCliente = () => {
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tieneCuentas = document.getElementById("tieneCuentas").value;
    let direccion = document.getElementById("direccion").value;
    

    let nuevoCliente = new Cliente (id, nombre, apellido, tieneCuentas, direccion);
    listaClientes.push(nuevoCliente);
    console.log(listaClientes);
    nuevoCliente.confirmarCliente();
   
}




//creo 3 clientes y 1 por prompt. utilizo un metodo
let cliente1 = new Cliente(2, "juan", "lopez", true, "ricchieri 285");
let cliente2 = new Cliente(2, "ana", "perez", true, "lugones 234");
let cliente3 = new Cliente(2, "maria", "sanchez", true, "av valparaiso 225");
let cliente4 = new Cliente(3, "luis", "suarez", true, "calle siempreviva 416");
 



//constructor de productos
class Producto{
    constructor(id, nombreProducto, categoria, precio, stock){
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        }
        calcularDescuento(){
            if(this.precio > 1200)
            this.precio = this.precio * 0.9
            return `el precio con descuento es ${this.precio}`;
        }
        
        
}
//creo 4 productos
let producto1 = new Producto(23, "fideos", "sss", 120, 400);
let producto2 = new Producto(47, "harina", "xxx", 330, 600);
let producto3 = new Producto(23, "aceite", "ddd", 250, 500);
let producto4 = new Producto(23, "galletas", "fff", 550, 400);

//pushe los clientes y los productos creados
listaProducos.push(producto1);
listaProducos.push(producto2);
listaProducos.push(producto3);
listaProducos.push(producto4);

listaClientes.push(cliente1);
listaClientes.push(cliente2);
listaClientes.push(cliente3);
listaClientes.push(cliente4);


//muestro en consola los arrays y el metodo usado
console.log(listaProducos);
console.log(listaClientes);


//utiliso un metodo de clientes para borrar el que se agrega pr prompt
//cliente4.borrarCliente();


//llamo la funcion pero no la puedo hacer funcionar



let formClientes = document.getElementById("formClientes")
const enviar = document.getElementById("enviarClientes")
enviar.onclick = (e) => {
    e.preventDefault();
    agregarCliente();
    formClientes.reset();
    
}