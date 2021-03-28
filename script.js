//Hamburger Menu Toggler
const navSlide = () => {
	const hamburger = document.querySelector('.hamburger');
	const dropdown = document.querySelector('.dropdown');
	const nav = document.querySelector('nav ul.menu');
	const navLinks = document.querySelectorAll('ul.menu li');

	hamburger.addEventListener('click', () => {

		nav.classList.toggle('nav-collapsed');
		dropdown.classList.toggle('enabled');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 40}s`;
			}
		});

		hamburger.classList.toggle('toggle');
	});
}

navSlide();

//Dropdown Toggler - Expertize
function Expertize() {
	var onediv = document.getElementById('expertize');
	var divs = ['expertize', 'industrii', 'despre-noi', 'cariere'];

	for (var i = 0; i < divs.length; i++) {
		if (onediv != document.getElementById(divs[i])) {
			document.getElementById(divs[i]).style.display = 'none';
		}
	}
	onediv.style.display = 'block';
}

//Dropdown Toggler - Industrii
function Industrii() {
	var onediv = document.getElementById('industrii');
	var divs = ['expertize', 'industrii', 'despre-noi', 'cariere'];

	for (var i = 0; i < divs.length; i++) {
		if (onediv != document.getElementById(divs[i])) {
			document.getElementById(divs[i]).style.display = 'none';
		}
	}
	onediv.style.display = 'block';
}

//Dropdown Toggler - Despre noi
function Desprenoi() {
	var onediv = document.getElementById('despre-noi');
	var divs = ['expertize', 'industrii', 'despre-noi', 'cariere'];

	for (var i = 0; i < divs.length; i++) {
		if (onediv != document.getElementById(divs[i])) {
			document.getElementById(divs[i]).style.display = 'none';
		}
	}
	onediv.style.display = 'block';
}

//Dropdown Toggler - Cariere
function Cariere() {
	var onediv = document.getElementById('cariere');
	var divs = ['expertize', 'industrii', 'despre-noi', 'cariere'];

	for (var i = 0; i < divs.length; i++) {
		if (onediv != document.getElementById(divs[i])) {
			document.getElementById(divs[i]).style.display = 'none';
		}
	}
	onediv.style.display = 'block';
}