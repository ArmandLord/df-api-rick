// console.log("hola morty");

// Elementos del DOM (Document Object Model)
const cards = document.getElementById("container-cards");
const search = document.getElementById("search");

// API
const API_URL = "https://rickandmortyapi.com/api/character";

// Data
const characters = [];

// Fetch
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => characters.push(...data.results));

// Mostar personajes mediante la busqueda
function displayCharactersByName() {
  const value = search.value.toLowerCase();

  if (value === "todos") {
    return displayCharacters(characters);
  }

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(value)
  );
  displayCharacters(filteredCharacters);
}

// Mostrar personajes
function displayCharacters(characters) {
  const html = characters
    .map(
      (character) => `
    <div class="card">
      <img class="card-image" src="${character.image}" alt="${character.name}" />
      <div class="card-info">
        <h3>${character.name}</h3>
        <p>${character.species}</p>
      </div>
    </div>
  `
    )
    .join("");

  if (html === "") {
    alert("No se encontraron personajes con ese nombre");
    search.value = "";
  }
  cards.innerHTML = html;
}

// Eventos
search.addEventListener("change", displayCharactersByName);
