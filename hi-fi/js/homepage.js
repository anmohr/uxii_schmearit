if(localStorage.getItem('rewards') > 0){
    var rewards = localStorage.getItem('rewards');
		$('.points').html(localStorage.getItem("rewards"));
	} else {
    var rewards = 0;
    $('.points').html(rewards);
  }

  if (localStorage.getItem('rewards') == 10) {
    $('.points').css("color", "red");
  }

  //localStorage.setItem("rewards", rewards);
  console.log(localStorage.getItem("rewards"));

  $('.add-reward').click(function(event) {
    event.preventDefault();
    rewards++;

    if(rewards > 10){
      rewards = 0;
    }

    localStorage.setItem("rewards", rewards);
    $('.points').html(localStorage.getItem("rewards"));

    if (localStorage.getItem('rewards') == 10) {
      $('.points').css("color", "red");
    }

  });

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();
alert('homepage.js');

window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {

    //put your own code here etc.
 $('#myModal').foundation('open');
}

$('.close-button').click(function(){
    $('.close-button').foundation('close');
})
