//**Menu**//
function togglemenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
    }
    const x = document.getElementById('hamburgerBtn')
    x.onclick = togglemenu;

//**Dates**//
//***Last Modification***/
let date = new Date(document.lastModified);
let shorthate = date.toLocaleDateString('en-US');
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let fullDate = `${shorthate} ${hour}:${minutes}:${seconds}`;
document.getElementById('modifiedDate').innerHTML = fullDate;

//**Year**//
let currentdate = new Date();
let currentYear = currentdate.getFullYear();
document.getElementById('year').innerHTML = currentYear;

//**Date**//
const d = new Date();
const dayName = d.getDate();
const monthName = d.getMonth()+1;
const year = d.getFullYear();

//**Weather-API**//
const Wimg = document.querySelector('.wtrIco');
const grade = document.querySelector('.tmp')
const desc = document.querySelector('.cdt')
const hum = document.querySelector('.hum')
const dtime = document.querySelector('.dtime')

const Wimg2 = document.querySelector('.wtrIco2');
const grade2 = document.querySelector('.tmp2')
const desc2 = document.querySelector('.cdt2')
const hum2 = document.querySelector('.hum2')
const dtime2 = document.querySelector('.dtime2')

const Wimg3 = document.querySelector('.wtrIco3');
const grade3 = document.querySelector('.tmp3')
const desc3 = document.querySelector('.cdt3')
const hum3 = document.querySelector('.hum3')
const dtime3 = document.querySelector('.dtime3')

const Wimg4 = document.querySelector('.wtrIco4');
const grade4 = document.querySelector('.tmp4')
const desc4 = document.querySelector('.cdt4')
const hum4 = document.querySelector('.hum4')
const dtime4 = document.querySelector('.dtime4')


