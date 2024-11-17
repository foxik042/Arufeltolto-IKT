// Az űrlap kezelése és a termék hozzáadása
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mezők értékeinek lekérése
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const quantity = document.getElementById('product-quantity').value;
    const category = document.getElementById('product-category').value;
    const imageInput = document.getElementById('product-image');
    const imageFile = imageInput.files[0];

    // Ellenőrzés
    if (name && price && quantity && category && imageFile) {
        const productList = document.getElementById('product-list');
        const noProductsMessage = document.getElementById('no-products');

        // Alapértelmezett üzenet eltávolítása
        if (noProductsMessage) {
            noProductsMessage.remove();
        }

        // Új listatétel létrehozása
        const newProduct = document.createElement('li');
        newProduct.classList.add('product-item');

        // Kép megjelenítése
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = name;
            img.style.width = '200px';
            img.style.height = '200px';
            img.style.objectFit = 'cover';
            newProduct.appendChild(img);
        };
        reader.readAsDataURL(imageFile);

        // Termékadatok hozzáadása
        const productInfo = document.createElement('p');
        productInfo.textContent = `${name} - ${category} - ${price} HUF - ${quantity} db`;
        newProduct.appendChild(productInfo);

        // Terméklista frissítése
        productList.appendChild(newProduct);

        // Űrlap mezők ürítése
        document.getElementById('add-product-form').reset();
    }
});