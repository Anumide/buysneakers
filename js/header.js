
let backToTop = document.querySelector('.back-to-top')
let cartbtn = document.querySelector('.cart')
let cart = document.querySelector('.cart-parent')
let mobileMenu = document.querySelector('.hamburger')
let mobileMenuContent = document.querySelector('.mobile-menu-parent')
let closeMenu = document.querySelector('.close-menu')
let cartImage = document.querySelector('.cart svg')

// back to top 
window.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.transform = 'translateX(0px)'
        backToTop.style.opacity = '1'
    }else{
        backToTop.style.transform = 'translateX(250px)'   
    }
})

// functionality for cart 
cartbtn.addEventListener('click', () =>{
    if(cart.classList.contains('close-cart')){
        cart.classList.remove('hidden')
        cart.classList.remove('close-cart')
        cart.classList.add('open-cart')
        cartImage.style.fill = '#000'
    } else {
        cart.classList.add('close-cart')
        cart.classList.remove('open-cart')
        cartImage.style.fill = '#69707D'
    }
})


// functionality for displaying menubar
mobileMenu.addEventListener('click', () => {
    mobileMenuContent.childNodes[1].setAttribute('class', 'mobile-menu slide-in')
    mobileMenuContent.style.display = "block"
    document.body.style.overflowY = 'hidden'
})

closeMenu.addEventListener('click', () =>{
    mobileMenuContent.childNodes[1].setAttribute('class', 'mobile-menu slide-out')
    setTimeout(() =>{
        mobileMenuContent.style.display = "none"
    }, 600)
    document.body.style.overflowY = 'auto'
})

mobileMenuContent.addEventListener('click', () => {
    mobileMenuContent.childNodes[1].setAttribute('class', 'mobile-menu slide-out')
    setTimeout(() =>{
        mobileMenuContent.style.display = "none"
    }, 600)
    document.body.style.overflowY = 'auto'
})

// functionality for adding and removing from cart 
let cartParent = document.querySelector('.cart-parent'),
    cartEmptyText = document.querySelector('.empty-cart-text'),
    cartCheckOutBtn = document.querySelector('.cart-content-checkout-btn'),
    cartContent = document.querySelector('.cart_content'),
    numOfProduct = document.querySelector('.cart-number'),
    addToCartButton = document.querySelectorAll('.add-to-cart-btn')
    


class ProductObj{
    constructor(productImgSrc, productName, price){
        this.productImgSrc = productImgSrc,
        this.productName = productName,
        this.price = price
    }
}




let cartItem = []
if(localStorage.cart){
    cartItem = JSON.parse(localStorage.cart)
}

addToCartButton.forEach(element => {
        // adding product to localStorage 
    element.addEventListener('click', (e) => {
        let productImgSrc = e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute('src'),
            productName = e.target.parentNode.parentNode.parentNode.children[1].textContent,
            price = e.target.parentNode.parentNode.parentNode.children[3].firstElementChild.textContent,
            reviewedPrice

    
        cartItem.push(new ProductObj(productImgSrc, productName, price))
        
        localStorage.cart = JSON.stringify(cartItem)
        cartItem = JSON.parse(localStorage.cart)
        location.reload()
        })
})



 // adding product to cart

 function cartProductFunc(){
    cartItem.forEach(ele => {
        let cartProduct = document.createElement('div')
        cartProduct.setAttribute('class', 'cart-product')
        cartProduct.innerHTML = ` 
        <div class="cart-product-image">
            <img src="${ele.productImgSrc}" alt="">
        </div>
    
        <div class="cart-product-details">
            <p>${ele.productName}</p>
            <span>$125.00 x <span>1</span></span>
            <span class="reviewed-price">$${ele.reviewedPrice}.00</span>
        </div>
    
        <div class="delete-btn">
            <img src="./images/icon-delete.svg" alt="">
        </div>`
        cartContent.appendChild(cartProduct)
        console.log(cartContent);
    })
 }
 
cartProductFunc()


if(cartContent.childElementCount >= 1){
    cartEmptyText.style.display = 'none'
    cartCheckOutBtn.style.display = 'block'
    numOfProduct.innerContent = cartContent.childElementCount;
} else{
    cartParent.classList.toggle('height')
    cartEmptyText.style.display = 'block'
    cartCheckOutBtn.style.display = 'none'
}
