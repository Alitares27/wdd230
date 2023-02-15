for(let number = 10; number <=20; number++){
const images = document.createElement('img');
const messages = document.createElement('p')
messages.innerHTML = `Image ${number}`
images.setAttribute('loading','lazy')
images.setAttribute('src', `https://picsum.photos/1600/900?${number}`);
document.body.appendChild(images);
document.body.appendChild(messages)
}
const option = {
    threshold: 0.8
}

let block = document.querySelectorAll('img');
const calling = (entries,observer)=>{
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return;
        }observer.unobserver(entry.target)
    });
};

const observer = new IntersectionObserver(calling, option);

