function StickyCart( idElement = 'header', item ){
    const prevElement = document.getElementById(idElement);
    console.log(prevElement);
    
    const cart = document.createElement('div');
    cart.classList.add('cart');
    prevElement.parentNode.insertBefore(cart, prevElement.nextSibling);

    document.addEventListener('scroll', ()=>{
        if ( window.scrollY > 590 ){
            cart.classList.add('cart-show');
        } else {
            cart.classList.remove('cart-show');
        }
    })
}

StickyCart();