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
const dayName = daynames[d.gethay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const newdate = `${dayName}, ${d.gethate()} ${monthName} ${year}`;
document.getElementById('date-box').innerHTML = newdate

const day = new Date().gethay(); 
    let message = getElementById('message');
    if (day > 0 && day < 8 ) {
      message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    } else {
      message = 'welcome';
    }
    document.getElementById("message").innerHTML = message;
