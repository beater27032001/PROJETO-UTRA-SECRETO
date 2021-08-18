// Função usada no popup.html
function togglePopup() {
	document.getElementById("info-popup").classList.toggle("active");
}


function openAnime(anime) {
	let title = anime.innerHTML;
	const endStringIndex = title.indexOf(".jpg")
	title = title.substring(52, endStringIndex);
	console.log(title);
}


const animes = document.querySelectorAll(".item");
animes.forEach(anime => {
	anime.addEventListener("click", () => {
		openAnime(anime);
	});
});
