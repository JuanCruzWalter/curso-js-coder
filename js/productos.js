const listaProductos = [];
class Producto{
    constructor(id, nombre, categoria, detalle, costo,  precio, stockBlanco, stockNegro, stockReal){
        
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.detalle = detalle;
        this.costo = costo
        this.precio = precio;
        this.stockBlanco = stockBlanco
        this.stockNegro = stockNegro
        this.stockReal = stockReal    
    }
    //agregar metodo para actualizar precios 
    //agregar metodo para actualizar stock

}

const agregarProducto = () =>{ 
    let id = listaProductos.length + 900000
    let nombre = document.getElementById("nombreProducto").value;
    let categoria = document.getElementById("categoriaProducto").value;
    let detalle = document.getElementById("detalle").value;
    let costo = document.getElementById("costo").value;
    let precio = document.getElementById("precio").value;
    let stockBlanco = document.getElementById("stockB").value;
    let stockNegro = document.getElementById("stockN").value;
    let stockReal = parseInt( stockBlanco)+parseInt( stockNegro)

    //creo producto nuevo y lo agrego a la lista con inner
    let nuevoProducto = new Producto (id, nombre, categoria, detalle, costo,  precio, stockBlanco, stockNegro, stockReal);
    listaProductos.push(nuevoProducto);
    
    //hacer una funcion que me agregue a cada producto
    let mostrarProductos = document.getElementById("mostrarProductos");
    mostrarProductos.innerHTML =`
    <td class="tablaEstilo"> ${id} </td>
    <td class="tablaEstilo"> ${nombre} </td>
    <td class="tablaEstilo"> ${categoria} </td>
    <td class="tablaEstilo"> ${detalle} </td>
    <td class="tablaEstilo"> ${costo} </td>
    <td class="tablaEstilo"> ${precio} </td>
    <td class="tablaEstilo"> ${stockBlanco} </td>
    <td class="tablaEstilo"> ${stockNegro} </td>
    <td class="tablaEstilo"> ${stockReal} </td>`;
       
       
    console.log(listaProductos);
    
}
let form = document.getElementById("form")
const enviar = document.getElementById("enviarProductos")
enviar.onclick = (e) => {
    e.preventDefault();
    agregarProducto();
    //form.reset();
    
}


