let backToTop = document.querySelector('.back-to-top')
    mainProductImage = document.querySelector('.main-image')
    productCarousel = document.querySelector('.product-carousel-parent')
    closeCarousel = document.querySelector('.close-btn')
    thumbnails = Array.from(document.querySelectorAll('#carousel-product span'))
    productImage = document.querySelector('div.carousel-item.active > img')
    imageSrc = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']



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
})

closeCarousel.addEventListener('click', () => { 
    productCarousel.classList.add('carousel-closed')
})


 //function for getting sibliing elements
 let getSiblings = function (e) {
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
for (let i = 0; i < thumbnails.length; i++) {
const element = thumbnails[i]
element.addEventListener('click', () => {
    productImage.setAttribute('src', imageSrc[i])
    element.classList.add('active-thumbnail') 
    getSiblings(element).forEach(e => {
        e.classList.remove('active-thumbnail')
    });
})
}