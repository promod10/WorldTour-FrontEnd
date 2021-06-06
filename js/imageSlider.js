var x = 0;
var heroImages = [];

heroImages[0] = document.getElementById("heroImage1");
heroImages[1] = document.getElementById("heroImage2");
heroImages[2] = document.getElementById("heroImage3");

function changeImage() {
    document.hasChildNodes.src = heroImages[x];
    if (x < heroImages.length - 1) {
        x++;
    } else {
        x = 0;
    }
    setTimeout(changeImage(), 5000);
}
window.onload = changeImage;
