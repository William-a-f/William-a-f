document.addEventListener('DOMContentLoaded', function() {
	const path =
	window.location.pathname;
	if (path === '/' || path.endsWith('/index.html')) {
		const logo =
		document.querySelector('.home-page .logo-img');
      if (logo) {
		logo.classList.add('visible');
    }
	}
});