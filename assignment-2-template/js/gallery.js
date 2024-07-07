
document.addEventListener('DOMContentLoaded', () => {
	const featured = document.getElementById('featured');
	const caption = document.getElementById('caption');
	const thumbnails = document.getElementById('thumbnails').getElementsByTagName('img');

	for (let thumbnail of thumbnails) {
		thumbnail.classList.add('inactive');

		thumbnail.addEventListener('click', function() {
			for (let thumb of thumbnails) {
				thumb.classList.remove('active');
				thumb.classList.add('inactive');
			}

			this.classList.remove('inactive');
			this.classList.add('active');

			const largeImage = this.getAttribute('data-large');
			const imageCaption = this.getAttribute('data-caption');
			featured.setAttribute('src', largeImage);
			caption.textContent = imageCaption;
		});
	}

	thumbnails[0].classList.remove('inactive');
	thumbnails[0].classList.add('active');
});
