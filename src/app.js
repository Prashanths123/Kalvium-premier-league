// Progression 1 - Create a Manager array and return it
let managerName = "Adrian Mitchel";
let managerAge = 69;
let currentTeam = "Thunder Strikers";
let trophiesWon = 34;

function createManager(name, age, team, trophies) {
    return [name, age, team, trophies];
}

try {
    var manager = createManager(
        managerName,
        managerAge,
        currentTeam,
        trophiesWon
    );
} catch (e) {
    // Do nothing - expected error
}

// Progression 2 - Create a formation object and return it
var formation = [4, 4, 3];

function createFormation(players) {
    if (players.length === 0) {
        return null;
    } else {
        return {
            defender: players[0],
            midfield: players[1],
            forward: players[2]
        };
    }
}

try {
    var formationObject = createFormation(formation);
} catch (e) {
    // Do nothing
}

// Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
    let playersfilteredbydebut = players.filter((item) => {
        return item.debut == year;
    });
    return playersfilteredbydebut;
}

// Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
    let playersfilteredbyposition = players.filter((item) => {
        return item.position == position;
    });
    return playersfilteredbyposition;
}

// Progression 5 - Filter players that have won ______ award
function filterByAward(awardname) {
    if (awardname == null) {
        return [];
    } else {
        let playersfilteredbyaward = players.filter((item) => {
            return item.awards.some((award) => { return award.name === awardname });
        });
        return playersfilteredbyaward;
    }
}

// Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardname, n) {
    let playersfilteredbyawardxtimes = players.filter(item => {
        let count = item.awards.filter(award => award.name === awardname);
        return count.length === n;
    });
    return playersfilteredbyawardxtimes;
}

// Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardname, countryname) {
    let playersfilteredbyawardx = filterByAward(awardname);
    let playersfilteredbyawardxcountry = playersfilteredbyawardx.filter(item => { return item.country === countryname });
    return playersfilteredbyawardxcountry;
}

// Progression 8 - Filter players that won at least ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(n, team, age) {
    let playersfilteredbyawardsxteamxage = players.filter((item) => {
        return item.team === team && item.age < age && item.awards.length >= n;
    });
    return playersfilteredbyawardsxteamxage;
}

// Progression 9 - Sort players in descending order of their age
function sortByAge(playersArray) {
    for (let i = 0; i < playersArray.length; i++) {
        for (let j = i + 1; j < playersArray.length; j++) {
            if (playersArray[i].age < playersArray[j].age) {
                let temp = playersArray[i];
                playersArray[i] = playersArray[j];
                playersArray[j] = temp;
            }
        }
    }
    console.log(playersArray);
    return playersArray;
}

// SortByAge(players);

// Progression 10 - Sort players belonging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
    let playersfilteredbyteam = players.filter((item) => { return item.team == team });
    for (let i = 0; i < playersfilteredbyteam.length; i++) {
        for (let j = i + 1; j < playersfilteredbyteam.length; j++) {
            if (playersfilteredbyteam[i].awards.length < playersfilteredbyteam[j].awards.length) {
                let temp = playersfilteredbyteam[i];
                playersfilteredbyteam[i] = playersfilteredbyteam[j];
                playersfilteredbyteam[j] = temp;
            }
        }
    }
    return playersfilteredbyteam;
}

console.log(filterByTeamxSortByNoOfAwards("Barcelona"));

// Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByNamexAwardxTimes(awardname, times, country) {
    let playersfilteredbyawardxtime = filterByAwardxTimes(awardname, times);
    let playersfilteredbyawardxtimesxcountry = playersfilteredbyawardxtime.filter((item) => {
        return item.country === country;
    });
    for (let i = 0; i < playersfilteredbyawardxtimesxcountry.length; i++) {
        for (let j = i + 1; j < playersfilteredbyawardxtimesxcountry.length; j++) {
            if (playersfilteredbyawardxtimesxcountry[i].name > playersfilteredbyawardxtimesxcountry[j].name) {
                let temp = playersfilteredbyawardxtimesxcountry[i];
                playersfilteredbyawardxtimesxcountry[i] = playersfilteredbyawardxtimesxcountry[j];
                playersfilteredbyawardxtimesxcountry[j] = temp;
            }
        }
    }
    return playersfilteredbyawardxtimesxcountry;
}

console.log(sortByNamexAwardxTimes("FIFA FIFPro World XI", 1, "France"));

// Challenge 2 - Sort players that are older than _____ years in alphabetical order
// Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age) {
    let playersfilteredbyage = players.filter((item) => { return item.age > age });
    for (let i = 0; i < playersfilteredbyage.length; i++) {
        for (let j = i + 1; j < playersfilteredbyage.length; j++) {
            if (playersfilteredbyage[i].name > playersfilteredbyage[j].name) {
                let temp = playersfilteredbyage[i];
                playersfilteredbyage[i] = playersfilteredbyage[j];
                playersfilteredbyage[j] = temp;
            }
        }
    }
    for (let i = 0; i < playersfilteredbyage.length; i++) {
        let playerawards = playersfilteredbyage[i].awards;
        for (let j = 0; j < playerawards.length; j++) {
            for (let k = j + 1; k < playerawards.length; k++) {
                if (playerawards[j].year < playerawards[k].year) {
                    let tempaward = playerawards[j];
                    playerawards[j] = playerawards[k];
                    playerawards[k] = tempaward;
                }
            }
        }
    }
    console.log(playersfilteredbyage);
    return playersfilteredbyage;
}

// sortByNamexOlderThan(30);
