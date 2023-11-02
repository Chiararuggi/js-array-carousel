imagesPath = [
    "./img/04.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/01.webp"
];

let imgInsert = "";
for (let i = 0; i < imagesPath.length; i++) {
    const percorsoImmagine = imagesPath[i];
    imgInsert += `<img src="${percorsoImmagine}">`;
}
document.getElementById("my-id").innerHTML = imgInsert;


let currentImg = 0;
const images = document.querySelectorAll("#my-id img");
images[currentImg].classList.add("active");




document.getElementById("upButton").addEventListener("click", function () {
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg++;
        images[currentImg].classList.add("active");
    }
});

document.getElementById("downButton").addEventListener("click", function () {
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
});

