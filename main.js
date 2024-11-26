// Show the birthday message with animation
document.getElementById("startAnimationBtn").addEventListener("click", function () {
    // Add animation
    const container = document.querySelector(".container");
    container.style.animation = "fadeIn 1s ease-in-out";

    // Show the hidden message div
    const messagesDiv = document.getElementById("birthdayMessage");
    messagesDiv.classList.remove("d-none");
});

// Add keyframe animations dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}`;
document.head.appendChild(styleSheet);
