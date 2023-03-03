const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//**Async Function**//
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}
  getProphetData();

  //**Display Function**/
  const displayProphets = (prophets) => {
    const cards = document.querySelector('.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let h4 = document.createElement('h4')
      let h3 = document.createElement('h3')
      let h32 = document.createElement('h3')
      let h1 = document.createElement('h1')
      let h33 = document.createElement('h3')
      let h34 = document.createElement('h3')
      
 
 
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      h4.textContent = `Birth: ${prophet.birthdate}`;
      h3.textContent = `Place: ${prophet.birthplace}`;
      h32.textContent = `Death: ${prophet.death}`;
      
      h1.textContent = `${prophet.order}° President`;

      //dates
      var nage = new Date(prophet.death)
      var nage2 = new Date(prophet.birthdate)
      console.log(nage)
      if(prophet.death === null){
        console.log(prophet.name)
        h33.style.display = 'none';
        h32.style.display = 'none';
        h34.textContent = 'He is our current prophet';
        h34.style.fontSize = '200%'
      }
      
      bdate = new Date(prophet.birthdate)
      ddeath = new Date(prophet.death)
      let dif = ddeath.getYear() - bdate.getYear()
      h33.textContent ='Age: '+ dif;
      
      
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${prophet.order}° Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h4);
      card.appendChild(h3);
      card.appendChild(h32);
      card.appendChild(h33);
      card.appendChild(h34);
      card.appendChild(portrait);
      cards.appendChild(card);
    })// end of forEach loop
  } // end of function expression