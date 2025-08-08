const button = document.getElementById("theriButton");
const stage = document.querySelector(".stage");
const wind = document.querySelector(".wind");

const punches = [
  "sounds/punch1.mp3",
  "sounds/punch2.mp3",
  "sounds/punch3.mp3"
];

button.addEventListener("click", () => {
  // Screen shake effect
  stage.classList.add("shake");
  wind.style.opacity = 0.4;

  // Play random punch dialogue
  const audio = new Audio(punches[Math.floor(Math.random() * punches.length)]);
  audio.play();

  // Remove effects after a while
  setTimeout(() => {
    stage.classList.remove("shake");
    wind.style.opacity = 0;
  }, 1500);
});
