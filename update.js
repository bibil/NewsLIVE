var invocation = new XMLHttpRequest();
    url = "http://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml";
self.addEventListener('message',  function(event){
    var currPrime = event.data, nextPrime;
    setInterval( function(){
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();


    }, 500);
});


function handler(evtXHR)
{
    if (invocation.readyState == 4)
    {
        if (invocation.status == 200)
        {
            outputResult();
        }
        else
        {
            alert("Invocation Errors Occured");
        }
    }
}

function outputResult()
{
    var response = invocation.responseText;
    xmlDoc = invocation.responseXML; 
    message = xmlDoc.getElementsByTagName("item")[0].childNodes[0].nodeValue;
    postMessage(message);
}