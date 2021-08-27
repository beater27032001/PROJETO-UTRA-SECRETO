class Utils {

	static getTitles = (animeMovieQuery) => {
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


	static getAnimeById = (animeId) => {
		return new Promise((resolve, reject) => {
			const url = `http://localhost:3333/episodes/?animeId=${animeId}`;
			fetch(url)
			.then( response => {
				return response.json();
			})
			.then( animes => {
				resolve(animes);
			});
		});
	}
  
}