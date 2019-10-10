function arrayMaker() {
    var inputString = document.getElementById("input").value; // accesses input
    if (inputString == "") {
        document.getElementById("output").innerHTML = "NO NAMES ARE ENTERED. ENTER NAMES AND TRY AGAIN.";
    }
    else {
        inputString = inputString.toUpperCase();
        var inputArr = inputString.split(','); // creates input array from input string
        return inputArr;
    }
}

function groupMaker(num) {
    var array = arrayMaker(); // input array
    var endOfArray = array.length;
    var options = array.length;
    var groupArray = []; // random group will be in this array
    var firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex, temp;
    if (checkForEmptiness(array, num)) { // checks for less than required number of entries
        for (var i = 0; i < endOfArray / num; i++) {
            if (num == 2) { // groups of 2
                temp = randomNum(options);
                firstIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                secondIndex = array[temp];
                array.splice(temp, 1);
                options--;
                groupArray.push([firstIndex, secondIndex]);
            }
            else if (num == 3) { // groups of 3
                temp = randomNum(options);
                firstIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                secondIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                thirdIndex = array[temp];
                array.splice(temp, 1);
                options--;
                groupArray.push([firstIndex, secondIndex, thirdIndex]);
            }
            else if (num == 4) { // groups of 4
                temp = randomNum(options);
                firstIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                secondIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                thirdIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                fourthIndex = array[temp];
                array.splice(temp, 1);
                options--;
                groupArray.push([firstIndex, secondIndex, thirdIndex, fourthIndex]);
            }
            else if (num == 5) { // groups of 5
                temp = randomNum(options);
                firstIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                secondIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                thirdIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                fourthIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                fifthIndex = array[temp];
                array.splice(temp, 1);
                options--;
                groupArray.push([firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex]);
            }
            else { // groups of 6
                temp = randomNum(options);
                firstIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                secondIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                thirdIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                fourthIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                fifthIndex = array[temp];
                array.splice(temp, 1);
                options--;
                temp = randomNum(options);
                sixthIndex = array[temp];
                array.splice(temp, 1);
                options--;
                groupArray.push([firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex, sixthIndex]);
            }
        }
        if ((array.length) % num != 0) { // pushes final contents of whatever is remaining in the input array
            groupArray.push(pushFinalArray(array, num));
        }
        document.getElementById("output").innerHTML = printArray(groupArray, num); // prints random groups
    }
    else {
        document.getElementById("output").innerHTML = "ENTER AT LEAST " + num + " NAMES AND TRY AGAIN.";
    }
}

function printArray(array, num) {
    var string = "";
    var tempString = "";
    var i;
    switch (num) {
        case 2: // printing groups of 2
            for (i = 0; i < array.length; i++) {
                if (typeof array[i][num - 1] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 2] + "</p>";
                }
                else {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 2] + " AND " + array[i][num - 1] + "</p>";
                }
                string = string.concat(tempString);
            }
            break;
        case 3: // printing groups of 3
            for (i = 0; i < array.length; i++) {
                if (typeof array[i][num - 2] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 3] + "</p>";
                }
                else if (typeof array[i][num - 1] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 3] + " AND " + array[i][num - 2] + "</p>";
                }
                else {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 3] + ", " + array[i][num - 2] + ", AND " + array[i][num - 1] + "</p>";
                }
                string = string.concat(tempString);
            }
            break;
        case 4: // printing groups of 4
            for (i = 0; i < array.length; i++) {
                if (typeof array[i][num - 3] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 4] + "</p>";
                }
                else if (typeof array[i][num - 2] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 4] + " AND " + array[i][num - 3] + "</p>";
                }
                else if (typeof array[i][num - 1] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 4] + ", " + array[i][num - 3] + ", AND " + array[i][num - 2] + "</p>";
                }
                else {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 4] + ", " + array[i][num - 3] + ", " + array[i][num - 2] + ", AND " + array[i][num - 1] + "</p>";
                }
                string = string.concat(tempString);
            }
            break;
        case 5: // printing groups of 5
            for (i = 0; i < array.length; i++) {
                if (typeof array[i][num - 4] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 5] + "</p>";
                }
                else if (typeof array[i][num - 3] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 5] + " AND " + array[i][num - 4] + "</p>";
                }   
                else if (typeof array[i][num - 2] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 5] + ", " + array[i][num - 4] + ", AND " + array[i][num - 3] + "</p>";
                }
                else if (typeof array[i][num - 1] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 5] + ", " + array[i][num - 4] + ", " + array[i][num - 3] + ", AND " + array[i][num - 2] + "</p>";
                }
                else {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 5] + ", " + array[i][num - 4] + ", " + array[i][num - 3] + ", " + array[i][num - 2] + ", AND " + array[i][num - 1] + "</p>";
                }
                string = string.concat(tempString);
            }
            break;
        case 6: // printing groups of 6
            for (i = 0; i < array.length; i++) {
                if (typeof array[i][num - 5] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 6] + "</p>";
                }
                else if (typeof array[i][num - 4] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 6] + " AND " + array[i][num - 5] + "</p>";
                }   
                else if (typeof array[i][num - 3] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 6] + ", " + array[i][num - 5] + ", AND " + array[i][num - 4] + "</p>";
                }
                else if (typeof array[i][num - 2] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 6] + ", " + array[i][num - 5] + ", " + array[i][num - 4] + ", AND " + array[i][num - 3] + "</p>";
                }
                else if (typeof array[i][num - 1] == 'undefined') {
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 6] + ", " + array[i][num - 5] + ", " + array[i][num - 4] + ", " + array[i][num - 3] + ", AND " + array[i][num - 2] + "</p>";
                }
                else { 
                    tempString = "<p>GROUP " + (i + 1) + ": " + array[i][num - 6] + ", " + array[i][num - 5] + ", " + array[i][num - 4] + ", " + array[i][num - 3] + ", " + array[i][num - 2] + ", AND " + array[i][num - 1] + "</p>";
                }
                string = string.concat(tempString);
            }
            break;
    }
    return string;
}

function pushFinalArray(array, num) {
    if (num == 2) {
        return array[0];
    }
    else if (num == 3) {
        return [array[0], array[1]];
    }
    else if (num == 4) {
        return [array[0], array[1], array[2]];
    }
    else if (num == 5) {
        return [array[0], array[1], array[2], array[3]];
    }
    else {
        return [array[0], array[1], array[2], array[3], array[4]];
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

function randomNum(num) {
    return Math.floor(Math.random() * Math.floor(num));
}


