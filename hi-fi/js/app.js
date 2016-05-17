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
