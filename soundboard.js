function play_sound(clicked_id) {
    console.log("Button clicked: " + clicked_id);
    var audio = new Audio(clicked_id + ".mp3");
    audio.play();
  }
  
  