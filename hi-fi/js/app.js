$(document).foundation()
              
// set up a star rating array
var rates = new Array[1, 2, 3, 4, 5];

// set up a description array
var descriptions = ["sweet", "savory", "unusual", "other"];

// storing the array as a string
localStorage.setItem("starRating", JSON.stringify(movies));
localStorage.setItem("typeDescriptions", JSON.stringify(movies));

// retrieving the data
var retrievedData = localStorage.getItem("starRating");
var retrievedData = localStorage.getItem("typedescriptions");


//rewards start//
function clickCounter() {

    if (typeof (Storage) !== "undefined") {

        if (localStorage.clickcount<10) {
            
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
            document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " pionts(s).";
        } else {

            localStorage.clickcount = 1;
            document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " free bagel";
        }
        
    } else {

        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
