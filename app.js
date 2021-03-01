const text = document.getElementById('text');
const textArr = text.innerText.split('');

const newEl = document.createElement('h1');
newEl.innerHTML = `${textArr.map(letter => 
    `<span style="${random()}">${letter}</span>`).join('')}`;
newEl.classList.add('layer');
document.body.appendChild(newEl);
function random(){
    return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible';
}