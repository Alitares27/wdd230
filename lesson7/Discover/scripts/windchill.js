const speed = document.querySelector('.speed')
const grade = document.querySelector('.grade')
const chill = document.querySelector('.chill')

//Temperature
function randomTemperature(min, max) {
    min = -20;
    max = 10;
    return Math.round(Math.floor((Math.random() * (max - min + 1)) + min));
}
const temperature = randomTemperature()

//Velocity
function randomspeed(min, max) {
    min = 4.8;
    max = 177;
    return (Math.floor((Math.random() * (max - min + 1)) + min)).toFixed(1);
}
const velocity = randomspeed()

//converter
var mph = (velocity / 1.609).toFixed(1)
var celsius= temperature;
var tempfahrenheit  = Math.round((celsius * (9/5))+32)

//Calculator
var fahrenheitChill = ((35.74 + (0.6215 * tempfahrenheit))-(35.75 * Math.pow(mph,0.16)) + (0.4275*tempfahrenheit*Math.pow(mph,0.16))).toFixed(2);
var celsiuschill = ((fahrenheitChill-32)*(5/9)).toFixed(1)

//printer
chill.innerHTML = celsiuschill
grade.innerHTML = temperature
speed.innerHTML = velocity

