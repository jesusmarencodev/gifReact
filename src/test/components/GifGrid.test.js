import React from 'react';
import '@testing-library/jest-dom'; //autocompletado mejorado
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas componente <GifGrid/>', () => {
	let category = 'Naruto';
	


	test('Debe de mostrar correctamente el componente ', () => {

/* 																Nota importante 
 					Cuando se va a hacer un mock el wrapper debe ir despues del mock
					porque sino va a fallar la prueba		 
*/	 			
		
		/* Mockeando data en el custom hook useFetchGifs */
		useFetchGifs.mockReturnValue({ //estado inicial del mock
			data : [],
			loading : true
		})

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar items cuando se cargan imagenes en el useFetchGifs', () => {
		const gifs = [{
				id : 'ABC',
				url : 'https://localhost/cualquier/cosa.jpg',
				title : 'cualquier cosa'
		}]

		/* Mockeando data en el custom hook useFetchGifs  que ya trae data*/
		useFetchGifs.mockReturnValue({ //estado inicial del mock
			data : gifs,
			loading : false
		})

		/* Crear el wrapper */
		const wrapper = shallow(<GifGrid category={category} />);

		//genera un nuevo snapshop, no sobreescribe, lo pinta debajo del otro
		expect(wrapper).toMatchSnapshot();

		//si viene data no deberia existir el parrafo con loading
		expect(wrapper.find('p').exists()).toBe(false);

		//si viene data en el useFetchGifs deberia de existir
		// el mismo numero de componentes GifGridItem, en este caso el 
		// .length del mock gifs
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

	})

	test('Debe mostrar en el h3 el value que llega en categoria', () => {
		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper.find('h3').text()).toBe(category);
	})
	
	
	

});
