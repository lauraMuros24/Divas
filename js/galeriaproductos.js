function creartarjeta (producto){
    const contenedorProductos = document.getElementById("contenedor-productos")
    let tarjetaProducto= `<div class="col-md-4 product-item" data-category="${producto.categoria}" data-size="${producto.tamaño}" data-price=${producto.precio}>
<img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
<p class="product-name">${producto.nombre}</p>
<p class="product-price">$${producto.precio}</p>
<button class="btn btn-outline-dark" onclick="showDetails(${producto.id})">Ver más</button>
</div>`

contenedorProductos.innerHTML += tarjetaProducto
}


function filtradotarjetas(filtro){
    const contenedorProductos = document.getElementById("contenedor-productos")
    contenedorProductos.innerHTML = ""
   for (let index = 0; index < productos.length; index++) {
    if (productos[index].categoria ==filtro) {
       creartarjeta(productos[index])  
    }
   
} 
}


function showDetails(id){
    window.location= "./producto.html?id="+ id
}

for (let index = 0; index < productos.length; index++) {
 
   creartarjeta(productos[index])
}

