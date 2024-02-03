var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var head = document.getElementById("start")
var main = document.getElementById("info");
var footer = document.getElementById("foot")

function myFunction() {
    if (video.paused) {
        video.style.display = 'block'
        main.style.display = 'none'
        footer.style.display = 'none'
        video.play();
        btn.innerHTML = "View news";
    } else {
        video.pause();
        btn.innerHTML = "Watch stars";
        video.style.display = 'none'
        main.style.display = 'block'
        footer.style.display = 'flex'
    }
}