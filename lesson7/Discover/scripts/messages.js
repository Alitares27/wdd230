const day = new Date().gethay(); 
let message;
if (day > 0 && day < 3 ) {
  message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
} else {
  message = 'Welcome';
}
document.getElementById("message").innerHTML = message;