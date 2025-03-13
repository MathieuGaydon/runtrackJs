document.addEventListener("DOMContentLoaded", function() {
    const article = document.createElement("article");
    article.id = "citation";
    article.textContent = "La vie a beaucoup plus d’imagination que nous";
    article.style.display = "none"; 
    const button = document.createElement("button");
    button.id = "button";
    button.textContent = "Click Me";
    document.body.appendChild(article);
    document.body.appendChild(button);
    function afficherCitation() {
        article.style.display = "block";
        citation();
    }
    function citation() {
        const citationText = document.getElementById("citation").textContent;
        console.log(citationText);
    }
    button.addEventListener("click",afficherCitation);
});
