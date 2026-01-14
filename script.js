function setRandomBackground() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

function setRandomImage() {
    const images = [
        "bangkok.jpg",
        "barselona.jpg",
        "dubai.jpg",
        "istanbul.jpg",
        "kopenhag.jpg",
        "kyoto.jpg",
        "londra.jpg",
        "newyork.jpg",
        "paris.jpg",
        "roma.jpg"
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById('main-random-img').src = images[randomIndex];
}

function toggleImage(imgId, show) {
    const img = document.getElementById(imgId);
    if (show) {
        img.style.visibility = "visible";
    } else {
        img.style.visibility = "hidden";
    }
}

window.onload = function() {
    setRandomBackground();
    setRandomImage();
};