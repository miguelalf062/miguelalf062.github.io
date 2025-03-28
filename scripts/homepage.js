const candidatesButton = document.getElementById("candidatesButton");
const helpMeDecideButton = document.getElementById("helpMeDecideButton");
const homepage = document.getElementById("homepage");
const app = document.getElementById("app");
const homepageButton = document.getElementById("homepageButton")

candidatesButton.addEventListener("click", () => {
    homepage.style.display = "none";
    app.style.display = "flex"
})

helpMeDecideButton.addEventListener("click", () => {
    voteDecidePrompt();
})

homepageButton.addEventListener("click", () => {
    homepage.style.display = "flex";
    app.style.display = "none"
})


