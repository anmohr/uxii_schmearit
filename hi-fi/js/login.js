$(document).ready(function(){

	homepagePanel();

	var emailSave  = $(".user-info-save");

	// var element = $("#id");

	submitbutton.click(function(event) {
		event.preventDefault();
        localStorage.setItem("user-name", $(".user-name-input").val());
		localStorage.setItem("user-email", $(".user-email").val());
		localStorage.setItem("user-password", $(".user-password").val());

	});

	if(localStorage.length > 0){
		//nameSpace.html(localStorage.getItem("user-name"));


		$('.user-info').html(localStorage.getItem("user-email") + localStorage.getItem("user-password"));
	}

	//// Clear localStorage
	//localStorage.clear();

});



$('.login-submit').click(function(event) {
	event.preventDefault();

	var useremail = localStorage.getItem("user-email");

	if( $('.login-email').val() == useremail ) {
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
