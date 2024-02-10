function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body")
const color = document.querySelector(".color")

const changeBg = () => {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  color.textContent = newColor;
}

btn.addEventListener("click", changeBg)