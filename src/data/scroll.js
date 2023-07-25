window.addEventListener('scroll', () =>{
    const navScroll = document.getElementById('nav')

            if(window.scrollY >= 600){
                navScroll.classList.add('header-bg')
                navScroll.classList.add('shadow-header')
            }else{
                navScroll.classList.remove('header-bg')
                navScroll.classList.remove('shadow-header')
            }
})









