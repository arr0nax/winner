document.addEventListener("DOMContentLoaded", function(){
    console.log('hello')
    audio = document.getElementById("song")
    audio.play()
    video = document.getElementById("video")
    video.play()

    wincontainer = document.getElementById("wincontainer")

    let maxleft = window.screen.width * 2.6
    let looptime = 10; // 10s loop time on falling

    for (var i = 0; i<100; i++) {
        let rain = document.createElement("img")
        rain.src = "money.gif"
        rain.className = "rain fall"
        rain.style.pointerEvents = "none"
        rain.style.top = "-70px"
        rain.style.height = "70px"
        rain.style.width = "50px"
        rain.style.opacity = "50%"
        rain.style.animationDelay = Math.random() * looptime + "s";
        rain.style.left = Math.random() * maxleft + "px";
        wincontainer.appendChild(rain)

    }

});
