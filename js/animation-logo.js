document.addEventListener('DOMContentLoaded', function() {
		const logo =
		document.querySelector('.home-page .logo-img');
		const menu =
		document.querySelector('.home-page .nav');
		const footer =
		document.querySelector('.home-page .social');

	
	if (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
				setTimeout(() => {
						logo.classList.add('visible');
    		}, 100);

				setTimeout(() => {
					// menu.classList.remove('hidden');
					menu.classList.add('visible');

				}, 1500);

				setTimeout(() =>{
					// footer.classList.remove('hidden');
					footer.classList.add('visible');
				}, 2500);
			}
});