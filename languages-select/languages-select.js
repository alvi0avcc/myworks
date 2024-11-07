
function changeLanguage( language = 'english' ){

    async function loadLanguage() {
        const response = await fetch(`${language}.json`);
        return await response.json();
    }
      
    let lang;
    loadLanguage().then( response => { 
        document.querySelectorAll('[data-text]').forEach( element => {
            element.innerHTML = response[element.getAttribute('data-text')];
        });
    });
}

const languagesSelect = document.querySelector('#languages-select');
languagesSelect.addEventListener('change', (selected)=>{ 
        changeLanguage( selected.target.value );
})

changeLanguage();
