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
    
    

//    if (localStorage.clickcount == 10) {
//        localStorage.clickcount = 0;
//        document.getElementById("result").innerHTML = "You have " + 1 + " free bagel";
//    } 
        //else {
//            localStorage.clickcount = Number(localStorage.clickcount) + 1;
//            document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " points."; 
//        }
//    
    
}
//
//var printBagels = "";
//
//var savedBagels = ["Everything"," Vegetable<br>"," Soy Sauce"," Tuna"];
//                 
//                   
//for (i=0;i<savedBagels.length;i++){
//    
//    //printBagel += savedBagels[i][0];
//    for (j=0;j<savedBagels[i].length;j++){
//        printBagels += savedBagels[i][j];
//    }
//}


// $('#stuff').html(printBagels);   
            
$(document).ready(function(){
    $("button").click(function(){
        $("#stuff").remove();
    });
});
