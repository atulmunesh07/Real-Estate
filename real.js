// nave scroll
window.addEventListener("scroll",function(){
    let navebar= this.document.querySelector(".home-navebar")
    if(this.window.scrollY > 20){
        navebar.classList.add("en-scrolled")

    }
    else{
        navebar.classList.remove("en-scrolled")
    }
})

//nav bar 


//animated to scroll page

const scrollRevealOption ={
    distance:'50px',
    origin:'bottom',
    duration:2000,
    delay:500
}

ScrollReveal().reveal('.left',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.box_1',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.para',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.row_box',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.box_2',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.list_box',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.box',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.home_heading1',{
    ...scrollRevealOption
})
const menuBtn =document.getElementById('nav-menu')
const navList = document.getElementById('nav-list')
const menuIcons = document.querySelector('i')

menuBtn.addEventListener('click',(e)=>{
    navList.classList.toggle('open')

    const isOpen = navList.classList.contains('open')
    menuIcons.setAttribute('class',isOpen? 'ri-close-line':'ri-menu-line')

})
