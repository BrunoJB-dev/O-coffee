document.addEventListener('DOMContentLoaded', () => {
    const displayAllBtn = document.querySelector('.products-btn');
    const productsSection = document.querySelector('.products-showing');

    displayAllBtn.addEventListener('click', async () => {
        try{
            const response = await fetch('/catalogue/all');
            const allProducts = await response.json();

            productsSection.innerHTML = '';

            allProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'products-card';
                productCard.innerHTML = `
                <h3 class="card-title">${product.name}</h3>
                    <p class="products-text">
                        <ul>
                            <li>Description: ${product.description}</li>
                            <li>Référence: ${product.reference}</li>
                            <li>Origine: ${product.origin}</li>
                            <li>Prix au kilo: ${product.price}</li>
                            <li>Caractéristique principale: ${product.feature}</li>
                            <li>Disponible: ${product.available}</li>
                        </ul>
                    </p>
                    <a class="card-link" href="/product/${product.id}">Découvrir</a>
                    `;
                    productsSection.appendChild(productCard);
            });
         }catch(error){
            console.log('Error fetching all products', error);
         }
    })
})