

async function search(animeMovieQuery) {
	console.log("animeMovieQuery: " + animeMovieQuery);
  
	const animes = await Utils.getAnimes(animeMovieQuery);
  
	console.log("Actual response")
	console.log(animes);
	  
	let i = 0;
  
	let HTML = "";
	animes.forEach( anime => {
		// const mainTitle = anime.title[0];

		if (i < 4) {
			HTML += `<div class="owl-item active" style="width: 239.4px; margin-right: 10px;">\n`;
		} else {
			HTML += `<div class="owl-item" style="width: 239.4px; margin-right: 10px;">\n`;
		}
		HTML += `<div class="item">\n`;
		HTML += `<img class="box-filme" src="../img/${anime.title}.jpg">\n`;
		HTML += `</div>\n`;
		HTML += `</div>\n`;
  
		i++;
	});
  
	const owlStageOuter = document.querySelector(".owl-stage");
	owlStageOuter.innerHTML = HTML;

	const carroselFilmes = document.querySelector(".carrosel-filmes");
	carroselFilmes.style = "display: block;";
	// carroselFilmes.scrollIntoView();

	const mainFilm = document.querySelector(".filme-principal");
	mainFilm.style = "display: none;";
}


const textForm = document.getElementById("search-txt");
textForm.addEventListener("keydown", e => {
	if (e.code === "Enter") {
		console.log("enter foi pressionado");
		search(e.target.value);
	}
});


const magnifierButton = document.getElementById("search-btn");
magnifierButton.addEventListener("click", e => { 
	console.log("button foi clickado");
	search(textForm.value);
});
