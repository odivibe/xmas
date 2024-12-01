// Music Player
const audio = new Audio("christmas-music.mp3");
audio.loop = true; // Enable looping

// Automatically play music on page load
window.addEventListener("load", () => {
    audio.play().catch((error) => {
        console.log("Autoplay was blocked:", error);
        document.getElementById("enableSound").style.display = "block";
    });
});

// Enable sound button
document.getElementById("enableSoundBtn").addEventListener("click", () => {
    audio.play();
    document.getElementById("enableSound").style.display = "none";
});

// Play and pause music manually
document.getElementById("playMusic").addEventListener("click", () => {
    audio.play();
});

document.getElementById("pauseMusic").addEventListener("click", () => {
    audio.pause();
});

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const message = urlParams.get("message");

// Display personalized message
if (name && message) {
    document.getElementById("wishMessage").innerText = `${message} - From ${name}`;
}

// Button to create a new wish
document.getElementById("createWishBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});

