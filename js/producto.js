
const direccion= window.location.search
const parametros= new URLSearchParams(direccion)
const idProducto= parametros.get("id")
let productoDetallado   

for (let index = 0; index < productos.length; index++) {
    if(productos[index].id == idProducto){
        productoDetallado= productos[index]
    }
}

mostrarProducto(productoDetallado);

function mostrarProducto(producto) {
    document.querySelector(".product-details h1").textContent = producto.nombre;
    document.querySelector(".price").textContent = producto.precio;
    document.querySelector(".installments").textContent = producto.cuotas;
    document.querySelector(".description").textContent = producto.descripcion;

    const coloresContainer = document.querySelector(".colors");
    coloresContainer.innerHTML = "<span>COLOR:</span>";
    producto.colores.forEach(color => {
        const colorElement = document.createElement("div");
        colorElement.className = "color";
        colorElement.style.backgroundColor = color;
        coloresContainer.appendChild(colorElement);
    });

    const tallesContainer = document.querySelector(".sizes");
    tallesContainer.innerHTML = "<span>TALLE:</span>"; 
    producto.talles.forEach(talle => {
        const talleElement = document.createElement("div");
        talleElement.className = "size";
        talleElement.textContent = talle;
        tallesContainer.appendChild(talleElement);
    });
}