//Temperature
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.421&lon=-104.229&cnt=24&appid=4459620e17f02a15afac1eef17a40f98';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    kelvin = weatherData.list[0].main.temp.toFixed(0);
    temperature = kelvin - 273.15
    grade.innerHTML = temperature.toFixed(0) + '°C';
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const descript = (weatherData.list[0].weather[0].description).toUpperCase();
    Wimg.setAttribute('src', iconsrc);
    Wimg.setAttribute('alt', desc);
    desc.textContent = descript;
    humidity = weatherData.list[0].main.humidity;
    hum.textContent ='Humidity: ' + humidity +'%';
    ft = weatherData.list[0].dt;
    var ntime = new Date(ft*1000);
    nday = ntime.getDate()
    nmonth = ntime.getMonth() +1;
    console.log(nmonth)
    nyear = ntime.getFullYear()
    dt1 = nmonth + '/' + nday + '/' + nyear;
    dtime.innerHTML = dt1;

    //***2**//
    kelvin2 = weatherData.list[6].main.temp.toFixed(0);
    temperature2 = kelvin2 - 273.15
    grade2.innerHTML = temperature2.toFixed(0) + '°C';
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[6].weather[0].icon}.png`;
    const descript2 = (weatherData.list[6].weather[0].description).toUpperCase();
    Wimg2.setAttribute('src', iconsrc2);
    Wimg2.setAttribute('alt', descript2);
    desc2.textContent = descript2;
    humidity2 = weatherData.list[6].main.humidity;
    hum2.textContent ='Humidity: ' + humidity2 +'%';
    ft2 = weatherData.list[6].dt;
    var ntime2 = new Date(ft2*1000);
    nday2 = ntime2.getDate()
    nmonth2 = ntime2.getMonth()+1
    nyear2 = ntime2.getFullYear()
    dt2 = nmonth2 + '/' + nday2 + '/' + nyear2;
    dtime2.innerHTML = dt2;
    
    //**3**//
    kelvin3 = weatherData.list[15].main.temp.toFixed(0);
    temperature3 = kelvin3 - 273.15
    grade3.innerHTML = temperature3.toFixed(0) + '°C';
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[14].weather[0].icon}.png`;
    const descript3 = (weatherData.list[15].weather[0].description).toUpperCase();
    Wimg3.setAttribute('src', iconsrc3);
    Wimg3.setAttribute('alt', descript3);
    desc3.textContent = descript3;
    humidity3 = weatherData.list[15].main.humidity;
    hum3.textContent ='Humidity: ' + humidity3 +'%';
    ft3 = weatherData.list[15].dt;
    var ntime3 = new Date(ft3*1000);
    nday3 = ntime3.getDate()
    nmonth3 = ntime3.getMonth()+1
    nyear3 = ntime3.getFullYear()
    dt3 = nmonth3 + '/' + nday3 + '/' + nyear3;
    dtime3.innerHTML = dt3;

    //**4**/
    kelvin4 = weatherData.list[22].main.temp.toFixed(0);
    temperature4 = kelvin4 - 273.15
    grade4.innerHTML = temperature4.toFixed(0) + '°C';
    const iconsrc4 = `https://openweathermap.org/img/w/${weatherData.list[22].weather[0].icon}.png`;
    const descript4 = (weatherData.list[22].weather[0].description).toUpperCase();
    Wimg4.setAttribute('src', iconsrc4);
    Wimg4.setAttribute('alt', descript4);
    desc4.textContent = descript4;
    humidity4 = weatherData.list[22].main.humidity;
    hum4.textContent ='Humidity: ' + humidity4 +'%';
    ft4 = weatherData.list[22].dt;
    var ntime4 = new Date(ft4*1000);
    nday4 = ntime4.getDate()
    nmonth4 = ntime4.getMonth()+1
    nyear4 = ntime4.getFullYear()
    dt4 = nmonth4 + '/' + nday4 + '/' + nyear4;
    dtime4.innerHTML = dt4;
  }

  /**Fruits API**/
  
  const url2 = ('https://alitares27.github.io/wdd230/lesson12/scripts/fruitlist.json');
  
  async function getFruitData() {
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    displayFruits(data2.fruits)// note that we reference the prophet array of the data object given the structure of the json file
  }
  
  getFruitData();
  
  const displayFruits = (fruits) => {
    const list = document.querySelector('.fruitdb')
    let ft1 = document.createElement('select');
    ft1.setAttribute('id','ft1')
    let ft2 = document.createElement('select');
    ft2.setAttribute('id','ft2')
    let ft3 = document.createElement('select');
    ft3.setAttribute('id','ft3')
    
    
    fruits.forEach((fruit) => {
        let opt = document.createElement("option");
        let crb = parseFloat(`${fruit.nutritions.carbohydrates}`)
        let prt = parseFloat(`${fruit.nutritions.protein}`)
        let fat = parseFloat(`${fruit.nutritions.fat}`)
        let cal = parseFloat(`${fruit.nutritions.calories}`)
        let sug = parseFloat(`${fruit.nutritions.sugar}`)

        console.log(crb,prt,fat,cal,sug)
        let opt2 = document.createElement("option");
        let opt3 = document.createElement("option");
        
        opt.textContent = `${fruit.name}`;
       
        opt2.innerHTML = `${fruit.name}`;
      
        opt3.innerHTML = `${fruit.name}`;
       
        ft1.appendChild(opt);
        ft2.appendChild(opt2);
        ft3.appendChild(opt3);
        list.appendChild(ft1);
        list.appendChild(ft2);
        list.appendChild(ft3);


    
  })}
    //**Display Recipe**//
function Mrecipe(){
  const names = document.getElementById('names').value;
  const emails = document.getElementById('emails').value;
  const phones = document.getElementById('phones').value;
  const ft11 = document.getElementById('ft1').options[ft1.selectedIndex].text;
 const ft111 = ft11.options[ft1.selectedIndex]
  let crb1 = (`${fruit[ft111].nutritions.carbohydrates}`)

  console.log(crb1)
  const ft21 = document.getElementById('ft2').options[ft2.selectedIndex].text;
  const ft31 = document.getElementById('ft3').options[ft3.selectedIndex].text;
  const descript =document.querySelector('.descript').value;
 let mdate = `${monthName} /${dayName}/${year}`;

  alert(`Hi ${names}\n${emails}\n${phones}\n Your fruits are:\nFruit 1: ${ft11}\n Fruit 2: ${ft21} \n Fruit 3: ${ft31}\n Instructions: ${descript}\n${mdate}`)

 let drinkls = document.getElementById('drinkls')
  let Drink = Number(window.localStorage.getItem('Drinks'));
  Drink++
  localStorage.setItem("Drinks", Drink);
  if (Drink !== 0) {
    drinkls.textContent = 'This is a great Recipe';
  } else {
    drinkls.textContent = `This is your first Recipe`;
  }
  
  }
  Mrecipe()

  

 