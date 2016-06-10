//// set up a star rating array
//var rates = [1, 2, 3, 4, 5];
//
//
//// set up a description array
//var descriptions = ["sweet", "savory", "unusual", "other"];
//
//
//// storing the array as a string
////localStorage.setItem("starRating", JSON.stringify(movies));
////localStorage.setItem("typeDescriptions", JSON.stringify(movies));
//
//// retrieving the data
//var retrievedData = localStorage.getItem("starRating");
//var retrievedData = localStorage.getItem("typedescriptions");



$('.sub_button').click(function(e){
    console.log(localStorage.getItem("score"));
    console.log(localStorage.getItem("category"));
    console.log(localStorage.getItem("item-name"));
    
    //Write to the thing
    
});

$('.radio_star').click(function(e){
    localStorage.setItem("score", e.currentTarget.value);
});

$('.button_cate').click(function(e){
    localStorage.setItem("category", e.currentTarget.getAttribute("value"));
});

$('.rateMe-button').click(function(e){
    
    var itemName = $('.menu-item').data('menu-item');
    localStorage.setItem("item-name", itemName);
});


$(document).ready(function(){
    //var fill = document.getElementsByClassName('ls-item')[0];
    //fill.innerHTML = localStorage.getItem('item-name');
});



