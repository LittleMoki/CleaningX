const burger = document.querySelector('.header__burger')
const navList = document.querySelector('.header__burger_nav__list')
burger.addEventListener('click', () => {
	navList.classList.toggle('active')
})
