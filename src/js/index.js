// Função usada no popup.html
function toggleMainPopup() {
	document.querySelector(".overlay").classList.toggle("active");
	document.querySelector(".main-popup").classList.toggle("active");
}


function toggleSelectedPopup(anime) {
	document.querySelector(".overlay").classList.toggle("active");
	document.querySelector(".selected-popup").classList.toggle("active");

	console.log(anime);
	// const animes = await Utils.getAnimes(animeMovieQuery);
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
