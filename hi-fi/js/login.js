$(document).ready(function(){

	homepagePanel();
    
    var nameSpace = $(".user-name");
	var nameSave  = $(".user-name-save");

	// var element = $("#id");

	nameSave.click(function(event) {
		event.preventDefault();
        
        localStorage.setItem("user-name", $(".user-name-input").val());
		localStorage.setItem("user-email", $(".user-email").val());
		localStorage.setItem("user-password", $(".user-password").val());

        nameSpace.html($"user-name-input").val());
	});

	if(localStorage.length > 0){
		//nameSpace.html(localStorage.getItem("user-name"));


	   $('.user-info').html(localStorage.getItem("user-name") + localStorage.getItem("user-email") + localStorage.getItem("user-password"));
	}

	//// Clear localStorage
	//localStorage.clear();

});



$('.login-submit').click(function(event) {
	event.preventDefault();

	var useremail = localStorage.getItem("user-name");

	if( $('.login-email').val() == useremail ) {
		alert("right email");
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
