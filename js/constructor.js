class Cliente{
    constructor(id, nombre, apellido, tieneCuentas, direccion){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tieneCuentas = tieneCuentas;
        this.direccion = direccion;
    }
    calcularDecuento(){
        if(this.precio > 1000)
            this.precio = this.precio * 0.9;
            return this.precio;
    }
}