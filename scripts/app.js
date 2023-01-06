let date = new Date(document.lastModified);
let shortDate = date.toLocaleDateString('en-US');
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let fullDate = `${shortDate} ${hour}:${minutes}:${seconds}`
document.getElementById("modifiedDate").innerHTML = fullDate;
let currentDate = new Date()
let currentYear = currentDate.getFullYear()
document.getElementById('year').innerHTML = currentYear;