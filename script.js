let label = "Read";
console.log(label);

document.querySelector("#mark").addEventListener("click", () => {
  document.querySelector("#status").textContent = label;
});
