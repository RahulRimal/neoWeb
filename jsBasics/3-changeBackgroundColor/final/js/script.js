changeIt = true;

function changeBackground() {
  let body = document.getElementsByTagName("body")[0];

  let colorChanger = document.getElementsByTagName("button")[0];

  if (changeIt) {
    body.style.backgroundColor = "rgb(255, 90, 90)";
    colorChanger.style.backgroundColor = "white";
    colorChanger.style.color = "rgb(255, 90, 90)";
    colorChanger.innerText = "revert back";
    changeIt = false;
  } else {
    body.style.backgroundColor = "white";
    colorChanger.style.backgroundColor = "rgb(255, 90, 90)";
    colorChanger.style.color = "white";
    colorChanger.innerText = "click me";
    changeIt = true;
  }
}
