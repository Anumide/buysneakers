let alexanderThumbnails = Array.from(document.querySelectorAll('#alexander-thumbnail span'))
    alexanderProductImage = document.querySelector('#alexander-main-image img')

let balenciagaTumbnails = Array.from(document.querySelectorAll('#balenciaga-thumbnail span'))
    balenciagaProductImage = document.querySelector('#balenciaga-main-image img')

let offWhiteThumbnails = Array.from(document.querySelectorAll('#off-white-thhumbnail span'))
    offWhiteProductImage = document.querySelector('#off-white-main-image img')

let vejaThumbnails = Array.from(document.querySelectorAll('#veja-thumbnail span'))
    vejaProductImage = document.querySelector('#veja-product-image img')

let alexanderImgSrc = ['./images/alexander-women-product-1.jpg', './images/alexander-women-product-2.jpg', './images/alexander-women-product-3.jpg', './images/alexander-women-product-4.jpg']
    balenciagaImgSrc = ['./images/balenciaga-women-product-1.jpg', './images/balenciaga-women-product-2.jpg', './images/balenciaga-women-product-3.jpg', './images/balenciaga-women-product-4.jpg']
    offWhiteImgSrc = ['./images/off-white-women-product-1.jpg', './images/off-white-women-product-2.jpg', './images/off-white-women-product-3.jpg', './images/off-white-women-product-4.jpg']
    vejaImgSrc = ['./images/veja-women-product-1.jpg', './images/veja-women-product-2.jpg', './images/veja-women-product-3.jpg', './images/veja-women-product-4.jpg']

let productCarousel = document.querySelector('#alexander-carousel')
    closeCarousel = document.querySelectorAll('.close-btn')
    carouselThumbnails = Array.from(document.querySelectorAll('#alexander-carousel-product span'))
    carouselProductImage = document.querySelectorAll('div.carousel-item')

let balenciagaCarousel = document.querySelector('#balenciaga-carousel'),
    balenciagaCarouselTumbnails = document.querySelectorAll('#balenciaga-carousel-product span'),
    balenciagaCarouselImage = document.querySelectorAll('#balenciaga-carousel-item div')

let offWhiteCarousel = document.querySelector('#offwhite-carousel'),
    offWhiteCarouselThumbnails = document.querySelectorAll('#offwhite-carousel-product span'),
    offWhiteCarouselImage = document.querySelectorAll('#offwhite-carousel-item div')

