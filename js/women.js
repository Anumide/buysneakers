let alexanderThumbnails = Array.from(document.querySelectorAll('#alexander-thumbnail'))
    alexanderProductImage = document.querySelector('#alexander-main-image img')

let balenciagaTumbnails = Array.from(document.querySelectorAll('#balenciaga-thumbnail'))
    balenciagaProductImage = document.querySelector('#balenciaga-main-image img')

let offWhiteThumbnails = Array.from(document.querySelectorAll('#off-white-thhumbnail'))
    offWhiteProductImage = document.querySelector('#off-white-main-image img')

let vejaThumbnails = Array.from(document.querySelectorAll('#veja-thumbnail'))
    vejaProductImage = document.querySelector('#veja-product-image img')

let alexanderImgSrc = ['./images/alexander-women-product-1.jpg', './images/alexander-women-product-2.jpg', './images/alexander-women-product-3.jpg', './images/alexander-women-product-4.jpg']
    balenciagaImgSrc = ['./images/balenciaga-women-product-1.jpg', './images/balenciaga-women-product-2.jpg', './images/balenciaga-women-product-3.jpg', './images/balenciaga-women-product-4.jpg']
    offWhiteImgSrc = ['./images/off-white-women-product-1.jpg', './images/off-white-women-product-2.jpg', './images/off-white-women-product-3.jpg', './images/off-white-women-product-4.jpg']
    vejaImgSrc = ['./images/veja-women-product-1.jpg', './images/veja-women-product-2.jpg', './images/veja-women-product-3.jpg', './images/veja-women-product-4.jpg']


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