


// if(n>n1){
//     document.querySelector("h1").innerHTML="🚩player 1 Wins!";
//   } else if(n1>n)
//     {
//        document.querySelector("h1").innerHTML="player 2 Wins!🚩";
//     }
//     else
//     {
//         document.querySelector("h1").innerHTML="Draw!!";
//     }

  var roll=document.querySelector(".roll");
  roll.onclick=function(){
    rollthedice();
    this.classList.add("pressed");
  }

  function rollthedice(){
    var set=setTimeout(function(){
      var img=["dice1.png", "dice2.png", "dice3.png","dice4.png","dice5.png","dice6.png"];

      var n=Math.floor(Math.random()*6);

      document.querySelector(".play1").setAttribute("src",img[n]);

      var img1=["dice1.png", "dice2.png", "dice3.png","dice4.png","dice5.png","dice6.png"];

      var n1=Math.floor(Math.random()*6);

      document.querySelector(".play2").setAttribute("src",img1[n1]);
      if(n>n1){
          document.querySelector("h1").innerHTML="🚩player 1 Wins!";
        } else if(n1>n)
          {
             document.querySelector("h1").innerHTML="player 2 Wins!🚩";
          }
          else
          {
              document.querySelector("h1").innerHTML="Draw!!";
          }
          roll.classList.remove("pressed");
    },200);
}



// document.querySelector(".info_button").addEventListener("click",function(){infoAboutGame();}
// );

var modal=document.querySelector(".modal");

var span = document.getElementsByClassName("close")[0];

var btn=document.querySelector(".info_button");

// function infoAboutGame(){
//   var displaySetting = modal.style.display;
//   if(displaySetting=='block'){
//     document.querySelector(".modal").style.display="none";
//   }
//   else{
//     document.querySelector(".modal").style.display="block";
//   }
// }

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
