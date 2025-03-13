const button = document.createElement("button");
button.id = "button";
button.textContent = "Click Me";
document.body.appendChild(button);

const p = document.createElement("p");
p.id = "compteur";
p.textContent = "0";
document.body.appendChild(p);

function addOne() {
    p.textContent = parseInt(p.textContent) + 1;
}
button.addEventListener("click", addOne);
