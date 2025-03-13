const button = document.createElement("button");
button.id = "button";
button.textContent = "Click Me";
document.body.appendChild(button);


const article = document.createElement("article");
article.id = "citation";
article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
article.style.display = "none"; 
document.body.appendChild(article);

function showhide() {
    if (article.style.display === "none") {
        article.style.display = "block";
    } else {
        article.style.display = "none"; 
    }
}

button.addEventListener("click", showhide);
