$(document).foundation()
              
// set up a star rating array
var rates = [1, 2, 3, 4, 5];

// set up a description array
var descriptions = ["sweet", "savory", "unusual", "other"];

// storing the array as a string
//localStorage.setItem("starRating", JSON.stringify(movies));
//localStorage.setItem("typeDescriptions", JSON.stringify(movies));

// retrieving the data
var retrievedData = localStorage.getItem("starRating");
var retrievedData = localStorage.getItem("typedescriptions");


$(document).ready(function(){
    
    //localStorage.clear();
    
    if(!localStorage.clickcount) {
        localStorage.clickcount = 0;
    }
    
    
    $('#result').html("You have " + localStorage.clickcount + " points.");
     console.log(localStorage.getItem('clickCount'));
   
});

console.log("cc" + localStorage.clickcount);


//rewards start//
function clickCounter() {
    
        //localStorage.clickcount = Number(localStorage.clickcount) + 1;
        
//    document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " points."; 
//    
    
    

    if (localStorage.clickcount == 10) {
        localStorage.clickcount = 0;
        document.getElementById("result").innerHTML = "You have " + 1 + " free bagel";
    } 
        //else {
//            localStorage.clickcount = Number(localStorage.clickcount) + 1;
//            document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " points."; 
//        }
//    
    
            
            
        

}
