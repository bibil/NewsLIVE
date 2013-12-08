var w;
function startWorker(){
	if(typeof(Worker)!=="undefined"){
		if(typeof(w)=="undefined"){
			w = new Worker("WebWorker.js");
			alert(w);
		}
		w.onmessage = function (event){document.getElementById("result").innerHTML = event.data};
	}
}

function stopWorker(){
	w.terminate();
}
