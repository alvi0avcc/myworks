// Swiper function for include into site
function SwiperImgLoading( parentElementId = '', imgPath = '', quantity = 0, hover = true ) {

    let result ={
      parentElementId : parentElementId,
      imgPath: imgPath,
      quantity: quantity,
      message : '',
    };
  
    if (parentElementId == '') {
      result.message += `parentElementId (${parentElementId}) - incorrect. `;
    };
    if (imgPath == '') {
      result.message += `imgPath (${imgPath}) - incorrect. `;
    }
    if ( typeof quantity != 'number'|| quantity <= 0 ){
      result.message += `quantity (${quantity}) - incorrect. `;
    }
  
    if (result.message != '') return result;
  
    const parentElement = document.getElementById(parentElementId);
    for (i=0; i<quantity; i++){
        const slider = document.createElement('div');
        slider.classList.add('swiper-slide');
        slider.setAttribute("lazy", "true");
        const pic = document.createElement('picture');
        const img = document.createElement('img');
        img.src = imgPath+i+'.jpg';

        img.alt = `Slide ${i}`;
        img.loading = 'lazy';

        if ( hover ) {
            img.classList.add('img-hover');

            img.addEventListener('click', ()=>{
            const bigImg = pic.cloneNode(true);
            const cover =  document.createElement('div');
            const main = document.getElementById('main-total');
            const container = document.createElement('div');
            cover.classList.add('big-image-cover');
            container.classList.add('big-image-container');
            bigImg.classList.add('big-image');
            main.appendChild(cover);
            main.appendChild(container);
            container.appendChild(bigImg);

            // удалить себя по клику
            bigImg.addEventListener('click', ()=>{
                bigImg.remove();
                container.remove();
                cover.remove();
            })
            });

        }

        // pic.appendChild(src);
        pic.appendChild(img);
        slider.appendChild(pic);
        parentElement.appendChild(slider);
    }
    return result;
  }
  
  let message = ''; //message for result of loading images (if needed)
  
  // loading images for elevators swiper
  message = SwiperImgLoading( 'swiper-wrapper', 'img/', 24);
  // console.log( 'elevator swiper - ', message );
   
  
  // Swiper
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      slidesPerView: 1,
      loop: true,
      spaceBetween: 5,
      centeredSlides: true,
  
      //adoptation qtn slides for width of screen
      breakpoints: {
        2800: {
          slidesPerView: 11,
        },
        2600: {
          slidesPerView: 10,
        },
        2400: {
          slidesPerView: 9,
        },
        2200: {
          slidesPerView: 8,
        },
        2000: {
          slidesPerView: 7,
        },
        1800: {
          slidesPerView: 6,
        },
        1500: {
          slidesPerView: 5,
        },
        1050: {
          slidesPerView: 4,
        },
        850: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
