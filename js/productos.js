let selectedCategory = 'all';
let selectedSize = 'all';
let minPrice = null;
let maxPrice = null;

// Función para filtrar productos
function filterProducts() {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productSize = product.getAttribute('data-size');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        // Validar categoría, talle y precio
        const categoryMatch = (selectedCategory === 'all' || productCategory === selectedCategory);
        const sizeMatch = (selectedSize === 'all' || productSize === selectedSize);
        const priceMatch = (!minPrice || productPrice >= minPrice) && (!maxPrice || productPrice <= maxPrice);

        // Mostrar el producto si cumple con todos los filtros
        if (categoryMatch && sizeMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Función para filtrar por categoría
function filterByCategory(category) {
    selectedCategory = category;
    filterProducts();
}

// Función para filtrar por talle
function filterBySize(size) {
    selectedSize = size;
    filterProducts();
}

// Función para filtrar por precio
function filterByPrice() {
    const minPriceInput = document.getElementById('price-min').value;
    const maxPriceInput = document.getElementById('price-max').value;

    minPrice = minPriceInput ? parseFloat(minPriceInput) : null;
    maxPrice = maxPriceInput ? parseFloat(maxPriceInput) : null;

    filterProducts();
}
console.log({
    productPrice,
    minPrice,
    maxPrice,
    priceMatch
});
console.log({
    productSize,
    selectedSize,
    sizeMatch
});
