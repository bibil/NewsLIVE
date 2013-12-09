var count = 0;
window.setInterval(function(){
    count++;
    if (count == 4) {
        document.getElementById("news").className = "fade-out";
        btnElement = "Fade In";
        count = -1;
    }
    else if (count == 0){
        document.getElementById("news").className = "fade-in";
        btnElement = "Fade Out";
    }
}, 1500);
var worker = new Worker('update.js');
var current = "";
worker.postMessage(current);
worker.addEventListener('message', function(event){
    console.log('Receiving from Worker: '+event.data);
    
});