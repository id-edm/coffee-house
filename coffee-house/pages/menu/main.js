const menuBtn = document.querySelector('.burger__btn');
const menuMobile = document.querySelector('.nav__menu');
const navItem = menuMobile.querySelectorAll('.nav__menu_item');
const body = document.body;

menuBtn.addEventListener('click',()=> {
    menuBtn.classList.toggle('burger--transform');
	menuMobile.classList.toggle('burger--open');
	body.classList.toggle('scroll--stop')	
});

navItem.forEach(element => {
	element.addEventListener("click",()=> {
		menuBtn.classList.remove('burger--transform');
		menuMobile.classList.remove('burger--open');
		body.classList.remove('scroll--stop')
	});
});