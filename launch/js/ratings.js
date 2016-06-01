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



$(document).ready(function(){
	var menuItems = $(".menu-item");
	var LSCart;
	totalRow = $('.total-row');
    
    var itemCategory;
    var itemDescription;
    var itemPrice;
    var itemHeart;
    var itemStar;
    //var ratings = [itemName, itemDescription, itemPrice, itemHeart, itemStar];

    
    // ratings structure
    // -item
    // --name 0	
    // --description 1
    // --price 2
    // --heart 3	
    // --star 4	


	menuItems.click(function() {
		var itemName = $(this).data('menu-item');
		var itemPrice = $(this).data('menu-price');
		//clearing quantity for that item
		var itemQuantity = 1;
		//clearing the cart variable and setting it as an array
		LSCart = [];

		if(localStorage.getItem("cart")){
			//if cart exists already, set value of lscart to localstorage
			LSCart = JSON.parse(localStorage.getItem("cart"));
		}
// look through LSCart and see if this item already exists
		for(var i = 0; i < LSCart.length; i++){
			if(LSCart[i][0] == itemName){
				itemQuantity += LSCart[i][2];
				LSCart.splice(i, 1);
			}// create array of item we just clicked
		}

		var item = [itemName, itemPrice, itemQuantity];
		//now we are adding it to the array LScart

		LSCart.push(item);

		localStorage.setItem("cart", JSON.stringify(LSCart));

		populateCart(LSCart);

	});

	if(localStorage.getItem("cart")){
		LSCart = JSON.parse(localStorage.getItem("cart"));
		populateCart(LSCart);
	}
});
