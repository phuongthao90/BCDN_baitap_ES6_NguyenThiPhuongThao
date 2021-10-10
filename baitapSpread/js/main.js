
let text = document.querySelector('.heading').innerHTML;
//console.log(text);
let fullText = [...text];
console.log(fullText);


let content = '';
for (let i in fullText) {
 content +=`<span>${fullText[i]}</span>`;
}
document.querySelector('.heading').innerHTML = content;


