
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



