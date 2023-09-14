const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const sideCart = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: 'Bike',
    price: 123,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// Listeners
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

//Functions
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    sideCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    sideCart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function toggleShoppingCart() {
    sideCart.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function renderProducts(arr) {
    for (product of arr) {
       const productCard = document.createElement('div');
       productCard.classList.add('product-card');

       const productImage = document.createElement('img');
       productImage.setAttribute('src', product.image);

       const productInfo = document.createElement('div');
       productInfo.classList.add('product-info');

       const productInfoDiv = document.createElement('div');

       const productPrice = document.createElement('p');
       productPrice.innerText = '$' + product.price;

       const productName = document.createElement('p');
       productName.innerText = product.name;

       const productInfoFigure = document.createElement('figure');
       const productIconCart = document.createElement('img');
       productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

       productInfoFigure.appendChild(productIconCart);
       productInfoDiv.append(productPrice, productName);
       productInfo.append(productInfoDiv, productInfoFigure);
       productCard.append(productImage, productInfo);
       cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);