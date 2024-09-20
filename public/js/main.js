// Audio
window.addEventListener("click", () => {
  document.getElementById("song").play();
});

// Swipe
const nextButton = document.getElementById("next");
const birthdaySection = document.getElementById("birthday");
const beautifulSection = document.getElementById("beautiful");

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  birthdaySection.classList.replace("flex", "hidden");
  beautifulSection.classList.replace("hidden", "flex");
});
