const Thankful = document.querySelector('.Thankful')
const truck = document.querySelector('.truck')
const forYou = document.querySelector('.forYou')
const webB1 = document.querySelector('.webB1')
const phonB1 = document.querySelector('.phonB1')
let first = ''

const primera = document.querySelector('.primera')
const pencils = document.querySelector('.pencils')
const forYouB2 = document.querySelector('.forYouB2')
const webB2 = document.querySelector('.webB2')
const phonB2 = document.querySelector('.phonB2')



const treefort = document.querySelector('.treefort')
const tree = document.querySelector('.tree')
const forYouB3 = document.querySelector('.forYouB3')
const webB3 = document.querySelector('.webB3')
const phonB3 = document.querySelector('.phonB3')


async function getData() {
    const response = await fetch('https://alitares27.github.io/wdd230/chamber/scripts/data.json');
    const json = await response.json();
    console.log(json);
    const myData = [];
    var companies = json.companies
    myData.push(companies) 
    console.log(myData)
    json.companies.forEach((element) => {
       if(element.membership==='Gold' && element.category ==='Vacation and Travel'){
        Thankful.innerHTML = element.name
        first = element.name
        console.log(first)
        truck.setAttribute('src',element.image)
        forYou.innerHTML = element.Description
        webB1.innerHTML = element.Website
        phonB1.innerHTML = element.contact
       }else if(element.membership ==='Silver'){
        primera.innerHTML = element.name
        pencils.setAttribute('src',element.image)
        forYouB2.innerHTML = element.Description
        webB2.innerHTML = element.Website
        phonB2.innerHTML = element.contact
       
       }else if (element.membership ==='Gold' && element.category !='Vacation and Travel'){
        treefort.innerHTML = element.name
        tree.setAttribute('src',element.image)
        forYouB3.innerHTML = element.Description
        webB3.innerHTML = element.Website
        phonB3.innerHTML = element.contact
       }
        
    });
  }
  getData();