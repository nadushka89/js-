const featuredItems = JSON.parse(featuredItemsJson);
console.log(featuredItems);

let productTemplate = document.querySelector('#productTemplate .product');
let container = document.querySelector('.container');

featuredItems.forEach(element => {
    let product = productTemplate.cloneNode(true);
    product.querySelector('.product__image').src = element.image;
    product.querySelector('.product__title').textContent = element.title;
    product.querySelector('.product__desc').textContent = element.description;
    product.querySelector('.product__price').textContent = element.price;
    container.appendChild(product);
});