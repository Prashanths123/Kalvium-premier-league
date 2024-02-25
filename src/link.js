const managerDetails = document.querySelector(".grid-container").children;

// Checking trial 1
try {
  [...managerDetails].forEach(function (element, index) {
    element.querySelector(".insidetext").textContent = manager[index];
  });
} catch (e) {
  // Ignore error as we don't have the function yet
}

// Checking trial 2
const defenders = document.querySelector(".defence");
const midfielders = document.querySelector(".midfield");
const forwards = document.querySelector(".forward");

try {
  for (let i = 0; i < formationObject.defender; i++) {
    defenders.innerHTML += `<img src="./assets/player.svg" alt="" class="defenders"></img>`;
  }
  for (let i = 0; i < formationObject.midfield; i++) {
    midfielders.innerHTML += `<img src="./assets/player.svg" alt="" class="defenders"></img>`;
  }
  for (let i = 0; i < formationObject.forward; i++) {
    forwards.innerHTML += `<img src="./assets/player.svg" alt="" class="defenders"></img>`;
  }
} catch (e) {
  // Ignore error as we don't have the function yet
}

// Populate all players
const playerContainer = document.getElementById("player-container");

function createCards(players) {
  playerContainer.innerHTML = "";
  players.forEach((player) => {
    let awardsTpl = "";
    player["awards"].forEach((element) => {
      awardsTpl += `<p class="minor-text">${element.name}</p>`;
    });
    let tpl = `<div class="footballer-card">
      <div class="photo"><img
          src="${player.url}"
          alt="photo" class="player-photo"></div>
      <div class="major-details">
          <div class="half">
              <span>${player.name}</span>
          </div>
          <div class="second-half">
              <p class="minor-title">TEAM</p>
              <p class="smalltext">${player.team}</p>
          </div>
      </div>
      <div class="minor-details">
          <div class="minor-half">
              <div class="minor-detail-container">
                  <p class="minor-title">AGE</p>
                  <p class="minor-text">${player.age}</p>
              </div>
              <div class="minor-detail-container">
                  <p class="minor-title">NATIONALITY</p>
                  <p class="minor-text">${player.country}</p>
              </div>
              <div class="minor-detail-container">
                  <p class="minor-title">PPL DEBUT</p>
                  <p class="minor-text">${player.debut}</p>
              </div>
              <div class="minor-detail-container">
                  <p class="minor-title">POSITION</p>
                  <p class="minor-text">${player.position}</p>
              </div>
          </div>
          <div class="minor-second-half">
              <p class="minor-title">AWARDS</p>` +
      awardsTpl +
      `</div> </div> </div>`;
    playerContainer.innerHTML += tpl;
  });
}

function resetSelection() {
  document.getElementById("awardflag").textContent = "";
  document.getElementById("positionflag").textContent = "";
  document.getElementById("debutflag").textContent = "";
  document.getElementById("teamflag").textContent = "";
  document.querySelectorAll(".award-selected").forEach((e) => {
    e.style.display = "none";
  });
  document.querySelectorAll(".team-selected").forEach((e) => {
    e.style.display = "none";
  });
  document
    .getElementById("filter-type")
    .querySelector(".subtitle.filtertype-active")
    .classList.remove("filtertype-active");
}

// Setup filter and sort menu
document.querySelector(
  ".filter-container"
).firstElementChild.onclick = filterMenuSetup;

function filterMenuSetup(evt) {
  createCards([]);

  try {
    // Deactivate the class filtertype-active for any selected buttons
    resetSelection();
  } catch (e) {
    // Do nothing
  }
  this.classList.add("filtertype-active");
  // Display filter menu
  document.getElementById("filter-type").style.display = "inherit";
}

// Populate filter elements
// All player positions
const positions = [...new Set(players.map((e) => e.position))].sort();
positions.forEach(
  (e) =>
    (document.querySelector("#dropdown-position").innerHTML +=
      '<p class="position">' + e + "</p>")
);

// Position click handler and listener

let positionEls = document.querySelectorAll(".position");
positionEls.forEach((element) => {
  element.onclick = positionHandler;
});

function positionHandler(evt) {
  try {
    createCards(filterByPosition(evt.target.innerHTML));
    try {
      // Deactivate the class filtertype-active for any selected buttons
      resetSelection();
    } catch (e) {
      // Do nothing
    }
    // Activate the class filtertype-active for position button
    evt.target.parentElement.previousSibling.classList.add(
      "filtertype-active"
    );
    document.getElementById("positionflag").textContent =
      evt.target.textContent;
  } catch (e) {
    // Do nothing as the function is not defined
  }
}

// All debut years (sorted)
const debutYears = [...new Set(players.map((e) => e.debut))].sort();
debutYears.forEach((e) => {
  document.querySelector("#dropdown-debut").innerHTML +=
    '<p class="year">' + e + "</p>";
});

