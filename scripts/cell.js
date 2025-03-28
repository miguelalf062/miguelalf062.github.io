const innerDataContainer = document.getElementById("innerDataContainer");
const innerDataContainerChildren = [...innerDataContainer.children];

let vonData = vonJSONFile.map(data => {
    const mainCellDiv = addElement("div", innerDataContainer, {});
    addElement("img", mainCellDiv, {src: `data/von/images/${data.pictureFileName}`})
    addElement("h1", mainCellDiv, {textContent: data.name});
    addElement("h3", mainCellDiv, {textContent: data.isPartylist ? "Party List" : "Senator"});

    mainCellDiv.addEventListener("click", () => {
        spawnModal(data.name, 
            `data/von/images/${data.pictureFileName}`,
            data.ballotNumber, 
            data.isPartylist ? "Party List" : "Senator",
            data.candidacies,
            data.projects,
            data.profession,

            data.Education,
            data.firstNominee,
            data.party,
            data.platforms
        );
    })

    return {data, divNode: mainCellDiv};
})


let marcusData = marcusJSONFile.map(data => {
    const mainCellDiv = addElement("div", innerDataContainer, {});
    addElement("img", mainCellDiv, {src: `data/marcus/images/${data.pictureFileName}`})
    addElement("h1", mainCellDiv, {textContent: data.name});
    addElement("h3", mainCellDiv, {textContent: data.isPartylist ? "Party List" : "Senator"});

    mainCellDiv.addEventListener("click", () => {
        spawnModal(data.name, 
            `data/marcus/images/${data.pictureFileName}`,
            data.ballotNumber, 
            data.isPartylist ? "Party List" : "Senator",
            data.Candidacies,
            data.projects,
            data.Profession,

            data.Education,
            data.firstNominee,
            data.party,
            data.platforms
        );
    })

    return {data, divNode: mainCellDiv};
})

let cjData = cjJSONFile.map(data => {
    const mainCellDiv = addElement("div", innerDataContainer, {});
    addElement("img", mainCellDiv, {src: `data/cj/images/${data.pictureFileName}`})
    addElement("h1", mainCellDiv, {textContent: data.name});
    addElement("h3", mainCellDiv, {textContent: data.isPartylist ? "Party List" : "Senator"});

    mainCellDiv.addEventListener("click", () => {
        spawnModal(data.name, 
            `data/cj/images/${data.pictureFileName}`,
            data.ballotNumber, 
            data.isPartylist ? "Party List" : "Senator",
            data.candidacies,
            data.projects,
            data.profession,

            data.Education,
            data.firstNominee,
            data.party,
            data.platforms
        );
    })

    return {data, divNode: mainCellDiv};

})
    

const allFilterCheckBoxes = document.querySelectorAll("[updateCandidates='true']");
const filterSearchBar = document.getElementById("filterSearchBar");

filterSearchBar.addEventListener("input", () => {
    updateCandidatesList();
})



//set all candidates not visible
let allCandidates = [...vonData, ...marcusData, ...cjData];
allCandidates.forEach(candidate => {
    candidate.divNode.style.display = "none";
})
// init candidate list
updateCandidatesList();


allFilterCheckBoxes.forEach(checkBox => {
    checkBox.addEventListener("click", () => {
        updateCandidatesList()
    })
})

function updateCandidatesList () {
    let filters = [] 
    allFilterCheckBoxes.forEach(filterOption => {
        if(filterOption.checked) {
            filters.push(filterOption.getAttribute("option"))
        } 
    })

    let newData = allCandidates.filter(candidate => {
        //check if there are no filters
        if (!filters) {
            return true;
        };

        //check candidate type & misc
        let flag = true;
        let tempFilters = filters.map(data=>data);
        for (let i = 0; i < 6; i++) {
            tempFilters.forEach((filter, index) => {
    
                if (filter == "Senator") {
                    if(candidate.data.isPartylist) flag = false;
                    tempFilters.splice(index, 1);
                }
                if (filter == "Party List") {
                    if(!candidate.data.isPartylist) flag = false;
                    tempFilters.splice(index, 1);
                }
                if (filter == "both") {
                    tempFilters.splice(index, 1);
                }
                if (filter == "hasHistory") {
                    if(!(candidate.data.candidacies || candidate.data.Candidacies)) {
                        flag = false
                    };
                    tempFilters.splice(index, 1);
                }
                if (filter == "hasProjects") {
                    if(!(candidate.data.projects)) {
                        flag = false
                    };
                    tempFilters.splice(index, 1);
                }
                if (filter == "isIndependent") {
    
                    if(!(candidate.data.party == "Independent")) {
                        flag = false;
                    }
                    tempFilters.splice(index, 1);
                }
            })
        }
        
        if (!tempFilters.every(val => ["Governance",
            "Agriculture",
            "Economy",
            "Education",
            "Environment",
            "Geopolitics",
            "Health",
            "Housing",
            "Illegal Drugs",
            "Military",
            "Politics",
            "Power",
            "PWD",
            "Social Welfare",
            "Technology",
            "Transportation",
            "Women's Rights",
            "Infrastructure",
            "Workforce",
            "Disaster Relief",
            "Animal Welfare",
            "Religion"].includes(val)))
            {
                flag = false;
            }
        if(!tempFilters.every(filter => {
            return candidate.data.platforms?.includes(filter);
        })) {
            flag = false;
        }

        //implement search bar
        let searchWord = filterSearchBar.value.trim().toLowerCase();
        
        if(!candidate.data.name.toLowerCase().includes(searchWord)) {
            flag = false;
        }

        return flag;
    })


    let finalData = newData;
    //empty candidates list
    allCandidates.forEach(candidate => {
        candidate.divNode.style.display = "none"
    })

    //populate candidate list only by filter
    finalData.forEach(candidate => {
        candidate.divNode.style.display = "flex";
    })
}


