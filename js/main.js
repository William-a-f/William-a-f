const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible");

	if (navMenu.classList.contains("nav-menu_visible")) {
		navToggle.setAttribute("aria-label", "Close menu");
	} else {
		navToggle.setAttribute("aria-label", "Open menu");
	}
});

const menuLinks =document.querySelectorAll('.nav-menu a[href^="/"]');

document.addEventListener('DOMContentLoaded', function() {
	const path =
	window.location.pathname;

	const menuLinks = document.querySelectorAll('nav-menu a');

	menuLinks.forEach(link => {
		if (link.getAttribute('href') === path) {
			link.classList.add('selected');
		}
	});
});
// const observer = new IntersectionObserver((entries) => {
	// entries.forEach(entry => {
		// const id = entry.target.getAttribute("section");
		// const menuLink = document.querySelector(`.nav-menu a[href="/${id}"]`)
// 
		// if (entry.isIntersecting) {
			// document.querySelector(".nav-menu a.selected").classList.remove("selected");
			// menuLink.classList.add("selected");
		// }
	// });
// }, {rootMargin: "0px"});

menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", function() {
		navMenu.classList.remove("nav-menu_visible");
	})

	const hash =menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
	
	let warnings = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	if(nombre.value.length <1){
		warnings += `Please write your name. <br>`
		entrar = true
	}
	console.log(regexEmail.test(email.value));
	if(!regexEmail.test(email.value)){
		warnings += `Invalid e-mail address. <br>`
		entrar = true
	}
	if(message.value.length <5){
		warnings += `You haven’t written a message, please check and try again. <br>`
		entrar = true
	}
	if(entrar){
		e.preventDefault()
		parrafo.innerHTML = warnings
	}
	else{
		parrafo.innerHTML = "Sent"
	}
});