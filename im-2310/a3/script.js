var audio1 = new Audio('./sound/meteorite.mp3');
var audio2 = new Audio('./sound/ambient.mp3');
var audio3 = new Audio('./sound/dinoroar.mp3');

window.onload=function() {
    document.getElementById('meteorite').addEventListener('click', function () {audio1.play();});
    document.getElementById('animation').addEventListener('click', function () {audio3.play();});
    let muteButton = document.getElementById("muteButton");
    muteButton.addEventListener("click", muteUnmute);
    let modal = document.getElementById("modalDialog");
    let showModalButton = document.getElementById("showModal");
    showModalButton.addEventListener("click", () => {
      modal.showModal();
    });
    let closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", () => {
      modal.close();
    });
  }

function fade(){
    var overlay = document.getElementById("overlay");
    overlay.setAttribute("id", "hidden");
    document.getElementById("startbutton").style.visibility = 'hidden';
    audio2.play();
    audio2.loop = true;
  }

  function text(){
    document.getElementById("popup").style.visibility = 'visible';
  }

  function notext(){
    document.getElementById("popup").style.visibility = 'hidden';
  }

  function muteUnmute(){
    console.log("mute/unmute");
    if(audio2.muted){
      audio2.muted = false;
      muteButton.style.backgroundImage = "url('./img/bird1.png')";
  
    } else{
      audio2.muted = true;
      muteButton.style.backgroundImage = "url('./img/bird2.png')";
    }
  
  }  

