let date = new Date(document.lastModified);
let shorthate = date.toLocaleDateString('en-US');
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let fullDate = `${shorthate} ${hour}:${minutes}:${seconds}`
document.getElementById('modifiedDate').innerHTML = fullDate;
let currenthate = new Date()
let currentYear = currenthate.getFullYear()
document.getElementById('year').innerHTML = currentYear;

const daynames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const newdate = `${dayName}, ${d.getDay()} ${monthName} ${year}`;
document.getElementById('date-box').innerHTML = newdate

function togglemenu(){
document.getElementById('primaryNav').classList.toggle('open');
document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn')
x.onclick = togglemenu;

const day = new Date().getDay(); 
let message;
if (day > 0 && day < 3 ) {
  message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
} else {
  message = 'Welcome';
}
document.getElementById("message").innerHTML = message;
