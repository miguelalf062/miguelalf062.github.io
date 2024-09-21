const introTitle = document.getElementById("introText");
const card = document.getElementById("card");
const cardImg = document.getElementById("cardImg");

const phrases = [
  "GET OUT OF MY HEAD",
  "succ on deez nuts",
  "I Love CP (COD points)",
  "6 million members?",
  "ITS the JEWS!!!",
  "Endorsing Racism since 1929",
  "Chinese Communist Party",
  "laplapin mo ko",
  "girlfriend's suitcase or portable abortion clinic?",
  "The IRS when they see you making honest money with your own time and effort",
  "9/11 jews did it jet fuel cant melt steel beams",
  "Lets go Gambling !",
  "109 Countries",
];

const imageURLnames = [
  "airfryer.PNG",
  "anime.PNG",
  "anime2.png",
  "anime3.PNG",
  "gio.jpg",
  "gio2.gif",
  "huh.PNG",
  "oorah.gif",
  "patrick.jpg",
  "tiny.PNG",
];

const colors = ["#FF1DCE", "#15F4EE", "#FFF700", "#FF0800"];

setInterval(() => {
  let randomIndex = Math.floor(Math.random() * phrases.length);
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  introTitle.textContent = `"${phrases[randomIndex]}"`;
  introTitle.style.color = `${colors[randomColorIndex]}`;

  setTimeout(() => {
    introTitle.textContent = "A site where you we put anything we want";
    introTitle.style.color = `white`;
  }, 500);
}, 3000);

card.onmouseenter = () => {
  cardImg.style.display = "block";
  let randomImageIndex = Math.floor(Math.random() * imageURLnames.length);
  cardImg.src = `./images/gachaImages/${imageURLnames[randomImageIndex]}`;
};

card.onmouseleave = () => {
  cardImg.style.display = "none";
  cardImg.src = `./images/gachaImages/cardBack.png`;
};