function spawnModal (candidateName, 
    profilePicSrc, 
    ballotNumber, 
    candidateType, 
    candidacyHistory,
    projects,
    profession,
    education,
    firstNominee,
    partyName,
    platforms
)
    {

    const modal = document.createElement("div")
    modal.setAttribute("id", "modal");
    modal.classList.add("modal");

    const modalInfoContainer = document.createElement("div");
    modal.setAttribute("id", "modalInfoContainer");
    modal.appendChild(modalInfoContainer);
    modalInfoContainer.classList.add("modalInfoContainer");

    //animations
    modalInfoContainer.addEventListener("animationend", () => {
        name.classList.add("modalInfoTextAnimation")
    })

    const gradientBackground = document.createElement("div");
    gradientBackground.classList.add("gradientBackground");
    modalInfoContainer.appendChild(gradientBackground);

    //Party
    const party = document.createElement("h1");
    party.setAttribute("id", "modalInfoParty");
    party.classList.add("modalInfoParty");
    party.textContent = partyName;
    modalInfoContainer.appendChild(party);

    //Candidate Modal Name
    const name = document.createElement("h1");
    name.setAttribute("id", "modalInfoName");
    name.classList.add("modalInfoName");
    name.textContent = candidateName;
    modalInfoContainer.appendChild(name);

    //Platforms
    const modalPlatformsContainer = addElement("div", modalInfoContainer, {class: "modalPlatformsContainer"});
    
    if (platforms) {
    platforms.forEach(platformData => {
        addElement("div", modalPlatformsContainer, {textContent: platformData, class: "modalPlatformItem"});
    })
    }

    //Candidate Modal Image
    const profilePic = document.createElement("img");
    profilePic.setAttribute("id", "profilePic");
    profilePic.setAttribute("src",profilePicSrc);
    profilePic.setAttribute("draggable","false");

    profilePic.classList.add("profilePic");
    modalInfoContainer.appendChild(profilePic);
  
    //Ballot Number Container
    const modalBallotNumberContainer = document.createElement("div");
    modalBallotNumberContainer.classList.add("modalBallotNumberContainer")
    
    //Ballot Number Text
    const modalBallotNumberText = document.createElement("h1");
    modalBallotNumberText.classList.add("modalBallotNumberText")
    modalBallotNumberContainer.appendChild(modalBallotNumberText)
    modalBallotNumberText.textContent = `Ballot #${ballotNumber}`;

    modalInfoContainer.appendChild(modalBallotNumberContainer);

    //Candidate type text
    const candidateTypeText = document.createElement("h1");
    candidateTypeText.setAttribute("id", "candidateTypeText");
    candidateType == "Senator" ? candidateTypeText.classList.add("candidateTypeTextSenator") : candidateTypeText.classList.add("candidateTypeTextPartyList");
    candidateTypeText.textContent = candidateType;
    modalInfoContainer.appendChild(candidateTypeText);

    //Candidacy History
    if (candidacyHistory) {
    const candidacyHistoryText = document.createElement("h1");
    candidacyHistoryText.setAttribute("id", "candidacyHistoryText");
    candidacyHistoryText.classList.add("candidacyHistoryText");
    candidacyHistoryText.textContent = `History: ${candidacyHistory}`;
    modalInfoContainer.appendChild(candidacyHistoryText);
    }
    //Projects 
    if (projects) {
    const projectWrapper = addElement("div", modalInfoContainer, {class: "projectWrapper"});
    const projectsText = addElement("h1", projectWrapper, {textContent: "PROJECTS", class: "projectsText"});
    const projectsContainer = addElement("div", projectWrapper, {class: "projectsContainer"})
    projects.forEach((proj, index) => {
        addElement("h1", projectsContainer, {textContent: `- ${proj.name}`, class: "project"});
    })
    }

    //ProfessionTitle
    if (candidateType == "Senator") {
        const ProfessionTitle = addElement("h1", modalInfoContainer, {textContent: "PROFESSION", class: "ProfessionTitle"});
    }
    //Profession
    const Profession = addElement("h1", modalInfoContainer, {textContent: profession, class: "Profession"});

    //Education title
    if (candidateType == "Senator" && education) {
        const EducationTitle = addElement("h1", modalInfoContainer, {textContent: "EDUCATION", class: "EducationTitle"});
    }
    //Education
    const Education = addElement("h1", modalInfoContainer, {textContent: education, class: "Education"});

    //First Nominee
    if (candidateType == "Party List") {
        const firstNomineeTitle = addElement("h1", modalInfoContainer, {textContent: "First Nominee", class: "ProfessionTitle"});
        const firstNomineeName = addElement("h1", modalInfoContainer, {textContent: firstNominee, class: "Profession"});
    }

    //Modal Black Screen
    const darkCast = document.createElement("div");
    modal.appendChild(darkCast);
    darkCast.classList.add("darkCast");
    darkCast.addEventListener("click", () => {
        modal.remove();
    })


    document.body.prepend(modal);

}

function createElement(elementTag, data) {
    const element = document.createElement(elementTag);
    
    data.id && element.setAttribute("id", data.id);
    data.class && element.setAttribute("class", data.class);
    data.src && element.setAttribute("src", data.src);
    data.textContent && (element.textContent = data.textContent);
    return element;
}


function addElement(elementTag, appendNode, data) {
    const element = document.createElement(elementTag);
    
    data.id && element.setAttribute("id", data.id);
    data.class && element.setAttribute("class", data.class);
    data.src && element.setAttribute("src", data.src);
    data.textContent && (element.textContent = data.textContent);

    appendNode.appendChild(element)
    return element;
}

