import React from 'react';
import '@testing-library/jest-dom'; //autocompletado mejorado
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas componente <AddCategory/>', () => {
	const value = 'Hola Mundo';
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
	let input = wrapper.find('input');

	beforeEach(()=>{
		jest.clearAllMocks();//limpia todos los mocks cuando los tenemos en este caso no lo tenemos se hace por buena practica
		wrapper = shallow(<AddCategory setCategories={setCategories}/>);
		input = wrapper.find('input');
	})
	
	test('Debe de mostrar bien el componente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de cambiar la caja de texto', () => {
		
		//simulando el onchange del input
		input.simulate('change', {
			target : {
				value : value
			}
		});
		expect(wrapper.find('p').text().trim()).toBe(value);

	});

	test('No debe de postear la informacion con onsubmit', () => {
		wrapper.find('form').simulate('submit', { preventDefault(){} }); //las llaves son los argumentos del eveto {}, preventDefault(){}  forma corta de definir una funcion
		//se espera que no se llame la funcion setCategories si se le da submit y el input no tiene valores
		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
		//simulando el onchange del input
		input.simulate('change', { target : {	value : value	}	});

		//simular el submit
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		expect(setCategories).toHaveBeenCalled();
		/* expect(setCategories).toHaveBeenCalledTimes(2); este llamado sirve para evaluar que se llamo 2 veces o n veces la funcion */
		/* expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); espera que set Category se llame con un parametro de tupo funcion */
		expect(wrapper.find('input').prop('value')).toBe('');	
	})
});
