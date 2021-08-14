class Utils {

	static getAnimes = (animeMovieQuery) => {
		return new Promise((resolve, reject) => {
			const url = `http://localhost:3333/search/?animeMovieQuery=${animeMovieQuery}`;
			let response = fetch(url)
			.then( response => {
				  // console.log("Promised response");
				  // console.log(response);
				  return response.json();
			})
			.then( animes => {
					// console.log("Data");
				  // console.log(animes);
				  resolve(animes);
			});
		});
	}
  
  }
  
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
			  HTML += `<div class="owl-item active" style="width: 239.4px; margin-right: 10px;>`;
		  } else {
			  HTML += `<div class="owl-item" style="width: 239.4px; margin-right: 10px;>`;
		  }
		  HTML += `<div class="item">`;
		  HTML += `<img class="box-filme" src="../img/m1.jpg">`;
		  HTML += `</div>`;
		  HTML += `</div>`;
  
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
  