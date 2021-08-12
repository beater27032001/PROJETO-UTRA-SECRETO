// Função usada no popup.html
function togglePopup() {
  document.getElementById("info-popup").classList.toggle("active")
}

function search(animeMovieQuery) {

  console.log("animeMovieQuery: " + animeMovieQuery);

  const url = `http://localhost:3333/search/?animeMovieQuery=${animeMovieQuery}`;
  // const animes = get(url);
  console.log(url);
}

const textForm = document.getElementById("search-txt");
const magnifierButton = document.getElementById("search-btn");

textForm.addEventListener("keydown", e => {
  if (e.code === "Enter") {
    console.log("enter foi pressionado");
    search(e.target.value);
  }
});

magnifierButton.addEventListener("click", e => { 
  console.log("button foi clickado");
  search(textForm.value);
});
