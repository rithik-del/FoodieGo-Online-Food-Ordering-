
function login() {
  alert("Welcome to SkillSwap! Signup feature coming soon.");
}

function learn(skill) {
  alert("You selected " + skill + "! Start learning today.");
}

const search = document.getElementById("search");
const skillCards = document.querySelectorAll(".skill-card");

search.addEventListener("input", function() {
  const value = search.value.toLowerCase();

  skillCards.forEach(function(card) {
    const name = card.textContent.toLowerCase();

    card.style.display = name.includes(value)
      ? "block"
      : "none";
  });
});
