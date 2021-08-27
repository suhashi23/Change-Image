function changeImage() {
    var image = document.getElementById('image');
    if (image.src.match("img2.jpg")) {
        image.src = "img1.jpg";
    }
    else {
        image.src = "img2.jpg";
    }
}