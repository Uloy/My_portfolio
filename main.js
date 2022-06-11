document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.add('show-menu')
})

document.getElementById('nav-close').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('show-menu')
})

window.addEventListener('scroll', () => {
    const scrollY = this.pageYOffset;
    if(scrollY > 20)
        document.querySelector('header').classList.add('header_pri')
    else
        document.querySelector('header').classList.remove('header_pri')
    
    if(scrollY > 200){
        document.getElementById('socials').classList.add('show__socials')
        document.getElementById('scroll-top').classList.add('show__scroll-top')
    }
    else{
        document.getElementById('socials').classList.remove('show__socials')
        document.getElementById('scroll-top').classList.remove('show__scroll-top')
    }
})  




const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')
console.log(sections)
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal('.nav__logo', {reset: false})
sr.reveal('.nav__item', {interval: 200, reset: false, delay: 200})
sr.reveal('.icon__title, .text__title', {interval: 200})
sr.reveal('.home__title, .home__subtitle, .home a', {interval: 200})
sr.reveal('.about__img, .skills__data, .contact__text', {origin: 'left', duration: 3000, delay: 200})
sr.reveal('.about__info, .skills__img, .contact__form', {origin: 'right', duration: 3000, delay: 200})
sr.reveal('.services .services__content', {interval: 200, delay: 200})
sr.reveal('.interested__container', {delay: 200})
sr.reveal('.footer__box, .credit', {interval: 200})