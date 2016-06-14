



$(document).ready(function(){

  $('.subButton').on('click', function(){
    var myPromise = $.get("http://localhost:3000/someanimal");

    myPromise.then(function(d){
        $('.info').append("<h1>" + d + "</h1>");
    }).catch(function(err){
      console.log("An error has occurred: " + err);
    })
  });
});
