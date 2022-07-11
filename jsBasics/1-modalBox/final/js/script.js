// let modalBox = document.getElementById("modal-box");


// function showModal() {
//   modalBox.classList.remove("hide-it");
//   modalBox.classList.add("show-it");
// }

// function hideModal() {
//   modalBox.classList.remove("show-it");
//   modalBox.classList.add("hide-it");
// }


let modalBox = document.querySelector("#modal-box")

let btn = document.querySelector('#justTry');



btn.addEventListener('click', function()
{
  modalBox.classList.remove('hide-it')
  modalBox.classList.add('show-it')
  
});