
function toggleSelectedPopup() {
	document.querySelector(".selected-popup").classList.toggle("active");
}

function toggleMainPopup() {
	document.querySelector(".main-popup").classList.toggle("active");
}

async function mountAnimePopup(animeId) {
	toggleSelectedPopup();

	console.log(animeId);
	const anime = await Utils.getAnimeById(animeId);

	const HTML = `
	<div class="close-button" onclick="toggleSelectedPopup()">×</div>
	<section class="first-layer">
		<img src="../img/${anime.path}.jpg" alt="Anime cover">
		<h3 class="anime-title">${anime.title}</h3>
		<button>
			<i class="fas fa-play"></i>
			<a href="#" class="as">ASSISTIR AGORA</a>
		</button>
	</section>
	<section class="second-layer">
		<div class="left-column">
			<div class="year-age">
				<span>${anime.launch_year}</span>
				<img class="age-restriction" src="../img/age/${anime.age_limit}.jpg" alt="age restriction">
			</div>
			<p>${anime.description}</p>
		</div>
		<div class="right-column">
			<p>Gêneros: </p>
			<p>${anime.genres}</p>
		</div>
	</section>`;

	// inject html
	const popupContent = document.querySelector(".selected-popup .content");
	popupContent.innerHTML = HTML;
}


// function openAnime(anime) {
// 	let title = anime.innerHTML;
// 	const endStringIndex = title.indexOf(".jpg")
// 	title = title.substring(52, endStringIndex);
// 	console.log(title);
// }


// const animes = document.querySelectorAll(".item");
// animes.forEach(anime => {
// 	anime.addEventListener("click", () => {
// 		openAnime(anime);
// 	});
// });
