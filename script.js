// Reproductor de audio
const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = "▶"; 
    } else {
        audio.play();
        playBtn.innerHTML = "⏸"; 
    }
    isPlaying = !isPlaying;
});

// Cuenta regresiva apuntando al 10 de Octubre de 2026 (a las 8:00 PM)
const countDownDate = new Date("Oct 10, 2026 20:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h3 class='cursive-text medium pink-text'>¡Llegó el gran día!</h3>";
    }
}, 1000);