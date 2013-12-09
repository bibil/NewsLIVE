
var array = []; 
var index = 0;
var count = 0;
var counter = 0;
function parseRSS(url, container) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      //console.log(data.responseData.feed);
      
      $.each(data.responseData.feed.entries, function(key, value){
        var thehtml = value.title;
          array[index++] = thehtml;
      });
        index --;
        window.setInterval(function(){
            count++;
            if (count == 4) {
                container.className = "fade-out";
                count = -1;
            }
            else if (count == 0){
                counter++;
                if(counter > index)
                    counter =0;
                container.className = "fade-in";
                container.innerHTML = array[counter];
            }
        }, 1500);

    }
  });
}

/**
 * Capitalizes the first letter of any string variable
 * source: http://stackoverflow.com/a/1026087/477958
 */
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

