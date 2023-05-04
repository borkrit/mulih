const header = document.querySelector('.header');


window.document.addEventListener('scroll', ()=>{
    if(window.scrollY > 140) {
        header.style.background = '#000000cf'
        header.style.padding = '5px 0'

    }else{
        header.style.background = 'transparent'
        header.style.padding = '32px 0'

    }})