let vejaCarousel = document.querySelector('#veja-carousel'),
    vejaCarouselThumbnails = document.querySelectorAll('#veja-carousel-product span'),
    vejaCarouselImage = document.querySelectorAll('#veja-carousel-item div')



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
for (let i = 0; i < alexanderThumbnails.length; i++) {
    const element = alexanderThumbnails[i]
    element.addEventListener('click', () => {
        alexanderProductImage.setAttribute('src', alexanderImgSrc[i])
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

for (let i = 0; i < balenciagaTumbnails.length; i++) {
    const element = balenciagaTumbnails[i]
    element.addEventListener('click', () => {
        balenciagaProductImage.setAttribute('src', balenciagaImgSrc[i])
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

for (let i = 0; i < offWhiteThumbnails.length; i++) {
    const element = offWhiteThumbnails[i]
    element.addEventListener('click', () => {
        offWhiteProductImage.setAttribute('src', offWhiteImgSrc[i])
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

for (let i = 0; i < vejaThumbnails.length; i++) {
    const element = vejaThumbnails[i]
    element.addEventListener('click', () => {
        vejaProductImage.setAttribute('src',  vejaImgSrc[i])
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

    let decreaseNumOne = document.querySelector('#neg-1'),
        decreaseNumTwo = document.querySelector('#neg-2'),
        decreaseNumThree = document.querySelector('#neg-3'),
        decreaseNumFour = document.querySelector('#neg-4'),
        increaseNumOne = document.querySelector('#pos-1'),
        increaseNumTwo = document.querySelector('#pos-2'),
        increaseNumThree = document.querySelector('#pos-3'),
        increaseNumFour = document.querySelector('#pos-4'),
        numOfOrderOne = document.querySelector('#num-1'),
        numOfOrderTwo = document.querySelector('#num-2'),
        numOfOrderThree = document.querySelector('#num-3'),
        numOfOrderFour = document.querySelector('#num-4'),
        addToCart1 = document.querySelector('#add-to-cart1'),
        addToCart2 = document.querySelector('#add-to-cart2'),
        addToCart3 = document.querySelector('#add-to-cart3'),
        addToCart4 = document.querySelector('#add-to-cart4')

        decreaseNumOne.addEventListener('click', () => {
  
            if (numOfOrderOne.textContent == 1 || numOfOrderOne.textContent == 0) {
                decreaseNumOne.style.opacity = '.4'
                numOfOrderOne.textContent = '0'
                if(numOfOrderOne.textContent == '0'){
                    addToCart1.style.opacity = '0.6'
                    addToCart1.style.pointerEvents = 'none'
                    console.log(true);
                } else{
                    addToCart1.style.opacity = '1'
                    addToCart1.style.pointerEvents = 'all'
                }
            }else{
                decreaseNumOne.style.opacity = '1'
                numOfOrderOne.textContent--
            }
        })
        
        increaseNumOne.addEventListener('click', (e) => {
            decreaseNumOne.style.opacity = '1'
            numOfOrderOne.textContent++
            if(numOfOrderOne.textContent == '0'){
                addToCart1.style.opacity = '0.6'
                addToCart1.style.pointerEvents = 'none'
                console.log(true);
            } else{
                addToCart1.style.opacity = '1'
                addToCart1.style.pointerEvents = 'all'
            }
        })
        
        
        decreaseNumTwo.addEventListener('click', () => {
            
            if (numOfOrderTwo.textContent == 1 || numOfOrderTwo.textContent == 0) {
                decreaseNumTwo.style.opacity = '.4'
                numOfOrderTwo.textContent = '0'
                if(numOfOrderTwo.textContent == '0'){
                    addToCart2.style.opacity = '0.6'
                    addToCart2.style.pointerEvents = 'none'
                } else{
                    addToCart2.style.opacity = '1'
                    addToCart2.style.pointerEvents = 'all'
                }
            }else{
                decreaseNumTwo.style.opacity = '1'
                numOfOrderTwo.textContent--
            }
        })
        
        increaseNumTwo.addEventListener('click', () => {
            decreaseNumTwo.style.opacity = '1'
            numOfOrderTwo.textContent++
            if(numOfOrderTwo.textContent == '0'){
                addToCart2.style.opacity = '0.6'
                addToCart2.style.pointerEvents = 'none'
            } else{
                addToCart2.style.opacity = '1'
                addToCart2.style.pointerEvents = 'all'
            }
        })
        
        
        decreaseNumThree.addEventListener('click', () => {
            
            if (numOfOrderThree.textContent == 1 || numOfOrderThree.textContent == 0) {
                decreaseNumThree.style.opacity = '.4'
                numOfOrderThree.textContent = '0'
                if(numOfOrderThree.textContent == '0'){
                    addToCart3.style.opacity = '0.6'
                    addToCart3.style.pointerEvents = 'none'
                } else{
                    addToCart3.style.opacity = '1'
                    addToCart3.style.pointerEvents = 'all'
                }
            }else{
                decreaseNumThree.style.opacity = '1'
                numOfOrderThree.textContent--
            }
        })
        
        increaseNumThree.addEventListener('click', () => {
            decreaseNumThree.style.opacity = '1'
            numOfOrderThree.textContent++
            if(numOfOrderThree.textContent == '0'){
                addToCart3.style.opacity = '0.6'
                addToCart3.style.pointerEvents = 'none'
            } else{
                addToCart3.style.opacity = '1'
                addToCart3.style.pointerEvents = 'all'
            }
        })

        decreaseNumFour.addEventListener('click', () => {
            
            if (numOfOrderFour.textContent == 1 || numOfOrderFour.textContent == 0) {
                decreaseNumFour.style.opacity = '.4'
                numOfOrderFour.textContent = '0'
                if(numOfOrderFour.textContent == '0'){
                    addToCart4.style.opacity = '0.6'
                    addToCart4.style.pointerEvents = 'none'
                } else{
                    addToCart4.style.opacity = '1'
                    addToCart4.style.pointerEvents = 'all'
                }
            }else{
                decreaseNumFour.style.opacity = '1'
                numOfOrderFour.textContent--
            }
        })
        
        increaseNumFour.addEventListener('click', () => {
            decreaseNumFour.style.opacity = '1'
            numOfOrderFour.textContent++
            if(numOfOrderFour.textContent == '0'){
                addToCart4.style.opacity = '0.6'
                addToCart4.style.pointerEvents = 'none'
            } else{
                addToCart4.style.opacity = '1'
                addToCart4.style.pointerEvents = 'all'
            }
        })

// functionality for carousel

// initializing product image to show carousel on click
alexanderProductImage.addEventListener('click', (e) => {
    productCarousel.classList.remove('carousel-closed')
    productCarousel.classList.remove('hidden')
    productCarousel.classList.add('carousel-open')
    document.body.style.overflowY = 'hidden'
})

//for balenciaga
balenciagaProductImage.addEventListener('click', ()=>{
    balenciagaCarousel.classList.remove('carousel-closed')
    balenciagaCarousel.classList.remove('hidden')
    balenciagaCarousel.classList.add('carousel-open')
    document.body.style.overflowY = 'hidden'
})

//for offwhite
offWhiteProductImage.addEventListener('click', ()=>{
    offWhiteCarousel.classList.remove('carousel-closed')
    offWhiteCarousel.classList.remove('hidden')
    offWhiteCarousel.classList.add('carousel-open')
    document.body.style.overflowY = 'hidden'
})

//for veja 
vejaProductImage.addEventListener('click', ()=>{
    vejaCarousel.classList.remove('carousel-closed')
    vejaCarousel.classList.remove('hidden')
    vejaCarousel.classList.add('carousel-open')
    document.body.style.overflowY = 'hidden'
})



closeCarousel.forEach(btn =>{
    btn.addEventListener('click', (e) => { 
        productCarousel.classList.add('carousel-closed')
        productCarousel.classList.remove('carousel-open')
        balenciagaCarousel.classList.add('carousel-closed')
        balenciagaCarousel.classList.remove('carousel-open')
        offWhiteCarousel.classList.add('carousel-closed')
        offWhiteCarousel.classList.remove('carousel-open')
        vejaCarousel.classList.add('carousel-closed')
        vejaCarousel.classList.remove('carousel-open')
        document.body.style.overflowY = 'auto'
    })    
})
// functionality for changing product image
// product image
for (let i = 0; i < carouselThumbnails.length; i++) {
    const element = carouselThumbnails[i]
    element.addEventListener('click', () => {
        carouselProductImage.forEach(image =>{
            if(image.classList.contains('active')){
                image.firstElementChild.setAttribute('src', alexanderImgSrc[i])
            }
        })
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

//for balenciaga
for (let i = 0; i < balenciagaCarouselTumbnails.length; i++) {
    const element = balenciagaCarouselTumbnails[i]
    element.addEventListener('click', () => {
        balenciagaCarouselImage.forEach(image =>{
            if(image.classList.contains('active')){
                image.firstElementChild.setAttribute('src', balenciagaImgSrc[i])
            }
        })
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

//for offwhite
for (let i = 0; i < offWhiteCarouselThumbnails.length; i++) {
    const element = offWhiteCarouselThumbnails[i]
    element.addEventListener('click', () => {
        offWhiteCarouselImage.forEach(image =>{
            if(image.classList.contains('active')){
                image.firstElementChild.setAttribute('src', offWhiteImgSrc[i])
            }
        })
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

//for veja
for (let i = 0; i < vejaCarouselThumbnails.length; i++) {
    const element = vejaCarouselThumbnails[i]
    element.addEventListener('click', () => {
        vejaCarouselImage.forEach(image =>{
            if(image.classList.contains('active')){
                image.firstElementChild.setAttribute('src', vejaImgSrc[i])
            }
        })
        element.classList.add('active-thumbnail') 
        getSiblings(element).forEach(e => {
            e.classList.remove('active-thumbnail')
        });
    })
}

   