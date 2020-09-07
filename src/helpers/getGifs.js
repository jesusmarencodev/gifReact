export const getGifts = async(category) => {
	const url =` https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=9hK5ZW01CjEy0LeN0PiezJE6ZxgScQu0`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	
	const gift = data.map(img => {
		return {
			id : img.id,
			title : img.title,
			url : img.images?.downsized_medium.url // este signo significa que si vienen las imagenes utilizalo sino no.
		}
	})

	return gift;

}
