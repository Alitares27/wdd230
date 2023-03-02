const url = 'https://alitares27.github.io/wdd230/chamber/scripts/data.json';
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.companies);
    console.table(data.companies);  // note that we reference the prophet array of the data object given the structure of the json file
  }
  getData();

//**Display Function**/
const displayData = (companies) => {
    const cards = document.querySelector('.cards');
    companies.forEach((company) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let h1 = document.createElement('h1')
        let h4 = document.createElement('h4')
        let h41 = document.createElement('h4')
        let h42 = document.createElement('h4')
        let p = document.createElement('p')
       
        h1.textContent = `${company.name}`;
        h4.textContent = `Category: ${company.category}`;
        h41.textContent = `Website: ${company.Website}`;
        h42.textContent = `Contact: ${company.contact}`;
        p.textContent = `Description: ${company.Description}`;
        
        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Portait of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h1);
        card.appendChild(portrait);
        card.appendChild(h4);
        card.appendChild(h41);
        card.appendChild(h42);
        card.appendChild(p);

        cards.appendChild(card);
    })
}