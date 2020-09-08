const { getGifts } = require("../../helpers/getGifs")


describe('Pruebas con helper getGifs Fetch', () => {

	test('debe de traer 10 elementos', async() => {

		const gifs = await getGifts('Naruto');
		expect(gifs.length).toBe(10);

	})

	test('debe de devolver cero si categoria es vacia ', async() => {
		const gifs = await getGifts('');

		expect(gifs.length).toBe(0);
	})
	

	
})
