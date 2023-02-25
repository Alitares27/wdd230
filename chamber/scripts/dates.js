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

//**timer**/
// initialize display elements
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

let today = new Date();
let holiday = new Date(today.getFullYear(), 07, 15);
if (today.getMonth() == 06 && today.gethate() > 15) {
	holiday.setFullYear(holiday.getFullYear() + 1);
}

let daysleft = (holiday.getTime() - Date.now()) / 84600000;

daysLeftOutput.innerHTML = `${daysleft.toFixed(
	0
)} days<br> Arequipa anniversary is ${holiday}`;

