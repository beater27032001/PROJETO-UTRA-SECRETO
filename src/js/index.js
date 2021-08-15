// Função usada no popup.html
function togglePopup() {
	document.getElementById("info-popup").classList.toggle("active")
}
  
async function search(animeMovieQuery) {
	console.log("animeMovieQuery: " + animeMovieQuery);
  
	const animes = await Utils.getAnimes(animeMovieQuery);
  
	console.log("Actual response")
	console.log(animes);
	  
	let i = 0;
  
	let HTML = "";
	animes.forEach( anime => {
		if (i < 4) {
			HTML += `<div class="owl-item active" style="width: 239.4px; margin-right: 10px;">\n`;
		} else {
			HTML += `<div class="owl-item" style="width: 239.4px; margin-right: 10px;">\n`;
		}
		HTML += `<div class="item">\n`;
		HTML += `<img class="box-filme" src="../img/m1.jpg">\n`;
		HTML += `</div>\n`;
		HTML += `</div>\n`;
  
		i++;
	});
  
	const owlStageOuter = document.querySelector(".owl-stage");
	owlStageOuter.innerHTML = HTML;
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
  