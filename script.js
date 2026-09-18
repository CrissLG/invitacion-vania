// REPRODUCTOR
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

// CUENTA REGRESIVA
const countDownDate = new Date("Oct 10, 2026 19:00:00").getTime();

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
        document.getElementById("countdown").innerHTML = "<h3 class='titulo-vino cursiva'>¡Llegó el gran día!</h3>";
    }
}, 1000);

// ANIMACIONES SCROLL
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -30px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { return; } 
        else { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });
