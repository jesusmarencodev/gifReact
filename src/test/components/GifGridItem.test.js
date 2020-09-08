import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas componente <GifGridItem/>', () => {

	const title = 'Un titulo';
	const url   = 'https://localhost/algo.jpg';
	let wrapper = shallow(<GifGridItem title={title} url={url} />);

	beforeEach(()=>{
		wrapper = shallow(<GifGridItem title={title} url={url}/>)
	});
	test('Debe de mostrar el componente, ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de tener un parrafo con el title ', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	})
	test('Debe tener la imagen igual al url de props y alt al title de props  ', () => {
		const img = wrapper.find('img');
		//console.log(img.props())

		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('Debe de tener la clase animate__fadeIn', () => {
		const div       = wrapper.find('div');
		const className = div.prop('className');

		expect(className.includes('animate__fadeIn')).toBe(true);
	})
	
	
	
});
