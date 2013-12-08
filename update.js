self.addEventListener('message',  function(event){
    var currPrime = event.data, nextPrime;
    setInterval( function(){
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","http://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML; 
    message =xmlDoc.getElementsByTagName("item")[0].childNodes[0].nodeValue;
    postMessage(message);   
    }, 500);
});

