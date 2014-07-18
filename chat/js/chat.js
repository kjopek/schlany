navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;


var errorCallback = function(e) {
    console.log('Reeeejected!', e);
};

var mediaCallback = function(mediaStream) {
    console.log("Found camera");
    var video = document.getElementById('me');
    video.src = window.URL.createObjectURL(mediaStream);
};

if (navigator.getUserMedia) {
  console.log("We have video!");
  navigator.getUserMedia({video: true}, mediaCallback, errorCallback);
} else {
    console.log("Could not find getusermedia");
}

if (Modernizr.geolocation) {
    console.log("We have geo!");
}

