// Music Player
const audio = new Audio("christmas-music.mp3");
audio.loop = true; // Enable looping

// Automatically play music on page load
window.addEventListener("load", () => {
    audio.play().catch((error) => {
        console.log("Autoplay was blocked:", error);
        document.getElementById("enableSound").style.display = "block";
    });

    // Show main app after curtain animation
    setTimeout(() => {
        document.getElementById("curtain").style.display = "none";
        document.getElementById("app").classList.remove("hidden");
    }, 3000); // Match the animation duration
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

document.getElementById("wishForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const customMessage = document.getElementById("customMessage").value || message;

    // Construct the link to share
    const baseUrl = window.location.origin + window.location.pathname.replace("index.html", ""); // Absolute URL base
    const url = `${baseUrl}wishPage.html?name=${encodeURIComponent(name)}&message=${encodeURIComponent(customMessage)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Check out this Christmas wish: " + url)}`;

    // Redirect to WhatsApp share link
    window.open(whatsappUrl, "_blank");
});

