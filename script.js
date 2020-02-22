function groupMaker(num) {
    var array = arrayMaker(); // input array created from user input
    var groupArray = []; // collection of random groups will be stored in this array
    var tempRandGroup = []; // current random group to be inserted into groupArray (temporary group placeholder)
    var randIndex, insertInTemp;
    var numOfGroups = array.length / num; // how many full groups can be created
    var counter = 0; // keeps track of how many names in placeholder
    if (checkForEmptiness(array, num)) { // if check makes sure user input has at least 'num' entries (i.e. user must input at least 2 names for groups of 2)
        for (var i = 0; i < numOfGroups; i++) { // creates random groups one at a time
            while (counter != num) {
                randIndex = randomNum(array.length); // current random element index
                insertInTemp = array[randIndex]; // current random element
                array.splice(randIndex, 1); // after making a copy of random element, delete random element from array
                tempRandGroup.push(insertInTemp); // push copy of current random element into temporary group placeholder
                counter++;
            }
            counter = 0;
            groupArray.push(tempRandGroup); // push current random group in placeholder to collection of random groups
            tempRandGroup = []; // reset temporary group placeholder
        }
        if ((array.length) % num != 0) { // push final random group if number of names from user input and number of names in each group are not divisible (names are leftover)
            groupArray.push(pushFinalArray(array, num));
        }
        printGroups(groupArray, num); // prints random groups
    } else { // if number of names entered < pairs of groups (i.e. if there is only 2 names entered by user for groups of 3)
        document.getElementById("output").innerHTML = "ENTER AT LEAST " + num + " NAMES AND TRY AGAIN.";
    }
}

function printGroups(array) {
    var string = "";
    var tempString = "";
    for (var i = 0; i < array.length; i++) { // print groups one at a time
        for (var j = 0; j < array[i].length; j++) {
            if (j == 0) { // first name in group
                if (typeof array[i][j + 1] == 'undefined') { // if the first name is the only name in the group
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][j];
                    break;
                } else {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][j] + ", ";
                }
            } else if (typeof array[i][j + 1] == 'undefined') { // last name in the group
                tempString = tempString.concat(array[i][j] + "\n");
                break;
            } else { // not the first or last name in the group
                tempString = tempString.concat(array[i][j] + ", ");
            }
        }
        string = string.concat(tempString); // add current group to output
        tempString = ""; // reset temporary string placeholder to add next group
    }
    document.getElementById("output").innerHTML = string;
}

function arrayMaker() {
    var inputString = document.getElementById("input").value; // accesses input
    if (inputString == "") {
        document.getElementById("output").innerHTML = "NO NAMES ARE ENTERED. ENTER NAMES AND TRY AGAIN.";
    } else {
        inputString = inputString.toUpperCase();
        inputString = removeExtraCommas(inputString); // removes extra commas accidentally inserted by user
        var inputArr = inputString.split(','); // creates input array from input string
        return inputArr;
    }
}

function moreOption() {
    var namesPerGroup = document.getElementById("groupsOf").value;
    if (namesPerGroup == "") {
        document.getElementById("output").innerHTML = "PLEASE SPECIFY NUMBER OF PEOPLE PER GROUP (ENTER NUMBER ONLY)";
    } else {
        groupMaker(namesPerGroup);
    }
}

function checkForEmptiness(array, num) {
    for (var i = 0; i < num; i++) {
        if (array[i] == "" || typeof array[i] == 'undefined') {
            return false;
        }
    }
    return true;
}

function pushFinalArray(array, num) {
    var finalArray = [];
    for (var i = 1; i < num; i++) {
        if (typeof array[i - 1] != 'undefined') {
            finalArray.push(array[i - 1]);
        }
    }
    return finalArray;
}

function removeExtraCommas(string) {
    while (string[0] == ',' || string[0] == " ") { // remove comma or space at beginning (if any)
        string = string.slice(1, string.length);
    }
    while (string[string.length - 1] == ',' || string[0] == " ") { // remove comma or space at end (if any)
        string = string.slice(0, string.length - 1);
    }
    for (var i = 0; i < string.length; i++) {
        while (string[i] == " " && string[i - 1] == " ") { // remove extra spaces
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