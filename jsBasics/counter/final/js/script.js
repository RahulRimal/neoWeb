counter = document.getElementById("counter");

function increaseCounter() {
  counterText = counter.innerText;

  counterText++;

  counter.innerText = counterText;
}

function decreaseCounter() {
  counterText = parseInt(counter.innerText);

  if (!counterText <= 0) counterText--;

  counter.innerText = counterText;
}
