//az űrlap beküldése előtt eseményfigyelő

document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // mezők értékeinek lekérése
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const quantity = document.getElementById('product-quantity').value;
    const imageInput = document.getElementById('product-image');
    const imageFile = imageInput.files[0];

    // ellenőrzés
    if (name && price && quantity && imageFile) {
        const productList = document.getElementById('product-list');

        // új termékkártya létrehozása
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');

        const card = document.createElement('div');
        card.classList.add('card');
        productCard.appendChild(card);

        // kép betöltése
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('card-img-top');
            img.alt = name;
            card.appendChild(img);
        };
        reader.readAsDataURL(imageFile);

        // termékadatok hozzáadása
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const productInfo = document.createElement('h5');
        productInfo.classList.add('card-title');
        productInfo.textContent = name;
        cardBody.appendChild(productInfo);

        const productDetails = document.createElement('p');
        productDetails.classList.add('card-text');
        productDetails.textContent = `Ár: ${price} HUF | Mennyiség: ${quantity} db`;
        cardBody.appendChild(productDetails);

        card.appendChild(cardBody);
        productList.appendChild(productCard);

        // űrlap mezők ürítése
        document.getElementById('add-product-form').reset();
    }
});