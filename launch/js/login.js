// Your app's JS goes here

//Wait until HTML is loaded
$(document).ready(function(){

	homepagePanel();

	var nameSpace = $(".user-name");
	var nameSave  = $(".user-name-save");


	// var element = $("#id");

    //make new account
	nameSave.click(function(event) {
		event.preventDefault();

		localStorage.setItem("user-name", $(".user-name-input").val());
		localStorage.setItem("user-email", $(".user-email").val());
		localStorage.setItem("user-password", $(".user-password").val());

		
		nameSpace.html($(".user-name-input").val());
		window.location="login.html";
	});


    //local storage text
	if(localStorage.length > 0){
		nameSpace.html(localStorage.getItem("user-name"));


		$('.user-info').html(localStorage.getItem("user-name") + localStorage.getItem("user-email") + localStorage.getItem("user-password"));
	}

	//// Clear localStorage
	//localStorage.clear();

});


//check login name against local storage name
$('.login-submit').click(function(event) {
	event.preventDefault();

	var username = localStorage.getItem("user-name");

	if( $('.login-name').val() == username ) {
		localStorage.setItem("login-status", "true");
		console.log(localStorage.getItem('login-status'));
		window.location="index.html";
	} else {
		alert("wrong info. check it.");
	}

	homepagePanel();

});

//if login=true then show homepagePanel
function homepagePanel(){
	if( localStorage.getItem("login-status") == "true") {
		$('.rewards').show();
		$('.login').hide();
		$('.logout').show();
	} else {
		$('.login').show();
		$('.rewards').hide();
		$('.logout').hide();
	}
};




//logout btn
$('.logout').click(function(){
	localStorage.setItem("login-status", "false");
	homepagePanel();
});