// Debut year click listener and handler

let debutYearEls = document.getElementsByClassName("year");

[...debutYearEls].forEach((element) => {
  element.onclick = debutHandler;
});

function debutHandler(evt) {
  try {
    createCards(filterByDebut(evt.target.textContent));
    try {
      // Deactivate the class filtertype-active for any selected buttons
      resetSelection();
    } catch (e) {
      // Do nothing
    }
    // Activate the class filtertype-active for position button
    evt.target.parentElement.previousSibling.classList.add(
      "filtertype-active"
    );
    document.getElementById("debutflag").textContent = evt.target.textContent;
  } catch (e) {
    // Do nothing - expected error
  }
}

// All awards won (sorted)
const awards = [...new Set(players.map((e) => e.awards))];
// //max no of awards won by any player
var maxAwardCount = 0;
const awardNames = [];
players.forEach((e) => {
  maxAwardCount =
    maxAwardCount < e.awards.length ? e.awards.length : maxAwardCount;
  e.awards.forEach((f) =>
    awardNames.indexOf(f.name) == -1 ? awardNames.push(f.name) : ""
  );
});
awardNames.sort();
awardNames.forEach(
  (e) =>
    (document.querySelector("#dropdown-award").innerHTML +=
      '<p class="award">' + e + "</p>")
);

// Award click listener

let awardEls = document.getElementsByClassName("award");

[...awardEls].forEach((element) => {
  element.onclick = awardHandler;
});

// Advanced filters based on award

function createAdvancedFilters(award) {
  document.querySelectorAll(".award-selected").forEach((e) => {
    e.style.display = "block";
  });
}

// Award click handler
function awardHandler(evt) {
  try {
    createCards(filterByAward(evt.target.textContent));
    try {
      // Deactivate the class filtertype-active for any selected buttons
      resetSelection();
    } catch (e) {
      // Do nothing
    }
    // Activate the class filtertype-active for position button
    evt.target.parentElement.previousElementSibling.classList.add(
      "filtertype-active"
    );
    createAdvancedFilters(evt.target.textContent);
    document.getElementById("awardflag").textContent = evt.target.textContent;
  } catch (e) {
    // Do nothing - expected error
  }
}

// Number of awards listener and handler

document.getElementById("awardCount").oninput = awardCountHandler;

function awardCountHandler(evt) {
  try {
    let award = document.getElementById("awardflag").textContent;
    let timesInput = evt.target;
    let times = timesInput.value;
    createCards(filterByAwardxTimes(award, times));
  } catch (e) {
    // Do nothing
  }
}

// All player countries
const countries = [...new Set(players.map((e) => e.country))].sort();
countries.forEach(
  (e) =>
    (document.querySelector("#dropdown-country").innerHTML +=
      "<p>" + e + "</p>")
);

// Country listener and handler

document.getElementById("dropdown-country").onclick = countryHandler;

function countryHandler(evt) {
  try {
    let award = document.getElementById("awardflag").textContent;
    let country = evt.target.textContent;
    createCards(filterByAwardxCountry(award, country));
  } catch (e) {
    // Do nothing
  }
}

// All player teams
const teams = [...new Set(players.map((e) => e.team))].sort();
teams.forEach(
  (e) =>
    (document.querySelector("#dropdown-team").innerHTML +=
      "<p>" + e + "</p>")
);

// Teams listener and handler
document.getElementById("dropdown-team").onclick = teamHandler;

function teamHandler(evt) {
  createCards([]);
  try {
    resetSelection();
    // createCards(filterByNoOfAwardsxTeamxAge(noOfAwards, team, age));
  } catch (e) {
    // Do nothing
  }
  document.querySelectorAll(".team-selected").forEach((e) => {
    e.style.display = "block";
  });
  evt.target.parentElement.previousElementSibling.classList.add(
    "filtertype-active"
  );
  document.getElementById("teamflag").textContent = evt.target.textContent;

  document.getElementById("goButton").onclick = goButtonHandler;

  function goButtonHandler() {
    try {
      awardsTotal = document.getElementById("awardCountTotal");
      noOfAwards = awardsTotal.value;
      ageBox = document.getElementById("age");
      age = ageBox.value;
      team = document.getElementById("teamflag").textContent;
      createCards(filterByNoOfAwardsxTeamxAge(noOfAwards, team, age));
    } catch (e) {
      console.log(e);
    }
  }
}

let sortButtons = document.getElementById("sort-type").children;
[...sortButtons].forEach((button) => {
  button.onclick = sortButtonHandler;
});

function sortButtonHandler(evt) {
  switch (evt.target.textContent) {
    case "Oldest to Newest":
      createCards(sortByAge());
      break;
    case "More Awards":
    case "Alphabetical Sort":
    case "Alphabetical x Award Sort":
      // Implement other sorting logic here if needed
      break;
  }
}
