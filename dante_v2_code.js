var video = document.getElementById("myVideo"),
startbutton = document.getElementById("start"),
buttontwo = document.getElementById("go_two"),
buttonthree = document.getElementById("go_three"),
buttonfour = document.getElementById("go_four");

//click button to go to next canto
startbutton.addEventListener("click", function (event) {
  event.preventDefault();
  myVideo.play();
  myVideo.pause();
  myVideo.currentTime = 0;
  myVideo.play();
}, false);

buttontwo.addEventListener("click", function (event) {
  event.preventDefault();
  myVideo.play();
  myVideo.pause();
  myVideo.currentTime = 34;
  myVideo.play();
}, false);

buttonthree.addEventListener("click", function (event) {
  event.preventDefault();
  myVideo.play();
  myVideo.pause();
  myVideo.currentTime = 114;
  myVideo.play();
}, false);

buttonfour.addEventListener("click", function (event) {
  event.preventDefault();
  myVideo.play();
  myVideo.pause();
  myVideo.currentTime = 202;
  myVideo.play();
}, false);
