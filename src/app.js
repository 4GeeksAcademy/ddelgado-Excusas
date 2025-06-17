


  //write your code here
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
 let randoWho = who[Math.floor(Math.random() * who.length)];
 let randoAction = action[Math.floor(Math.random() * action.length)];
 let randoWhat = what[Math.floor(Math.random() * what.length)];
 let randoWhen = when[Math.floor(Math.random() * when.length)];

 const excuse = `${randoWho} ${randoAction} ${randoWhat} ${randoWhen}`;

 document.getElementById('excusa').innerHTML = excuse;
}

window.onload = function() {
  generateExcuse();


const boton = document.getElementById('generarBtn');

boton.addEventListener('click', generateExcuse);

};
