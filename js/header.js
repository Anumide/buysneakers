
let backToTop = document.querySelector('.back-to-top')
let cartbtn = document.querySelector('.cart')
let cart = document.querySelector('.cart-parent')
let mobileMenu = document.querySelector('.hamburger')
let mobileMenuContent = document.querySelector('.mobile-menu-parent')
let closeMenu = document.querySelector('.close-menu')
let cartImage = document.querySelector('.cart svg')
let loader = document.querySelector('.loader')


// back to top 
window.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.transform = 'translateX(0px)'
        backToTop.style.opacity = '1'
    }else{
        backToTop.style.transform = 'translateX(250px)'   
    }
})

window.addEventListener('load', () => {
    setTimeout(() => {loader.classList.add('loaded')} , 2000)
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
    addToCartButton = document.querySelectorAll('.add-to-cart-btn'),
    productImgSrc, productName, price, productNum, reviewedPrice, deleteBtn, cartProduct
   
    let numOfProductFunc = () => {
        if(cartItem.length >= 1){
            cartEmptyText.style.display = 'none'
            cartCheckOutBtn.style.display = 'block'
            cartParent.classList.remove('height')
            numOfProduct.textContent = cartItem.length;
            if(numOfProduct.textContent){
                numOfProduct.style.opacity = '1'
            }
        } else{
            cartParent.classList.add('height')
            cartEmptyText.style.display = 'block'
            cartCheckOutBtn.style.display = 'none'
        }
    }


class ProductObj{
    constructor(productImgSrc, productName, price, productNum, reviewedPrice){
        this.productImgSrc = productImgSrc,
        this.productName = productName,
        this.price = price,
        this.productNum = productNum,
        this.reviewedPrice = reviewedPrice
    }
}




let cartItem = []
//let cartArr = cartItem
if(localStorage.cart){
    cartItem = JSON.parse(localStorage.cart)
}

cartItem.forEach(ele => {
    let cartProduct = document.createElement('div')
    cartProduct.setAttribute('class', 'cart-product')
    cartProduct.innerHTML = ` 
    <div class="cart-product-image">
        <img src="${ele.productImgSrc}" alt="">
    </div>

    <div class="cart-product-details">
        <p>${ele.productName}</p>
        <span>$${ele.price} x <span>${ele.productNum}</span></span>
        <span class="reviewed-price">$${ele.reviewedPrice}.00</span>
    </div>

    <div class="delete-btn">
        <img src="./images/icon-delete.svg" alt="">
    </div>`
    cartContent.appendChild(cartProduct)
    deleteBtn = cartProduct.lastElementChild
    deleteBtn.addEventListener('click', (e) =>{
        e.target.parentNode.parentNode.style.display = "none"
        cartItem.splice(ele, 1)
        let parseCart = JSON.parse(localStorage.cart)
        parseCart.splice(ele, 1)
        localStorage.cart = JSON.stringify(parseCart)
        
        if(cartItem.length >= 1){
            cartEmptyText.style.display = 'none'
            cartCheckOutBtn.style.display = 'block'
            cartParent.classList.remove('height')
            numOfProduct.textContent = cartItem.length;
            if(numOfProduct.textContent){
                numOfProduct.style.opacity = '1'
            }
        }  else if(cartItem.length >= 0){
            cartParent.classList.add('height')
            cartEmptyText.style.display = 'block'
            cartCheckOutBtn.style.display = 'none'
            numOfProduct.style.opacity = '0'
        }else{
            cartParent.classList.add('height')
            cartEmptyText.style.display = 'block'
            cartCheckOutBtn.style.display = 'none'
        }
    })
})

addToCartButton.forEach(element => {
        // adding product to localStorage 
    element.addEventListener('click', (e) => {
            productImgSrc = e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute('src')
            productName = e.target.parentNode.parentNode.parentNode.children[1].textContent
            price = parseInt(e.target.parentNode.parentNode.parentNode.children[3].firstElementChild.children[0].textContent)
            productNum = parseInt(e.target.parentNode.previousElementSibling.firstElementChild.nextElementSibling.textContent)
            reviewedPrice = price * productNum
        cartItem.push(new ProductObj(productImgSrc, productName, price, productNum, reviewedPrice))
        
         localStorage.cart = JSON.stringify(cartItem)
         cartItem = JSON.parse(localStorage.cart)


        cartProduct = document.createElement('div')
        cartProduct.setAttribute('class', 'cart-product')
       // cartProduct.setAttribute('id', cartItem.indexOf(ele))
        cartProduct.innerHTML = ` 
        <div class="cart-product-image">
            <img src="${cartItem[cartItem.length - 1].productImgSrc}" alt="">
        </div>
    
        <div class="cart-product-details">
            <p>${cartItem[cartItem.length - 1].productName}</p>
            <span>$${price}.00 x ${cartItem[cartItem.length - 1].productNum}</span>
            <span class="reviewed-price">$${cartItem[cartItem.length - 1].reviewedPrice}</strong>.00</span>
        </div>
    
        <div class="delete-btn">
            <img src="./images/icon-delete.svg" alt="">
        </div>`

        cartContent.appendChild(cartProduct)
        deleteBtn = cartProduct.lastElementChild
        deleteBtn.addEventListener('click', (e) =>{
            e.target.parentNode.parentNode.style.display = "none"
            for (let i = 0; i < cartItem.length; i++) {
                const element = cartItem[i];
                cartItem.splice(element, 1)
                let parseCart = JSON.parse(localStorage.cart)
                parseCart.splice(element, 1)
                localStorage.cart = JSON.stringify(parseCart)
                if(cartItem.length >= 1){
                    cartEmptyText.style.display = 'none'
                    cartCheckOutBtn.style.display = 'block'
                    cartParent.classList.remove('height')
                    numOfProduct.textContent = cartItem.length;
                    if(numOfProduct.textContent){
                        numOfProduct.style.opacity = '1'
                    }
                }  else if(cartItem.length >= 0){
                    cartParent.classList.add('height')
                    cartEmptyText.style.display = 'block'
                    cartCheckOutBtn.style.display = 'none'
                    numOfProduct.style.opacity = '0'
                }else{
                    cartParent.classList.add('height')
                    cartEmptyText.style.display = 'block'
                    cartCheckOutBtn.style.display = 'none'
                }
                break;                
            }
        })
        if(cartItem.length >= 1){
            cartEmptyText.style.display = 'none'
            cartCheckOutBtn.style.display = 'block'
            cartParent.classList.remove('height')
            numOfProduct.textContent = cartItem.length;
            if(numOfProduct.textContent){
                numOfProduct.style.opacity = '1'
            }
        }  else if(cartItem.length >= 0){
            cartParent.classList.add('height')
            cartEmptyText.style.display = 'block'
            cartCheckOutBtn.style.display = 'none'
            numOfProduct.style.opacity = '0'
        }else{
            cartParent.classList.add('height')
            cartEmptyText.style.display = 'block'
            cartCheckOutBtn.style.display = 'none'
        }
    
    })
})




numOfProductFunc()

