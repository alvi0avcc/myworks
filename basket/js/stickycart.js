function StickyCart( nameElement = 'body', basePoint = 590 ){
    const mainElement = document.querySelector(nameElement);
    console.log(mainElement);
    const container = document.createElement('div');
    container.classList.add('container');
    const cart = document.createElement('div');
    cart.classList.add('cart');

    cart.innerHTML=`
    <div>
        <div>
            <img src="img/example-small.png" alt="">
        </div>
        <div class="description">
            <p>BrainMax LAUF Energy, Citrokola, 1000 g Cluster Dextrin® s citrulinem a elektrolyty, doplněk stravy</p>
            <p><b>799 Kč</b></p>
        </div>
    </div>
        <a class="cart-button" href="">
            <img src="img/basket.png" alt="" height="20px">
            <span>Přidat do košíku<span/>
        </a>
    `;

    container.appendChild(cart);
    mainElement.prepend(container);

    document.addEventListener('scroll', ()=>{
        if ( window.scrollY > basePoint ){
            cart.classList.add('cart-show');
        } else {
            cart.classList.remove('cart-show');
        }
    })

}

StickyCart( 'body', 250 );