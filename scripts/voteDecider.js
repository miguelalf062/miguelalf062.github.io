const platformsRaw = [
    {name: "Governance", imgSrc: "data/icons/governance.png", checkBoxNodeID: "governanceCheckBox"},
    {name: "Agriculture", imgSrc: "data/icons/agriculture.png", checkBoxNodeID: "agricultureCheckBox"},
    {name: "Economy", imgSrc: "data/icons/economy.png", checkBoxNodeID: "economyCheckBox"},
    {name: "Education", imgSrc: "data/icons/education.png", checkBoxNodeID: "educationCheckBox"},
    {name: "Environment", imgSrc: "data/icons/environment.png", checkBoxNodeID: "environmentCheckBox"},
    {name: "Geopolitics", imgSrc: "data/icons/geopolitics.png", checkBoxNodeID: "geoPoliticsCheckBox"},
    {name: "Health", imgSrc: "data/icons/health.png", checkBoxNodeID: "healthCheckBox"},
    {name: "Housing", imgSrc: "data/icons/housing.png", checkBoxNodeID: "housingCheckBox"},
    {name: "Illegal Drugs", imgSrc: "data/icons/illegal_drugs.png", checkBoxNodeID: "illegalDrugsCheckBox"},
    {name: "Military", imgSrc: "data/icons/military.png", checkBoxNodeID: "militaryCheckBox"},
    {name: "Politics", imgSrc: "data/icons/politics.png", checkBoxNodeID: "politicsCheckBox"},
    {name: "Power", imgSrc: "data/icons/power.png", checkBoxNodeID: "energyCheckBox"},
    {name: "PWD", imgSrc: "data/icons/pwd.png", checkBoxNodeID: "pwdCheckBox"},
    {name: "Social Welfare", imgSrc: "data/icons/social_welfare.png", checkBoxNodeID: "socialWelfareCheckBox"},
    {name: "Technology", imgSrc: "data/icons/technology.png", checkBoxNodeID: "technologyCheckBox"},
    {name: "Transportation", imgSrc: "data/icons/transportation.png", checkBoxNodeID: "transportationCheckBox"},
    {name: "Women's Rights", imgSrc: "data/icons/women's_rights.png", checkBoxNodeID: "women'sRightsCheckBox"},
    {name: "Infrastructure", imgSrc: "data/icons/infrastructure.png", checkBoxNodeID: "infrastructureCheckBox"},
    {name: "Workforce", imgSrc: "data/icons/workforce.png", checkBoxNodeID: "workForceCheckBox"},
    {name: "Disaster Relief", imgSrc: "data/icons/disasterRelief.png", checkBoxNodeID: "disasterReliefCheckBox"},
    {name: "Animal Welfare", imgSrc: "data/icons/animalWelfare.png", checkBoxNodeID: "animalWelfareCheckBox"},
    {name: "Religion", imgSrc: "data/icons/religion.png", checkBoxNodeID: "religionCheckBox"},

]

let platformsNew = platformsRaw.map(platformItem => {
    return {name: platformItem.name, imgSrc: platformItem.imgSrc, checkBoxNodeID: platformItem.checkBoxNodeID ,checked: false}
})


let hasProjects = false;
let hasHistory = false;
let isIndependent = false; 

