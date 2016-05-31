var bagelReward = false;

if(localStorage.getItem('rewards') > 0){
    var rewards = localStorage.getItem('rewards');
		$('.points').html(localStorage.getItem("rewards"));
	} else {
    var rewards = 0;
    $('.points').html(rewards);
  }

  if (localStorage.getItem('rewards') == 10) {
    $('.points').css("color", "red");
 document.getElementById('bagel').style.backgroundImage="url(bagelimages/10.png)";
      
      
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

    if (localStorage.getItem('rewards') == 11) {
     
    }

  });


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
            $('#bagel').addClass('bagel-' + localStorage.clickcount);
        } else {
            localStorage.clickcount = 0;
            document.getElementById("result").innerHTML = "You have " + 1 + " free bagel";
            bagelReward = true; 
            ocument.getElementById("bagel").src = "bagelimages/1.png";
            $('#bagel').removeClass();
            $('#bagel').addClass('bagel-full');
        }
    } else {
        localStorage.clickcount = 0;
        bagelReward = false;
        document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " points."; 
        
        $('#bagel').removeClass();
        $('#bagel').addClass('bagel-' + localStorage.clickcount);
    }
}
    console.log(bagelReward);

//attempt at making picture update
    
//        if(localStorage.clickcount = 1 ){
//          document.getElementById("bagel").src = "bagelimages/1.png";
//        }
//console.log(clickcount)
//        } else if (localStorage.clickcount = 2 ){
//        
//         document.getElementById("bagel").src = "bagelimages/2.png";
//            
//            
//        }
//    } else if(localStorage.clickcount = 3 ){
//        document.getElementById("bagel").src = "bagelimages/3.png";
//
//
//    }
    
    
    $('.close-button').foundation('close');
    
})
