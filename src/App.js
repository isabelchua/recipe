import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = '2b72f785';
	const APP_KEY = '9406171c85db1da963445f972d3ba063';

	console.log(process.env.APPID);
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('beans');

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		//console.log(data.hits);
		//stored into state
		setRecipes(data.hits);
		console.log(data.hits);
	};

	const updateSearch = e => {
		setSearch(e.target.value);
	};

	//click on sumit button query
	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className='App'>
			<div className='header'>Recipe Finder</div>
			<form onSubmit={getSearch} className='search-form'>
				<input
					className='search-bar'
					type='type'
					value={search}
					onChange={e => updateSearch(e)}
				/>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<div className='card'>
				{recipes.map(loop => (
					<Recipe
						key={loop.recipe.label}
						title={loop.recipe.label}
						calories={loop.recipe.calories}
						image={loop.recipe.image}
						ingredients={loop.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
