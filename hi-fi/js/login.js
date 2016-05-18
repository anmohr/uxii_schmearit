$(document).ready(function(){

	homepagePanel();

	var nameSpace = $("");
	var nameSave  = $(".user-name-save");

	// var element = $("#id");

	nameSave.click(function(event) {
		event.preventDefault();

		localStorage.setItem("nameinput", $(".nameinput").val());
		localStorage.setItem("user-email", $(".user-email").val());
		localStorage.setItem("user-password", $(".user-password").val());

		nameSpace.html($(".nameinput").val());
	});

	if(localStorage.length > 0){
		//nameSpace.html(localStorage.getItem("user-name"));


		$('.user-info').html(localStorage.getItem("nameinput") + localStorage.getItem("user-email") + localStorage.getItem("user-password"));
	}

	//// Clear localStorage
	//localStorage.clear();

});



$('#submitbutton2').click(function(event) {
	event.preventDefault();

	var username = localStorage.getItem("user-email");

	if( $('.user-email').val() == username ) {
		alert("Thanks for creating an account!");
		localStorage.setItem("login-status", "true");
		console.log(localStorage.getItem('login-status'));
	} else {
		alert("wrong info. check it.");
	}

	homepagePanel();

});

function homepagePanel(){
	if( localStorage.getItem("login-status") == "true") {
		$('.rewards').show();
		$('.login').hide();
	} else {
		$('.login').show();
		$('.rewards').hide();
	}
};





$('.logout').click(function(){
	localStorage.setItem("login-status", "false");
	homepagePanel();
});
