const keyBtn = document.querySelector(".key-btn");
const keyASCII = document.querySelector(".key-ascii");
const keyValue = document.querySelector(".key-value");
const heading = document.querySelector(".heading--primary");

document.body.addEventListener("keyup", function (event) {
  heading.textContent = `Pressed: ${event.key}`;
  keyValue.textContent = event.key;
  keyASCII.textContent = event.keyCode;

  if (event.code.toLowerCase() === "space") {
    heading.textContent = "Pressed: Spacebar";
    keyValue.textContent = "Spacebar";
  }
});
