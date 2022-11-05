const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburger = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailConstIcon = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuHamburger.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCartIcon.addEventListener('click', toggleCarritoAside);
productDetailConstIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
}

const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
}

    shoppingCartContainer.classList.toggle('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Biotina Healthy America 900 mcg. 120 softgels',
    price: 40000,
    image: 'https://healthyamerica.vtexassets.com/arquivos/ids/155973-1200-auto?v=637347476016230000&width=1200&height=auto&aspect=true',
});
productList.push({
    name: 'Miel de abejas Botanitas 340 gr.',
    price: 18900,
    image: 'https://149363606.v2.pressablecdn.com/wp-content/uploads/2018/12/MIEL-ABEJAS-340-g-MEDICK.jpg',
});
productList.push({
    name: 'Vinagre de manzana 750 ml.',
    price: 14000,
    image: 'https://locatelcolombia.vtexassets.com/arquivos/ids/240303-1200-1200?v=637623196821870000&width=1200&height=1200&aspect=true',
});
productList.push({
    name: 'Creatina Power 2 lb.',
    price: 50000,
    image: 'https://purofitness.com.co/159-large_default/creatina-power.jpg',
});
productList.push({
    name: 'Propomielito Propoleo para niños 350gr Natural Freshly',
    price: 8000,
    image: 'https://i.linio.com/p/a5b3cc79a85ebe2038eeabfafaa04c5f-product.webp',
});
productList.push({
    name: 'Bebida Portencializadora Gold Vitafer-L 500Ml',
    price:  30000,
    image: 'https://mipuntogpasto.com.co/wp-content/uploads/2021/07/vitafer-l.png',
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart= document.createElement('img');

        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.append(productImg); 
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);