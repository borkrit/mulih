const header = document.querySelector('.header');


window.document.addEventListener('scroll', ()=>{
    if(window.scrollY > 140) {
        header.style.background = '#000000cf'

    }else{
        header.style.background = 'transparent'

    }})





