const menuBtn = document.querySelector('.burger__btn');

menuBtn.addEventListener('click',()=> {
    menuBtn.classList.toggle('burger--transform');	
});

navItem.forEach(element => {
	element.addEventListener("click",()=> {
		menuBtn.classList.remove('burger--transform');
	});
});