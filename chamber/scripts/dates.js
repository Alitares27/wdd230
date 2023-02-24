//***Last Modification***/
let date = new Date(document.lastModified);
let shorthate = date.toLocaleDateString('en-US');
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let fullDate = `${shorthate} ${hour}:${minutes}:${seconds}`;
document.getElementById('modifiedDate').innerHTML = fullDate;
let currenthate = new Date();
let currentYear = currenthate.getFullYear();
document.getElementById('year').innerHTML = currentYear;

//***Date-Box***/
let d = new Date();
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
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const newdate = `${dayName}, ${d.getDay()} ${monthName} ${year}`;
document.getElementById('date-box').innerHTML = newdate;
