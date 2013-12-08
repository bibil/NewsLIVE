self.addEventListener('message',  function(event){
    var currPrime = event.data, nextPrime;
    setInterval( function(){
    
    var message = "lol";
    postMessage(message);   
    }, 500);
});

