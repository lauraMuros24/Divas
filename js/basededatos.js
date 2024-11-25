let productos = [];
const productosBase= [
        {
            id: 1,
            nombre: "Remeron FunDays",
            descripcion: "Estilo casual y cómodo para días relajados.",
            imagen: "../assets/remeras/remera 1.png",
            precio: 15200,
            categoria: "Remera new-in",
            tamaño: "M"
        },
        {
            id: 2,
            nombre: "Remera FUNNY NIGHTS",
            descripcion: "Diseño divertido ideal para salidas nocturnas.",
            imagen: "../assets/remeras/remera 2.png",
            precio: 7800,
            categoria: "Remera new-in",
            tamaño: "S"
        },
        {
            id: 3,
            nombre: "REMERA PEANUTS",
            descripcion: "Inspiración retro para un look relajado.",
            imagen: "../assets/remeras/remera 3.png",
            precio: 9750,
            categoria: "Remera",
            tamaño: "S"
        },
        {
            id: 4,
            nombre: "REMERA HAMPTONS",
            descripcion: "Elegancia y frescura en un estilo único.",
            imagen: "../assets/remeras/remera 4.png",
            precio: 11625,
            categoria: "Remera new-in",
            tamaño: "XS"
        },
        {
            id: 5,
            nombre: "Remera Crop City",
            descripcion: "Perfecta para un outfit urbano y moderno.",
            imagen: "../assets/remeras/remera 5.png",
            precio: 15960,
            categoria: "Remera",
            tamaño: "XS"
        },
        {
            id: 6,
            nombre: "REMERON FLOW",
            descripcion: "Prenda ligera y versátil para cualquier ocasión.",
            imagen: "../assets/remeras/remera 6.png",
            precio: 11000,
            categoria: "Remera",
            tamaño: "M"
        },
        {
            id: 7,
            nombre: "REMERON MYSTIC",
            descripcion: "Diseñado para destacar con un toque místico.",
            imagen: "../assets/remeras/remera 7.png",
            precio: 14750,
            categoria: "Remera new-in",
            tamaño: "L"
        },
        {
            id: 8,
            nombre: "Polera Crop Niger",
            descripcion: "Moda cropped con un diseño llamativo.",
            imagen: "../assets/remeras/remera 8.png",
            precio: 18690,
            categoria: "Remera new-in",
            tamaño: "S"
        },
        {
            id: 9,
            nombre: "Remera Copacabana",
            descripcion: "Frescura tropical para looks veraniegos.",
            imagen: "../assets/remeras/remera 9.png",
            precio: 9750,
            categoria: "Remera",
            tamaño: "L"
        },
        {
            id: 10,
            nombre: "Remeron Waikiki",
            descripcion: "Estilo relajado inspirado en playas paradisíacas.",
            imagen: "../assets/remeras/remera 10.png",
            precio: 13500,
            categoria: "Remera",
            tamaño: "M"
        },
        {
            id: 11,
            nombre: "Vestido Shine",
            descripcion: "Sofisticación y brillo para eventos especiales.",
            imagen: "../assets/vestido 1.png",
            precio: 14100,
            categoria: "Vestido",
            tamaño: "XS"
        },
        {
            id: 12,
            nombre: "Vestido Batik Heart Shine",
            descripcion: "Diseño batik con un toque romántico.",
            imagen: "../assets/vestido 2.png",
            precio: 19000,
            categoria: "Vestido new-in",
            tamaño: "S"
        },
        {
            id: 13,
            nombre: "Vestido Volados",
            descripcion: "Elegancia clásica con detalles de volados.",
            imagen: "../assets/vestido 3.png",
            precio: 32400,
            categoria: "Vestido",
            tamaño: "S"
        },
        {
            id: 14,
            nombre: "Vestido Beachtime",
            descripcion: "Ideal para días soleados y escapadas a la playa.",
            imagen: "../assets/vestido 4.png",
            precio: 25100,
            categoria: "Vestido new-in",
            tamaño: "S"
        },
        {
            id: 15,
            nombre: "Babucha Follow",
            descripcion: "Confort y estilo para un día activo.",
            imagen: "../assets/pantalones/pantalon 1.png",
            precio: 24150,
            categoria: "Pantalón",
            tamaño: "M"
        },
        {
            id: 16,
            nombre: "Babucha FRISA VINTAGE",
            descripcion: "Corte moderno con un toque vintage.",
            imagen: "../assets/pantalones/pantalon 2.png",
            precio: 24150,
            categoria: "Pantalón",
            tamaño: "L"
        },
        {
            id: 17,
            nombre: "Babucha Batik",
            descripcion: "Estampado único para destacar en cualquier ocasión.",
            imagen: "../assets/pantalones/pantalon 3.png",
            precio: 18125,
            categoria: "Pantalón",
            tamaño: "S"
        },
        {
            id: 18,
            nombre: "Jean Maria Colours",
            descripcion: "Toque de color en un diseño casual.",
            imagen: "../assets/pantalones/pantalon 4.png",
            precio: 21000,
            categoria: "Pantalón new-in",
            tamaño: "S"
        },
        {
            id: 19,
            nombre: "Jean Super Wide Black Rotos",
            descripcion: "Estilo audaz con detalles rasgados.",
            imagen: "../assets/pantalones/pantalon 5.png",
            precio: 50190,
            categoria: "Pantalón new-in",
            tamaño: "L"
        },
        {
            id: 20,
            nombre: "Jean Super Wide Blue",
            descripcion: "Corte amplio para máxima comodidad.",
            imagen: "../assets/pantalones/pantalon 6.png",
            precio: 49350,
            categoria: "Pantalón new-in",
            tamaño: "M"
        },
        {
            id: 21,
            nombre: "Pantalon Rock Tajos",
            descripcion: "Diseño atrevido con detalles en los laterales.",
            imagen: "../assets/pantalones/pantalon 7.png",
            precio: 39375,
            categoria: "Pantalón",
            tamaño: "XS"
        },
        {
            id: 22,
            nombre: "Pantalon Rock",
            descripcion: "Look clásico con un giro moderno.",
            imagen: "../assets/pantalones/pantalon 8.png",
            precio: 39375,
            categoria: "Pantalón",
            tamaño: "S"
        }
    
];


const productosLs = localStorage.getItem("productos")
if (productosLs) {
    const productosLsJson= JSON.parse(productosLs)
    productos=productosLsJson
}else{
const productosBaseConvertidos= JSON.stringify(productosBase)
localStorage.setItem("productos", productosBaseConvertidos)
productos=productosBase
}

// Función para cargar el detalle del producto
function cargarDetalleProducto() {
    const params = new URLSearchParams(window.location.search);
    const productoId = parseInt(params.get("id")); // Leer el ID de la URL
    const producto = productos.find(p => p.id === productoId); // Buscar producto en la base de datos

    if (producto) {
        document.getElementById("product-image").src = producto.imagen;
        document.getElementById("product-name").textContent = producto.nombre;
        document.getElementById("product-description").textContent = producto.descripcion;
        document.getElementById("product-price").textContent = producto.precio;
        document.getElementById("product-stock").textContent = producto.stock > 0 ? "Disponible" : "20";
    } else {
        document.querySelector(".product-section").innerHTML = "<h2>Producto no encontrado</h2>";
    }
}

// Llamar a la función al cargar la página
window.onload = cargarDetalleProducto;

// Agregar al carrito (simulado)
function addToCart() {
    alert("Producto agregado al carrito.");
}
function showDetails(id) {
    window.location = `producto.html?id=${id}`;
}

