function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat:59.3293, lng:18.0686}
    });
    directionsDisplay.setMap(map);
  
    var onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
  }
  
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      travelMode: google.maps.TravelMode.WALKING
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
//marker som visar vart du är




  // Visar nuvarande position
   /*    

  
      var point = new google.maps.LatLng(position.coords.latitude, 
    position.coords.longitude);
  
      // 
      var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 15,
        center: point,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
  
      //marker som visar vart du är
      new google.maps.Marker({
        position: point,
        map: map
      });
    }); 
  } 
  else {
    alert('Får jag veta din plats?'); 
  } 
   */

/*function stationval() {
    var val = document.getElementById("val");
    var s = s.selectedIndex;


if(value.options == "StockholmCity"){
    document.getElementById("demo5").innerHTML = "Error, vi kan inte ta upp tidtabellen";
}};*/

// val av station från user
var stationval = document.getElementById('val');
stationval.onchange = function() {
// väljer station ssom står i boxen ex liljeolmen
  var userVal = this.options[this.selectedIndex];
//öppnas nytt fönster pga att user väljer
  if (userVal.value != "inget" ){
window.open(userVal.value, " Hej hopp","");

  }
}

  

//LADDAR om sidan

//setTimeout(function(){
  //window.location.reload(1);
//},100000);


      
 
 //TIMER
  
 // Set the date we're counting down to
 var DisplayTime = new Date("Jan 5, 2019 15:37:25" ).getTime();
 
 // Uppdaterar varje minut
 var x = setInterval(function() {
 
     // Dagens tid
     var now = new Date().getTime();
     
     // Tiden mellan Displaytime och nu?
     var distance = DisplayTime - now;
     
     // Tisräkning minuter och seccunder. ner
 
     var minutes = Math.floor((distance % (200 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
     // Output the result in an element with id="demo"
     document.getElementById("raknaned").innerHTML =  minutes + " Min " + seconds + " Sec ";
     
     // If the count down is over, write some text 
     if (DisplayTime < 10 ) {
         clearInterval(window.location.reload(1));
         document.getElementById("raknaned").innerHTML = minutes;
     }
 },1000 ); 
  
// Inloggning

function clicked() {
  var email = document.getElementById('email');
 var password = document.getElementById('password');
 var number = document.getElementById('number');
 
 
 var useremail = "test";
 var userpassword = "1234";
 
 if( email.value == useremail) {
 
 
     if(password.value == userpassword) {
 
 window.alert(" Du är inloggad som " + email.value);
 window.open("profil.html");
 
 } else {
 
     window.alert("Din email stämmer finns inte");
 
 }
 } else {
 
     window.alert("Din stämmer inte ");
 
 }
 }

 
// Klockan

function changeTime()
{
var today = new Date();

var timme = today.getHours();
var minut = today.getMinutes();
var secund = today.getSeconds();

timme = checkTime(timme);
minut = checkTime(minut);
secund = checkTime(secund);

document.getElementById('timme').innerHTML = timme;
document.getElementById('minut').innerHTML = minut;
document.getElementById('secund').innerHTML = secund;



}



setInterval("changeTime()", 1000);

function checkTime(id){
if (id < 10)
id = "0" + id;
{

return id;

}
}