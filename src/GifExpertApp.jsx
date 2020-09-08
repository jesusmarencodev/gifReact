import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {



	const [categories, setCategories] = useState(defaultCategories);

/* 	const handleAdd = () => {
		//formar de mutar con setState un arreglo
		setCategories([...categories, 'Naruto']);
		setCategories(['HunterXHunter', ...categories]);
		setCategories(cats => [...cats, 'Inuyasha']);
	} */

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={ setCategories } />
			<hr/>
				{
					categories.map( category => (
						<GifGrid
							key={category}
							category={category}
						/>
					) )
				}
		</>
	)
}
