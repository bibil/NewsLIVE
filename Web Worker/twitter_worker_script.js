var w;

if(typeof(Worker)!=="undefined"){
	w = new Worker("WebWorker.js");
	alert(w);
	w.onmessage = function (event){document.getElementById("result").innerHTML = event.data};
}