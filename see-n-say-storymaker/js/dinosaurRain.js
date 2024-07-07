
function createDinosaur() {
	const dinosaur = document.createElement('div');
	dinosaur.classList.add('dinosaur');
	dinosaur.style.left = `${Math.random() * 100}vw`;
	dinosaur.style.animationDuration = `${Math.random() * 3 + 2}s`; 
	document.getElementById('dinosaurRain').appendChild(dinosaur);

	dinosaur.addEventListener('animationend', () => {
		dinosaur.remove();
	});
}

setInterval(createDinosaur, 500);
