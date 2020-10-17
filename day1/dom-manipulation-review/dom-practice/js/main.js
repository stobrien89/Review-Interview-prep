// alert("js loaded");

const btn = document.querySelector("button");
// btn.addEventListener("click", (evt) => {
//   console.log(evt);
// });

btn.addEventListener("click", (event) => {
  const li = document.createElement("li");
  const inp = document.querySelector("input");
  li.textContent = inp.value;
  console.log(li);
});

document.querySelector("ul").addEventListener("click", (event) => {
  console.log(event);
});

btn.removeEventListener("click");
