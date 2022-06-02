import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/categories';

import PizzasBlock from '../components/pizzasBlock';
import Skeleton from '../components/sceleton';
import Sort from '../components/sort';
import { changeCategory, sortCategory } from '../redux/slices/filterSlice';

const URL = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas';
const URL_UKR = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas_ukr';

function Home() {
	//Redux
	const { isUkraine } = useSelector((state) => state.language);
  const {categoryId, sortType} = useSelector((state) => state.filter);
  const dispatch = useDispatch();
	//State
	// const [categoriesById, setCategoriesById] = useState(0);

  // const [sortType, setSortType] = useState({ name: 'популярности (A-Z)', sortProperty: 'rating' });
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sort = sortType['sortProperty'].replace('-', '');
  const order = sortType.sortProperty.startsWith('-') ? 'desc' : 'asc';


  useEffect(() => {
    setIsLoading(true);
    fetch(`${isUkraine ? URL_UKR : URL}?${category}&sortBy=${sort}&order=${order}`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setPizzas(data);
          setIsLoading(false);
        }, 3000);
      });
  }, [categoryId, sortType]);

  // const handleChangeCategory = (id) => dispatch(changeCategory(id));
  // const handleChangeSortType = (obj) => dispatch(sortCategory(obj));
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories isUkraine={isUkraine}  />
          <Sort isUkraine={isUkraine}  />
        </div>
        <h2 className="content__title">{isUkraine ? 'Усі піци ​​💙💛🇺🇦​' : 'Все пиццы ​🌊​🚢​'}</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(pizzas.length)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((pizza) => <PizzasBlock key={pizza.id} {...pizza} />)}
        </div>
      </div>
    </>
  );
}
export default Home;
