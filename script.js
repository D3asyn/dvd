const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const images = [
    'img/dvdlogo-01.svg',
    'img/dvdlogo-02.svg',
    'img/dvdlogo-03.svg',
    'img/dvdlogo-04.svg',
    'img/dvdlogo-05.svg',
    'img/dvdlogo-06.svg'
];

const logo = {
    x: 200,
    y: 200,
    dx: 2,
    dy: 2,
    width: 200,
    height: 100,
    img: new Image(),
    currentImageIndex: 0
};

logo.img.src = images[logo.currentImageIndex];

function drawLogo(logo) {
    ctx.drawImage(logo.img, logo.x, logo.y, logo.width, logo.height);
}

function updateLogo(logo) {
    if (logo.x + logo.width > canvas.width || logo.x < 0) {
        logo.dx = -logo.dx;
        logo.currentImageIndex = (logo.currentImageIndex + 1) % images.length;
        logo.img.src = images[logo.currentImageIndex];
    }

    if (logo.y + logo.height > canvas.height || logo.y < 0) {
        logo.dy = -logo.dy;
        logo.currentImageIndex = (logo.currentImageIndex + 1) % images.length;
        logo.img.src = images[logo.currentImageIndex];
    }

    logo.x += logo.dx;
    logo.y += logo.dy;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLogo(logo);
    updateLogo(logo);
    requestAnimationFrame(animate);
}

animate();