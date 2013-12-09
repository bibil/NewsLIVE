var video = document.getElementById("v");

var playButton = document.getElementById("play-pause");
var muteButton = document.getElementById("mute");
var fullScreenButton = document.getElementById("full-screen");

var seekBar = document.getElementById("seek-bar");
var volumeBar = document.getElementById("volume-bar");

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.innerHTML = "Pause";
  } else {
    video.pause();
    playButton.innerHTML = "Play";
  }
});

muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;

    // Update the button text
    muteButton.innerHTML = "Unmute";
  } else {
    // Unmute the video
    video.muted = false;

    // Update the button text
    muteButton.innerHTML = "Mute";
  }
});
fullScreenButton.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

seekBar.addEventListener("change", function() {
  // Calculate the new time
  var time = video.duration * (seekBar.value / 100);

  // Update the video time
  video.currentTime = time;
});
video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
});
// seekBar.addEventListener("mousedown", function() {
//   video.pause();
// });

// // Play the video when the slider handle is dropped
// seekBar.addEventListener("mouseup", function() {
//   video.play();
// });
volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
});