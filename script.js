function groupMaker(num) {
    var array = arrayMaker(); // input array created from user input
    var groupArray = []; // collection of random groups will be stored in this array
    var randIndex;
    var numOfNames = array.length;
    if (checkForEmptiness(array, num)) { // if check makes sure user input has at least 'num' entries (i.e. user must input at least 2 names for groups of 2)
        for (var i = 0; i < numOfNames; i++) { 
            randIndex = randomNum(array.length); // current random element index
            groupArray.push(array[randIndex]); // push current random element into collection of random groups
            array.splice(randIndex, 1); // after making a copy of random element, delete random element from array
        }
        printGroups(groupArray, num); // prints random groups
    } else { // if number of names entered < pairs of groups (i.e. if there is only 2 names entered by user for groups of 3)
        document.getElementById("output").innerHTML = "ENTER AT LEAST " + num + " NAMES AND TRY AGAIN.";
    }
}

function printGroups(array, num) {
    var string = "";
    var currGroup = 1;
    for (var i = 1; i <= array.length; i = i + num) { 
        var startInd = i - 1;
        for (var j = startInd; j < startInd + num; j++) {
            if (j == startInd) { // first name in group
                if (typeof array[j + 1] == 'undefined' || num == 1) { // if the first name is the only name in the group
                    string = string.concat("<p>GROUP " + currGroup + ": " + array[j]);
                    break;
                } else {
                    string = string.concat("<p>GROUP " + currGroup + ": " + array[j] + ", ");
                }
            } else if (j == startInd + num - 1 || typeof array[j + 1] == 'undefined') { // last name in the group
                string = string.concat(array[j] + "\n");
                break;
            } else { // not the first or last name in the group
                string = string.concat(array[j] + ", ");
            }
        }
        currGroup++;
    }
    document.getElementById("output").innerHTML = string; 
}

function arrayMaker() {
    var inputString = document.getElementById("input").value; 
    if (inputString == "") {
        document.getElementById("output").innerHTML = "NO NAMES ARE ENTERED. ENTER NAMES AND TRY AGAIN.";
    } else {
        inputString = inputString.toUpperCase();
        inputString = removeExtraCharacters(inputString); // removes extra characters accidentally inserted by user
        return inputString.split(','); 
    }
}

function moreOption() {
    var namesPerGroup = document.getElementById("groupsOf").value;
    if (namesPerGroup == "") {
        document.getElementById("output").innerHTML = "PLEASE SPECIFY NUMBER OF PEOPLE PER GROUP (ENTER NUMBER ONLY)";
    } else {
        groupMaker(parseInt(namesPerGroup));
    }
}

function checkForEmptiness(array, num) { // makes sure user input has at least 'num' entries
    for (var i = 0; i < num; i++) {
        if (array[i] == "" || typeof array[i] == 'undefined') {
            return false;
        }
    }
    return true;
}

function removeExtraCharacters(string) { // removes extra characters accidentally inserted by user
    while (string[0] == ',' || string[0] == " ") { // remove comma or space at beginning (if any)
        string = string.slice(1, string.length);
    }
    while (string[string.length - 1] == ',' || string[string.length - 1] == " ") { // remove comma or space at end (if any)
        string = string.slice(0, string.length - 1);
    }
    for (var i = 1; i < string.length; i++) {
        while (string[i] == " " && string[i - 1] == " ") { // remove consecutive spaces
            string = string.slice(0, i) + string.slice(i + 1, string.length);
        }
        while (string[i] == ',' && string[i - 1] == ',') { // remove consecutive commas
            string = string.slice(0, i) + string.slice(i + 1, string.length);
        }
    }
    return string;
}

function randomNum(num) {
    return Math.floor(Math.random() * Math.floor(num));
}