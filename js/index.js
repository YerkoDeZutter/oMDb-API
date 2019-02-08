window.onload = function() {

  $.get("http://www.omdbapi.com/?apikey=5b5839a9", function(data) {
    console.log(data);
  })

}
