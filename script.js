const roles = ["FullStack WebDeveloper", "Game Developer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 2000;

const typingElement = document.querySelector(".typing-animation");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, delayBetweenRoles);
});

function downloadRar() {
    const link = document.createElement('a');
    link.href = 'files/MyCvs.rar'; // Path to the .rar file in your project
    link.download = 'MyCvs.rar'; // The name for the downloaded file
    link.click();
}