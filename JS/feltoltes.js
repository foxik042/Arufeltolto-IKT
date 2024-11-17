// Az űrlap kezelése és a termék hozzáadása
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mezők értékeinek lekérése
    const nev = document.getElementById('product-nev').value;
    const ar = document.getElementById('product-ar').value;
    const mennyiseg = document.getElementById('product-mennyiseg').value;
    const kategoria = document.getElementById('product-kategoria').value;
    const keppInput = document.getElementById('product-kepp');
    const keppFile = keppInput.files[0];

    // Ellenőrzés
    if (nev && ar && mennyiseg && kategoria && keppFile) {
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
            img.alt = nev;
            img.style.width = '200px';
            img.style.height = '200px';
            img.style.objectFit = 'cover';
            newProduct.appendChild(img);
        };
        reader.readAsDataURL(keppFile);

        // Termékadatok hozzáadása
        const productInfo = document.createElement('p');
        productInfo.textContent = `${nev} - ${kategoria} - ${ar} HUF - ${mennyiseg} db`;
        newProduct.appendChild(productInfo);

        // Terméklista frissítése
        productList.appendChild(newProduct);

        // Űrlap mezők ürítése
        document.getElementById('add-product-form').reset();
    }
});