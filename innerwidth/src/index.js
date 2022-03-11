function print(size) {
  if (size < 700) {
    document.body.style.backgroundColor = "Tomato";
  } else if (size < 800) {
    document.body.style.backgroundColor = "gold";
  } else {
    document.body.style.backgroundColor = "green";
  }
}

window.addEventListener("resize", () => {
  let widthSize = window.innerWidth;
  let size = parseInt(widthSize);
  print(size);
});

// https://codesandbox.io/s/empty-blueprint-forked-kp2qit?file=/src/index.js