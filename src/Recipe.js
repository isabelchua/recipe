import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.card}>
			<div className={style.inner}>
				<h2>{title}</h2>
				<div className='img-container'>
					<img className={style.image} src={image} alt='' />
				</div>
				<h3>Ingredients</h3>
				<ul>
					{ingredients.map(ingredient => (
						<li>{ingredient.text}</li>
					))}
				</ul>
				<p>
					<h3>Total Calories: {Math.floor(calories)}</h3>
				</p>
			</div>
		</div>
	);
};

export default Recipe;
