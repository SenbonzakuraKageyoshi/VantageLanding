const headerNav = document.querySelector('.header__nav');
const introBlock = document.querySelector('.section-top__intro')

window.addEventListener('click', (e) => {
    if(e.target.className === 'burger-btn'){
        headerNav.classList.toggle('active')
    }
})

window.addEventListener('load', () => {
    setTimeout(() => {
        introBlock.style.opacity = '1'
    }, 500)
})