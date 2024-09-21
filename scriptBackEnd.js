// Handles Button Inputs
// Make Pointer Handlers to Buttons
navbarButtonOneHandler = document.getElementById("navbarButtonOne");
navbarButtonTwoHandler = document.getElementById("navbarButtonTwo");
navbarButtonThreeHandler = document.getElementById("navbarButtonThree");
navbarButtonFourHandler = document.getElementById("navbarButtonFour");

// Make Pointer Handlers to Input Fields
outputTextHandler = document.getElementById("outputText");
inputTextHandler = document.getElementById("inputText");
submitButtonHandler = document.getElementById("submitButton");

// Event Listeners
// Make Buttons Event Listener
navbarButtonOneHandler.addEventListener("click", () => {
  console.log("1");
});
navbarButtonTwoHandler.addEventListener("click", () => {
  console.log("2");
});
navbarButtonThreeHandler.addEventListener("click", () => {
  console.log("3");
});
navbarButtonFourHandler.addEventListener("click", () => {
  console.log("4");
});

// vOCAbuLArY
generation_alpha_vocabulary = [
  [["catchy", "enjoyable"], "bop"],
  [["delicious", "flavorful"], "bussin"],
  [["lie", "exagerrate"], "cap"],
  [["lying", "exagerrating"], "capping"],
  [["popularity", "influence"], "clout"],
  [["embarassing", "uncomfortable"], "cringe"],
  [["style"], "drip"],
  [["bite"], "fanum tax"],
  [["fact", "facts", "truth"], "fax"],
  [["excellent", "amazing", "impressive"], "fire"],
  [["boast", "showoff"], "flex"],
  [["good", "cool"], "gucci"],
  [["ignore", "ignoring", "disappear"], "ghost"],
  [["exciting", "amazing", "impressive"], "lit"],
  [["secretly", "subtly"], "lowkey"],
  [["mediocre", "average"], "mid"],
  [["see"], "peep"],
  [["charm", "charisma"], "rizz"],
  [["bitter", "upset", "resentful"], "salty"],
  [["wow", "whoa"], "sheesh"],
  [["surprised", "shocked", "stunned"], "shook"],
  [["desperate", "eager"], "thirsty"],
  [["suspicious"], "sus"],
  [["excel"], "slay"],
  [["people"], "sigmas"],
];

// Make Input Field Event Listener
submitButtonHandler.addEventListener("click", () => {
  // Get Input Text Value
  sentence = inputTextHandler.value;
  words = sentence.toLowerCase().split(" ");

  // Go through each word and determine if they have an equivalent
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < generation_alpha_vocabulary.length; j++) {
      for (let k = 0; k < generation_alpha_vocabulary[j][0].length; k++) {
        if (words[i] == generation_alpha_vocabulary[j][0][k]) {
          words[i] = generation_alpha_vocabulary[j][1];
        }
      }
    }
  }

  // Output Text
  output_sentence = "";
  for (let i = 0; i < words.length; i++) {
    output_sentence = output_sentence + words[i];
  }

  outputTextHandler.innerHTML =
    "Brainrot Equivalent Sentence: " + output_sentence;

  console.log(words);
});
