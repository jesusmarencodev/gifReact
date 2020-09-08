import React from 'react';
import '@testing-library/jest-dom'; //autocompletado mejorado
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Prueba componente <GifExpertApp />', () => {
	const categories = ['Dragon Ball', 'One punch'];

	test('Debe cargar correctamente el componente', () => {
		const wrapper = shallow(<GifExpertApp/>);
		expect(wrapper).toMatchSnapshot();
	});


	test('Debe de mostrar una lista de categorias', () => {
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});

	test('Debe de existir el componente <AddCategory />', () => {
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
		expect(wrapper.find('AddCategory').exists()).toBe(true);
	})
	
	
});
