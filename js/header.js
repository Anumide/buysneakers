let backToTop = document.querySelector('.back-to-top')
    mainProductImage = document.querySelector('.main-image img')
    productCarousel = document.querySelector('.product-carousel-parent')
    closeCarousel = document.querySelector('.close-btn')
    carouselThumbnails = Array.from(document.querySelectorAll('#carousel-product span'))
    carouselProductImage = document.querySelector('div.carousel-item.active img')
    imageSrc = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']
    nikeImageSrc = ['./images/nike-product-1.jpg', './images/nike-product-2.jpg', './images/nike-product-3.jpg', './images/nike-product-4.jpg'],
    addidasImageSrc = ['./images/addidas-product-1.jpg', './images/addidas-product-2.jpg', './images/addidas-product-3.jpg', './images/addidas-product-4.jpg']



window.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.transform = 'translateX(0px)'
        backToTop.style.opacity = '1'
    }else{
        backToTop.style.transform = 'translateX(150px)'   
    }
})


// initializing product image to show carousel on click
mainProductImage.addEventListener('click', (e) => {
    productCarousel.classList.remove('carousel-closed')
    productCarousel.classList.remove('hidden')
    productCarousel.classList.add('carousel-open')
})

closeCarousel.addEventListener('click', () => { 
    productCarousel.classList.add('carousel-closed')
    productCarousel.classList.remove('carousel-open')
})



 //function for getting sibliing elements
 let getSiblingss = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

// functionality for changing product image
for (let i = 0; i < carouselThumbnails.length; i++) {
const element = carouselThumbnails[i]
element.addEventListener('click', () => {
    carouselProductImage.setAttribute('src', imageSrc[i])
    element.classList.add('active-thumbnail') 
    getSiblingss(element).forEach(e => {
        e.classList.remove('active-thumbnail')
    });
})
}
