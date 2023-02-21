let date = new Date(document.lastModified);
let shorthate = date.toLocaleDateString('en-US');
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let fullDate = `${shorthate} ${hour}:${minutes}:${seconds}`
document.getElementById("modifiedDate").innerHTML = fullDate;
let currenthate = new Date()
let currentYear = currenthate.getFullYear()
document.getElementById('year').innerHTML = currentYear;