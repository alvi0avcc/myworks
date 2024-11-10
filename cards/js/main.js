// custom-select
function CustomSelectShow(){
    const buttonSelect = document.querySelector('.button-select');
    buttonSelect.addEventListener('click', ()=>{
        const  select = document.querySelector('.block-list-select');
        select.classList.toggle('show');
    });
}

CustomSelectShow();