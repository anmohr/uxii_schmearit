//$(document).ready(function(){
var bagelReward = false;

if(localStorage.getItem('rewards') > 0){
    var rewards = localStorage.getItem('rewards');
		$('.points').html(localStorage.getItem("rewards"));
	} else {
    var rewards = 0;
    $('.points').html(rewards);
  }


  //localStorage.setItem("rewards", rewards);
  console.log(localStorage.getItem("rewards"));

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs

function shakeEventDidOccur () {

    //put your own code here etc.
 $('#myModal').foundation('open');
}
    


$('.close-button').click(function(){
    
    if(!bagelReward){
        if(localStorage.clickcount != 9 ){
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
            document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " points."; 
            
            $('#bagel').removeClass();
            $('#bagel').addClass('bagel' + localStorage.clickcount);
        } else {
            localStorage.clickcount = 0;
            document.getElementById("result").innerHTML = "You have " + 1 + " free bagel";
            bagelReward = true; 
            
            $('#bagel').removeClass();
            $('#bagel').addClass('bagel10');
        }
    } else {
        localStorage.clickcount = 0;
        bagelReward = false;
        document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " points."; 
        
        $('#bagel').removeClass();
        $('#bagel').addClass('bagel' + localStorage.clickcount);
    }
    
    console.log(bagelReward);
    
    
    
    
    $('.close-button').foundation('close');
});
//});
