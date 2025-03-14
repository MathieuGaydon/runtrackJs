document.addEventListener("DOMContentLoaded", async () => {
    const typeSelect = document.getElementById("type");
    const filterBtn = document.getElementById("filter-btn");
    const resultsList = document.getElementById("results");

    let pokemons = [];

   
    try {
        const response = await fetch("assets/pokemon.json");
        pokemons = await response.json();
    } catch (error) {
        console.error(" Erreur lors du chargement des données :", error);
        return;
    }

    console.log(" Pokémon chargés :", pokemons); 

    
    const types = new Set();
    pokemons.forEach(pokemon => {
        pokemon.type.forEach(type => types.add(type));
    });

    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });

    
    filterBtn.addEventListener("click", () => {
        console.log(" Bouton Filtrer cliqué !"); 

        const idValue = document.getElementById("id").value.trim();
        const nameValue = document.getElementById("name").value.trim().toLowerCase();
        const typeValue = typeSelect.value;

        console.log("🔍 Filtrage avec : ID =", idValue, "Nom =", nameValue, "Type =", typeValue);

        const filteredPokemons = pokemons.filter(pokemon => {
            const matchId = idValue === "" || pokemon.id.toString() === idValue;
            const matchName = nameValue === "" || pokemon.name.french.toLowerCase().includes(nameValue);
            const matchType = typeValue === "" || pokemon.type.includes(typeValue);

            return matchId && matchName && matchType;
        });

        console.log(" Pokémon filtrés :", filteredPokemons);
        displayResults(filteredPokemons);
    });

    
    function displayResults(filteredPokemons) {
        resultsList.innerHTML = ""; 

        if (filteredPokemons.length === 0) {
            resultsList.innerHTML = "<li>Aucun Pokémon trouvé.</li>";
            return;
        }

        filteredPokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>#${pokemon.id} - ${pokemon.name.french}</strong><br>
                Type: ${pokemon.type.join(", ")}<br>
                HP: ${pokemon.base.HP}, ATK: ${pokemon.base.Attack}, DEF: ${pokemon.base.Defense}, 
                SP ATK: ${pokemon.base["Sp. Attack"]}, SP DEF: ${pokemon.base["Sp. Defense"]}, Vitesse: ${pokemon.base.Speed}
            `;
            resultsList.appendChild(li);
        });
    }
});
