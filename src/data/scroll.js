window.addEventListener('scroll', () =>{
    const navScroll = document.getElementById('nav')

            if(window.scrollY >= 600){
                navScroll.classList.add('header-bg')
            }else{
                navScroll.classList.remove('header-bg')
            }
})
