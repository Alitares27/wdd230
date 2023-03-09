const Wimg = document.querySelector('.weather-img');
const speed = document.querySelector('.speed')
const grade = document.querySelector('.grade')
const chill = document.querySelector('.chill')
const desc = document.querySelector('.desc')

//Temperature
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-16.399&lon=-71.535&appid=4459620e17f02a15afac1eef17a40f98';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    kelvin = weatherData.main.temp.toFixed(0);
    temperature = kelvin - 273.15
    grade.innerHTML = temperature.toFixed(0);

    //velocity
    const vel = weatherData.wind.speed;
    speed.innerHTML= vel;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const descript = (weatherData.weather[0].description).toUpperCase();
  
    Wimg.setAttribute('src', iconsrc);
    Wimg.setAttribute('alt', desc);
    desc.textContent = descript;
if (temperature>11 || vel > 4){
    chill.innerHTML = 'N/A';
}else{
    const Wchill = ((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(vel,0.16)) + (0.4275*temperature*Math.pow(vel,0.16))).toFixed(1);
    console.log(Wchill)
    chill.innerHTML = Wchill;
}

  }








