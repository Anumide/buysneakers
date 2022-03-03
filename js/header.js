
let backToTop = document.querySelector('.back-to-top')
let cartbtn = document.querySelector('.cart')
let cart = document.querySelector('.cart-parent')
let mobileMenu = document.querySelector('.hamburger')
let mobileMenuContent = document.querySelector('.mobile-menu-parent')
let closeMenu = document.querySelector('.close-menu')


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
    } else {
        cart.classList.add('close-cart')
        cart.classList.remove('open-cart')
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