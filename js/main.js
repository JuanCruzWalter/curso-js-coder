 let distancia = parseInt(prompt("ingrese distencia del envio en KM"))
 let precio = parseInt(prompt("ingrese precio del producto"))
 let cantidad = parseInt(prompt("ingrese cantidad del producto"))
 let envio
 let contador

 if(distancia<0){
     alert("distancia invalida")
 } else if (distancia>=0 && distancia<=10){
     envio = (0)
 } else if (distancia>10 && distancia<=50){
     envio = (200)
 } else 
     envio = (400)

alert ("el total con envio es = " + (envio + (precio*cantidad)))

contador = parseInt(prompt("ingrese un numero entre 1 y 5 para iniciar el contador"))

if(contador<0){
    alert("numero invalido")
} else if (contador>=1 && contador<=5){
    for (let i = 1; i <= contador; i++) {
        alert ("contador esta en la posicion " + i)
    }
} else  alert("numero invalido")