function voteDecidePrompt() {
    //main div
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("voteDeciderMainDiv")

    //summon dark cast
    const darkCast = document.createElement("div");
    darkCast.classList.add("darkCast")
    darkCast.addEventListener("click", () => {
        hasProjects = false;
        hasHistory = false;
        isIndependent = false;
        platformsNew = platformsRaw.map(platformItem => {
            return {name: platformItem.name, imgSrc: platformItem.imgSrc, checkBoxNodeID: platformItem.checkBoxNodeID, checked: false}
        })
        mainDiv.remove();
    })
    
    
    //Prompt
    const promptContainer = document.createElement("div");
    promptContainer.classList.add("voteDeciderPromptContainer")

    //First Question
    const promptQuestionContainer1 = document.createElement("div");
    promptQuestionContainer1.setAttribute("id", "promptQuestionContainer1");
    promptQuestionContainer1.classList.add("promptQuestionContainer1")
    promptContainer.appendChild(promptQuestionContainer1);
    //First Question - vote decider texts container
    const promptTextContainer = addElement("div", promptQuestionContainer1, {class:"promptTextContainer"});
    addElement("h3", promptTextContainer, {textContent: "Vote Decider", class:"promptTitle"})
    addElement("h1", promptTextContainer, {textContent: "Pick which Platforms you want a candidate has", class: "promptQuestion1"})
    addElement("h1", promptTextContainer, {textContent: "This will filter out candidates based on your choice of platforms. e.g: Infrastructure, Health, Social Welfare...", class: "promptDescription1"})
    const promptQuestion1button = addElement("button", promptTextContainer, {class: "promptQuestion1button", id:"promptQuestion1button", textContent: "Proceed"});
    //First Question - vote decider selector
    const platformSelectorContainer = addElement("div", promptQuestionContainer1, {class:"platformSelectorContainer"})

    platformsNew.forEach(platformItem => {

        const platformItemCard = addElement("div", platformSelectorContainer, {class: "platformCard"});
        const platformItemCardImage = addElement("img", platformItemCard, {class: "platformCardImage", src: platformItem.imgSrc});
        platformItemCardImage.setAttribute("draggable", "false");
        addElement("h1", platformItemCard, {class: "platformCardTitle", textContent: platformItem.name});
        platformItemCard.addEventListener("click", () => {
            if (platformItem.checked) {
                platformItem.checked = false;
                platformItemCard.classList.remove("platformItemSelected");
            }   else {
                platformItem.checked = true;
                platformItemCard.classList.add("platformItemSelected");
            }
        });
    })
    promptQuestion1button.addEventListener("click", () => {
        promptQuestionContainer1.style.display = "none";
        promptQuestionContainer2.style.display = "grid";
    })

    //Second Question
    const promptQuestionContainer2 = document.createElement("div");
    promptQuestionContainer2.setAttribute("id", "promptQuestionContainer2");
    promptQuestionContainer2.classList.add("promptQuestionContainer1")
    promptQuestionContainer2.style.display = "none"; // prevent from showing initially
    promptContainer.appendChild(promptQuestionContainer2);
    //Second Question - vote decider texts container
    const promptTextContainer2 = addElement("div", promptQuestionContainer2, {class:"promptTextContainer"});
    addElement("h3", promptTextContainer2, {textContent: "Vote Decider", class:"promptTitle"})
    addElement("h1", promptTextContainer2, {textContent: "Do you want your Candidate to have Past/Planned Projects?", class: "promptQuestion1"})
    addElement("h1", promptTextContainer2, {textContent: "This will filter out candidates that had done or plans any projects", class: "promptDescription1"})
    //Second Question - vote decider buttons
    const platformSelectorContainer2 = addElement("div", promptQuestionContainer2, {class:"platformSelectorContainer2"})
    const noProjectsChoiceButton = addElement("div", platformSelectorContainer2, {class: "promptQuestion2Button"});
    addElement("h1", noProjectsChoiceButton, {textContent: "Does not Matter"});
    const hasProjectsChoiceButton = addElement("div", platformSelectorContainer2, {class: "promptQuestion2Button"});
    addElement("h1", hasProjectsChoiceButton, {textContent: "Has Plans/built Projects"});
    noProjectsChoiceButton.addEventListener("click", (event) => {
        hasProjects = false;
        event.stopPropagation();
        setTimeout(() => {
            promptQuestionContainer2.style.display = "none";
            promptQuestionContainer3.style.display = "grid";
        },0)
    })
    hasProjectsChoiceButton.addEventListener("click", (event) => {
        hasProjects = true;
        event.stopPropagation();
        setTimeout(() => {
            promptQuestionContainer2.style.display = "none";
            promptQuestionContainer3.style.display = "grid";
        },0)
    })
    //Third Question
    const promptQuestionContainer3 = document.createElement("div");
    promptQuestionContainer3.setAttribute("id", "promptQuestionContainer3");
    promptQuestionContainer3.classList.add("promptQuestionContainer1")
    promptQuestionContainer3.style.display = "none";// prevent from showing initially
    promptContainer.appendChild(promptQuestionContainer3);
    //Third Question - vote decider texts container
    const promptTextContainer3 = addElement("div", promptQuestionContainer3, {class:"promptTextContainer"});
    addElement("h3", promptTextContainer3, {textContent: "Vote Decider", class:"promptTitle"})
    addElement("h1", promptTextContainer3, {textContent: "Do you want your Candidate to have past running history?", class: "promptQuestion1"})
    addElement("h1", promptTextContainer3, {textContent: "This will filter out candidates that has past running history", class: "promptDescription1"})
    //Third Question - vote decider buttons
    const platformSelectorContainer3 = addElement("div", promptQuestionContainer3, {class:"platformSelectorContainer2"})
    const noHistoryChoiceButton = addElement("div", platformSelectorContainer3, {class: "promptQuestion3Button"});
    addElement("h1", noHistoryChoiceButton, {textContent: "Does not Matter"});
    const hasHistoryChoiceButton = addElement("div", platformSelectorContainer3, {class: "promptQuestion3Button"});
    addElement("h1", hasHistoryChoiceButton, {textContent: "Has Running History"});
    noHistoryChoiceButton.addEventListener("click", (event) => {
        hasHistory = false;
        event.stopPropagation();
        setTimeout(() => {
            promptQuestionContainer3.style.display = "none";
            promptQuestionContainer4.style.display = "grid";
        },0)
    })
    hasHistoryChoiceButton.addEventListener("click", (event) => {
        hasHistory = true;
        event.stopPropagation();
        setTimeout(() => {
            promptQuestionContainer3.style.display = "none";
            promptQuestionContainer4.style.display = "grid";
        },0)
    })

    //Fourth Question
    const promptQuestionContainer4 = document.createElement("div");
    promptQuestionContainer4.setAttribute("id", "promptQuestionContainer4");
    promptQuestionContainer4.classList.add("promptQuestionContainer1")
    promptQuestionContainer4.style.display = "none";// prevent from showing initially
    promptContainer.appendChild(promptQuestionContainer4);
    //Fourth Question - vote decider texts container
    const promptTextContainer4 = addElement("div", promptQuestionContainer4, {class:"promptTextContainer"});
    addElement("h3", promptTextContainer4, {textContent: "Vote Decider", class:"promptTitle"})
    addElement("h1", promptTextContainer4, {textContent: "Do you want your Candidate to be Independent?", class: "promptQuestion1"})
    addElement("h1", promptTextContainer4, {textContent: "This will filter out candidates that is Independent", class: "promptDescription1"})
    //Fourth Question - vote decider buttons
    const platformSelectorContainer4 = addElement("div", promptQuestionContainer4, {class:"platformSelectorContainer2"})
    const isNotIndependentChoiceButton = addElement("div", platformSelectorContainer4, {class: "promptQuestion3Button"});
    addElement("h1", isNotIndependentChoiceButton, {textContent: "Does not Matter"});
    const isIndependentChoiceButton = addElement("div", platformSelectorContainer4, {class: "promptQuestion3Button"});
    addElement("h1", isIndependentChoiceButton, {textContent: "Is Independent"});
    isNotIndependentChoiceButton.addEventListener("click", () => {
        isIndependent = false;
        homepage.style.display = "none";
        app.style.display = "flex"
        //configure the filters
        platformsNew.forEach(platformItem => {
            console.log(`checking ${platformItem.name}`)

            document.getElementById(platformItem.checkBoxNodeID).checked = false;
            if (platformItem.checked) {

                document.getElementById(platformItem.checkBoxNodeID).checked = true;
            }
        })

        document.getElementById("hasHistoryCheckBox").checked = false;
        document.getElementById("hasProjectsCheckBox").checked = false;
        document.getElementById("isIndependentCheckBox").checked = false;

        if (hasProjects) {
            document.getElementById("hasProjectsCheckBox").checked = true;
        }
        if (hasHistory) {
            document.getElementById("hasHistoryCheckBox").checked = true;
        }
        if (isIndependent) {
            document.getElementById("isIndependentCheckBox").checked = true;
        }

        mainDiv.remove()

    })
    isIndependentChoiceButton.addEventListener("click", () => {
        isIndependent = true;
        homepage.style.display = "none";
        app.style.display = "flex"
        //configure the filters
        platformsNew.forEach(platformItem => {
            document.getElementById(platformItem.checkBoxNodeID).checked = false;
            if (platformItem.checked) {
                console.log(`checking ${platformItem.name}`)
                document.getElementById(platformItem.checkBoxNodeID).checked = true;
            }
        })

        document.getElementById("hasHistoryCheckBox").checked = false;
        document.getElementById("hasProjectsCheckBox").checked = false;
        document.getElementById("isIndependentCheckBox").checked = false;

        if (hasProjects) {
            document.getElementById("hasProjectsCheckBox").checked = true;
        }
        if (hasHistory) {
            document.getElementById("hasHistoryCheckBox").checked = true;
        }
        if (isIndependent) {
            document.getElementById("isIndependentCheckBox").checked = true;
        }
        mainDiv.remove()

    })


    //append DarkCast
    mainDiv.appendChild(darkCast)
    //append promptContainer
    mainDiv.appendChild(promptContainer);
    
    //append main div
    document.body.appendChild(mainDiv)
}


//createElement(elementTag, data)
//addElement(elementTag, appendNode, data)
//data.id, data.class, data.src, data.textContent