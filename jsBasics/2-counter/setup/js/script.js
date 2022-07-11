// let count = 0;
//       let counterBox = document.getElementById('counter');

//       function increaseCounter()
//       {
//         count++

//         counterBox.innerText = count;

//       }

//       function decreaseCounter()
//       {
//         if(count > 0)
//         {
//           count --;
//         }

//         counterBox.innerText = count;

//       }


let count = 0;

let counterBox = document.getElementById('counter');

function changeCounter(clickedButton) {
  if(clickedButton.name === 'increase')
  {
    count ++;
  }
  else if(clickedButton.name === 'decrease')
  {
    count --;
  }

  else
  {
    count = 0;
  }

  counterBox.innerText = count;

}