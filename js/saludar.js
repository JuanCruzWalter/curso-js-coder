let nombreBienvenida = prompt("ingressa tu nombre");
let bienvenida = document.getElementById("bienvenida");
bienvenida.innerHTML = `<h3> bienvenido a la app ${nombreBienvenida} </h3>`;

const listaProductosPrueba = [];
class ProductoPruba{
    constructor(nombre, precio, detalle){
        
        this.nombre = nombre;
        this.precio = precio;
        this.detalle = detalle;
        }

}

const agregarProductoPrueba = () =>{
    let nombre = document.getElementById("nombre1").value;
    let precio = document.getElementById("precio1").value;
    let detalle = document.getElementById("detalle1").value;

    let nuevoProductoPrueba = new ProductoPruba (nombre, precio, detalle);
    listaProductosPrueba.push(nuevoProductoPrueba);
    
}
agregarProductoPrueba();