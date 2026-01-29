let noIndex = 0;
let yesIndex = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const moodText = document.getElementById('moodText');
const response = document.getElementById('response');
const gallery = document.getElementById('gallery');
yesBtn.addEventListener('click',() => {
    window.location.href = 'yes.html';
});
noBtn.addEventListener('mouseover',() => {
    noBtn.classList.add('shake');

    setTimeout(() => {
        noBtn.classList.remove('shake');
    }, 400);
});

const bgMusic = document.getElementById('byMusic');

document.addEventListener('click', () => {
    bgMusic.play();
}, { once:true});

setInterval(() => {
    const heart= document.createElement('div');
    heart.classList.add('heart');
    heart.style.left= Math.random() *100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
        }, 6000);
},800);


// Messages and pictures for YES clicks 
let yesMessages =[
    'Like you name your bring me Peace❤️',
    'You make my heart skip a beat😊',
    'You are my favorite person in the world🌹',
    'Your smile brighten up my darkest days😍',
    'I appreciate you💯😘'    
];

let yesPics = [
    'images/happy1.jpg',
    'images/happy2.jpg',
    'images/happy3.jpg',
    'images/happy4.jpg',
    'images/happy5.jpg'
];

let noPics = [
    'images/sad1.jpg',
    'images/sad2.jpg'
];