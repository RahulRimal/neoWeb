let body = document.getElementById('body')
let button = document.getElementById('dd');

let changeToRed = false;

function changeBg() {

    changeToRed = !changeToRed;

   if(changeToRed === true)
   {
    body.style.backgroundColor = 'rgb(255, 90, 90)';
    button.style.backgroundColor = '#fff';
    button.style.color = 'rgb(255, 90, 90)';
    button.innerText = 'revert back';
   }

   if(changeToRed === false)
   {
    body.style.backgroundColor = 'white';
    button.style.backgroundColor = 'rgb(255, 90, 90)';
    button.style.color= 'white';
    button.innerText = 'Click Me';
    
   }

}