window.onload = showPics;
let myPics = new Array('images/cssAnimation.png', 'images/cssSelectors.jpg', 'images/cssProperties.png.jpg');

function showPics() {
    let randomPic = Math.floor(Math.random() * myPics.length);
    document.querySelectorAll('#00, #01, #02').src = myPics[randomPic];}