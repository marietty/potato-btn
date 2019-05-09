document.addEventListener("DOMContentLoaded", function(){
  var play = document.getElementById('play'),
    audioArr = [
      'sound/pari01.mp3',
      'sound/pari02.mp3',
      'sound/pori01.mp3',
      'sound/pori02.mp3'
    ];

  var playAudio = function() {
    var audio = new Audio(),
      num = Math.floor(Math.random() * audioArr.length);
    if (num == audioArr.length) {
      num = audioArr.length - 1;
    }
      audio.src = audioArr[num];
      audio.play();
  }
  play.addEventListener('click', function() {
    playAudio();
  });
 
}, false);
