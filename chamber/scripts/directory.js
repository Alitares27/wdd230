const url = 'https://alitares27.github.io/wdd230/chamber/scripts/data.json';
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
  }
  
  getProphetData();

//**Display Function**/
const displayData = (res) => {
    const cards = document.get('.container');
    res.forEach((resti) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let h1 = document.createElement('h1')
        let h4 = document.createElement('h4')
        let h41 = document.createElement('h4')
        let p = document.createElement('p')
       
        h1.textContent = `${resti.name}`;
        h4.textContent = `Category: ${resti.category}`;
        h41.textContent = `Website: ${resti.Website}`;
        p.textContent = `Description: ${resti.Description}`;
        
        portrait.setAttribute('src', resti.image);
        portrait.setAttribute('alt', `Portait of ${res.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild('h1');
        card.appendChild('portrait');
        card.appendChild('h4');
        card.appendChild('h41');
        card.appendChild('p');

        cards.appendChild(card);
    })
}