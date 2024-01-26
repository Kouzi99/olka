
// Product object
const products = [
    {
    name: 'dress',
    price: 150,
    photoLink: './foto/7.jpg',
    },
    {
    name: 'skirt',
    price: 80,
    photoLink: './foto/8.jpg',
    },
    {
    name: 'dress',
    price: 160,
    photoLink: './foto/9.jpg',
    },
    {
    name: 'dress',
    price: 120, 
    photoLink: './foto/10.jpg',
    },
    {
    name: 'dress',
    price: 140,
    photoLink: './foto/11.jpg',
    },    
    ];
//display product details
function displayProductDetails(products) {
    const productContainer = document.getElementById('product-container');
    // Loop through each product in the array
    products.forEach(product => {
        // Create a product card div
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        // photo
        const productImage = document.createElement('img');
        productImage.setAttribute('loading', 'lazy');
        productImage.src = product.photoLink;
        productImage.alt = product.name;
        // Create HTML
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productName.style.fontFamily = "nanum-myeongjo-bold";
        productName.style.fontSize = "19px";
        // price
        const productPrice = document.createElement('p');
        productPrice.textContent = `${product.price} €`;
        // Append 
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        // Append the product card 
        productContainer.appendChild(productCard);
    });
}
displayProductDetails(products);


 
 
























