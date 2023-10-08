const resourceSection = document.getElementById("resource");
const filters = document.getElementById("filters");
const sectionStepTwo = document.getElementById("step-2");
const welcomeSection = document.getElementById("welcome");
const infoText = document.getElementById("info-text");

const giftBox = document.querySelector(".gift-section");
const giftBoxCover = document.querySelector(".click");
// Step 02

setTimeout(() => {
  infoText.classList.remove("hidden");
  giftBox.classList.remove("hidden");
}, 15000);

giftBox.addEventListener("click", () => {
  giftBoxCover.classList.add("gift-open");
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });

    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["🍛", "🌈", "📘", "💡"],
        },
      },
    });

    giftBox.classList.add("gift-section-hide");
    infoText.classList.add("hidden");

    setTimeout(() => {
      resourceSection.classList.remove("hidden");
    }, 1000);
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
});
