
//     console.log(e.target.parentElement.nextElementSibling)

function showBody(btn) {
  let faqBody =  btn.parentElement.nextElementSibling;

  faqBody.classList.toggle('show-it');
  faqBody.classList.toggle('hide-it');

  btn.classList.toggle('fa-plus');
  btn.classList.toggle('fa-minus');

}