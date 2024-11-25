document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("product-form");
  const productTable = document.querySelector("table tbody");
  renderProductos()
  // Variable para almacenar los productos en la memoria temporal

  let editIndex = null;

  // Manejar el envío del formulario
  productForm.onsubmit = function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const categoria = document.getElementById("categoria").value;
    const stock = document.getElementById("stock").value;
    const imagen = document.getElementById("imagen").value;

    const nuevoProducto = {
      id: editIndex === null ? productos.length + 1 : productos[editIndex].id,
      nombre,
      precio,
      descripcion,
      categoria,
      stock,
      imagen,
    };

    if (editIndex === null) {
      // Añadir nuevo producto
      productos.push(nuevoProducto);
      const productosConvertidos= JSON.stringify(productos)
    localStorage.setItem("productos", productosConvertidos)
    } else {
      // Editar producto existente
      productos[editIndex] = nuevoProducto;
      editIndex = null;
    }

    productForm.reset();
    renderProductos();
  };

  // Función para renderizar los productos en la tabla
  function renderProductos() {
    productTable.innerHTML = ""; // Limpiar la tabla antes de renderizar

    productos.forEach((producto, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>
          <button class="btn btn-edit" data-index="${index}">Editar</button>
          <button class="btn btn-delete" data-index="${index}">Eliminar</button>
        </td>
      `;

      productTable.appendChild(row);
    });

    // Agregar funcionalidad a los botones de edición y eliminación
    document.querySelectorAll(".btn-edit").forEach(button => {
      button.addEventListener("click", handleEdit);
    });

    document.querySelectorAll(".btn-delete").forEach(button => {
      button.addEventListener("click", handleDelete);
    });
  }

  // Función para manejar la edición
  function handleEdit(event) {
    editIndex = event.target.dataset.index;
    const producto = productos[editIndex];

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("stock").value = producto.stock;
    document.getElementById("imagen").value = producto.imagen;
  }

  // Función para manejar la eliminación
  function handleDelete(event) {
    const index = event.target.dataset.index;
    productos.splice(index, 1);
    const productosConvertidos= JSON.stringify(productos)
    localStorage.setItem("productos", productosConvertidos)
    renderProductos();
  }
});
