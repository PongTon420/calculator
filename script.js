let screen = document.getElementById("screen");

function screenDisplayPressedButton(button) {
  let string = button.value.trim();
  screen.innerHTML += string;
}

document.querySelectorAll(".writeButton").forEach((wrBtn) => {
  wrBtn.addEventListener("click", (event) => {
    screenDisplayPressedButton(event.target);
  });
});

document.getElementById("del").addEventListener("click", () => {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
});

document.getElementById("ac").addEventListener("click", () => {
  screen.innerHTML = "";
});

document.getElementById("opequal").addEventListener("click", () => {
  let result = eval(screen.innerHTML);
  result = Math.round(result * 1000) / 1000;
  screen.innerHTML = result;
});

//keydown
//dot
//:D
