document.addEventListener('DOMContentLoaded', function () {
    const contentPanel = document.querySelector('.content-panel');
    const contents = document.querySelectorAll('.content');
    const tottiText = document.querySelector('.totti-text');
	const name = document.querySelector('.name');
	const nameSmall = document.querySelector('.name-small');
	const contact = document.querySelector('.contact');

    name.addEventListener('click', function() {
		window.scrollTo(0, 0);
		location.reload();
	});



	window.addEventListener('scroll', function () {
		const scrollY = window.scrollY;

		if (scrollY > 100) {
			name.style.fontSize = "26px";
			contact.classList.add('fixed');
		} else if (scrollY > 50) {
			name.style.fontSize = "60px";
			contact.classList.remove('fixed');
		} else {
			name.style.fontSize = "60px";
			contact.classList.remove('fixed');
		}
	});


    const firefly = document.querySelector('.firefly');

	let posX = Math.random() * 90;
	let posY = Math.random() * 90;
	let speedX = (Math.random() - 0.5) * 2;
	let speedY = (Math.random() - 0.5) * 2;

	function moveFirefly() {
		posX += speedX;
		posY += speedY;
		if (posX <= 0 || posX >= 90) speedX *= -1;
		if (posY <= 0 || posY >= 90) speedY *= -1;
		firefly.style.left = `${posX}%`;
		firefly.style.top = `${posY}%`;
		requestAnimationFrame(moveFirefly);
	}

	function changeDirection() {
		speedX = (Math.random() - 0.5) * 2;
		speedY = (Math.random() - 0.5) * 2;

		setTimeout(changeDirection, 2000);
	}
	moveFirefly();
	changeDirection();
	
	const portfolioText = document.querySelector('.portfolio-text');
    const letters = portfolioText.querySelectorAll('span');

    portfolioText.addEventListener('mouseenter', () => {
        letters.forEach(letter => {

            const randomX = (Math.random() - 0.5) * 300; 
            const randomY = (Math.random() - 0.5) * 300; 
            const randomRotate = (Math.random() - 0.5) * 720;

            letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
            letter.style.opacity = '0';
        });

        setTimeout(() => {
            letters.forEach(letter => {
                letter.style.transform = 'translate(0, 0) rotate(0deg)';
                letter.style.opacity = '1';
            });
        }, 2000);
    });
});