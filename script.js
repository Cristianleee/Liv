const yesButton = document.getElementById('yesButton');
const heartContainer = document.getElementById('heartContainer');
const heart = document.getElementById('heart');
const loveLetter = document.getElementById('loveLetter');

let size = 50;

yesButton.addEventListener('click', () => {
    heartContainer.classList.remove('hidden');
    size += 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    if (size >= 300) { // Размер, при котором сердце "лопнет"
        heart.style.display = 'none';
        loveLetter.classList.remove('hidden');
    }
});