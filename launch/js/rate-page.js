// Your app's JS goes here

//Wait until HTML is loaded
$(document).ready(function(){

	var nameSpace = $(".rate-category");
	var nameSave  = $(".user-name-save");


	// var element = $("#id");

    //make new account
	nameSave.click(function(event) {
		event.preventDefault();

		localStorage.setItem("user-name", $(".user-name-input").val());
		localStorage.setItem("user-email", $(".user-email").val());
		localStorage.setItem("user-password", $(".user-password").val());


		nameSpace.html($(".user-name-input").val());
	});


    //local storage text
	if(localStorage.length > 0){
		nameSpace.html(localStorage.getItem("user-name"));


		$('.user-info').html(localStorage.getItem("user-name") + localStorage.getItem("user-email") + localStorage.getItem("user-password"));
	}

	//// Clear localStorage
	//localStorage.clear();

});
