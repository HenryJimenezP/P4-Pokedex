const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("./img/sad-pikachu.gif");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        let pokeImg = data.sprites.other.home.front_default;
        pokeImage(pokeImg);
        console.log(pokeImg);
      }

      let name = data.name.toUpperCase();
      let move = data.moves
        .map((move) => move.move.name)
        .slice(0, 3)
        .join(", ");
      let experience = data.base_experience;
      let type = data.types
        .map((type) => type.type.name)
        .join(", ")
        .toUpperCase();
      let abilities = data.abilities
        .map((ability) => ability.ability.name)
        .slice(0, 3)
        .join(", ");

      let hp = data.stats[0].base_stat;
      let attack = data.stats[1].base_stat;
      let defense = data.stats[2].base_stat;
      let specialAttack = data.stats[3].base_stat;
      let specialDefense = data.stats[4].base_stat;
      let speed = data.stats[5].base_stat;
      let height = data.height;
      let weight = data.weight;

      document.getElementById("nombrePokemon").innerHTML = name;
      document.getElementById("type").innerHTML = "Tipo: " + type;
      document.getElementById("moves").innerHTML = move;
      document.getElementById("abilities").innerHTML = abilities;

      document.getElementById("hp").innerHTML = hp;
      document.getElementById("attack").innerHTML = attack;
      document.getElementById("defense").innerHTML = defense;
      document.getElementById("specialattack").innerHTML = specialAttack;
      document.getElementById("specialdefense").innerHTML = specialDefense;
      document.getElementById("speed").innerHTML = speed;
      document.getElementById("altura").innerHTML = height;
      document.getElementById("peso").innerHTML = weight;
      document.getElementById("experience").innerHTML = experience;
    });
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

// Funsión Enter
var input = document.getElementById("pokeName");

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    document.getElementById("pokeBottun").click();
  }
});
