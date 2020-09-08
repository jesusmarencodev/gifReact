import React from 'react';
import '@testing-library/jest-dom'; //autocompletado mejorado
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

/* 

para probar hooks hay que instalar la libreria

npm install --save-dev @testing-library/react-hooks

 */

describe('Pruebas en el hook useFetchGifs', () => {
	
	test('Debe de retornar el estado inicial', async() => {
	
		//coloca el custon hook
		const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Naruto'));
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(data.length).toBe(0);
		expect(loading).toBe(true);
		
	})

	test('Debe de retornar una rreglo de imagenes y el loading en false', async() => {
		const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Naruto'));

		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);

	});
	
	
});
