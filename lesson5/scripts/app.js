const input = document.getElementById('favchap');
const btn = document.getElementById('btn');
const ul = document.getElementById('list');

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const text = input.value;
    if (text !== ''){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text
        li.appendChild(p);
        li.appendChild(deletebtn());
        ul.appendChild(li);
        input.value = '';
        input.focus()
    }
});
function deletebtn(){
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.className = 'btn-del';
    delBtn.addEventListener('click', (e) => {
        const i = e.target.parentElement;
        ul.removeChild(i); 
        const items = document.querySelectorAll('li');
    });
    return delBtn
}
