import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/categories';

import PizzasBlock from '../components/pizzasBlock';
import Skeleton from '../components/sceleton';
import Sort from '../components/sort';
import { Context } from '../context';

import pizzasFromJSON from '../pizzas.json';

const URL = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas';
const URL_UKR = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas_ukr';

function Home() {
	//Context
	// const { isUkraine, setIsUkraine } = useContext(Context);

	//Redux
	const { isUkraine } = useSelector((state) => state.language);
	//State
	const [categoriesById, setCategoriesById] = useState(0);

	const [sortType, setSortType] = useState({ name: 'популярности (A-Z)', sortProperty: 'rating' });
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${isUkraine ? URL_UKR : URL}`)
			.then((response) => response.json())
			.then((data) => {
				setTimeout(() => {
					setPizzas(data);
					setIsLoading(false);
				}, 3000);
			});
	}, [categoriesById, sortType]);

	const handleChangeCategory = (id) => setCategoriesById(id);
	const handleChangeSortType = (obj) => setSortType(obj);
	return (
		<>
			<div className='container'>
				<div className='content__top'>
					<Categories
						categoriesById={categoriesById}
						handleChangeCategory={handleChangeCategory}
						isUkraine={isUkraine}
					/>
					<Sort
						sortType={sortType}
						handleChangeSortType={handleChangeSortType}
						isUkraine={isUkraine}
					/>
				</div>
				<h2 className='content__title'>{isUkraine ? 'Усі піци ​​💙💛🇺🇦​' : 'Все пиццы ​🌊​🚢​'}</h2>
				<div className='content__items'>
					{isLoading
						? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
						: pizzas.map((pizza) => <PizzasBlock key={pizza.id} {...pizza} />)}
				</div>
			</div>
		</>
	);
}

export default Home;
