
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

	let HTML = `
	<div class="close-button" onclick="toggleSelectedPopup()">×</div>
	<section class="first-layer">
		<img src="../img/${anime.banner_path}.jpg" alt="Anime banner">
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
	</section>
	<section class="third-layer">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/emWOiqs4YfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</section>`;

	if ( anime.title === "steins gate" ) {
		console.log("A: " + anime.title);
		HTML += `
		<section class="third-layer">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/v0TS685A5cI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/Vq8aabw9Emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/5o_F5js7PSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/6zRdmy6N-6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/f9op8xy6aI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/BND4u00iDnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/f5D8zhGjvgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/440BJ8F0s9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/ZJXyoyMMF1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/oRqUJHHB_r0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/NLoQdYVb3k8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/QZPqq8SqRww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/eSM4e-2DJiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/BXXzTz705Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/3gPBA5rPtfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/nXqs8M0q37A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/2oA_Dv2lvBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/NxqQiqc35os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/wKHbiUDRx-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/XL2XMZoN7CI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/tU7DzgsAwOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/jUQxSqMmyOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/BaZWJEwgTQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/wngtnhFZskI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/1aySZOA4O08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/4LbIFDLwUjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</section>`;
	}

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
