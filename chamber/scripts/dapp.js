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

//Lazy Images
const images = document.querySelectorAll('img');
function intersection(entries,observer){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.src = entry.target.src;
		}else{
			return;
		}
		observer.unobserve(entry.target)
	});	
}
const options = {
	root: null,
	rootMargin: '0px',
	threshold:0.7
}

const observer = new IntersectionObserver(intersection,options);
images.forEach(image=>{
	observer.observe(image);
})

let dateTime = document.getElementById('dateTime')
dateTime = 5*2

console.log(dateTime)

