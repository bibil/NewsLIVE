var worker = new Worker('update.js');
var current = "";
worker.postMessage(current);
worker.addEventListener('message', function(event){
    console.log('Receiving from Worker: '+event.data);
    
});