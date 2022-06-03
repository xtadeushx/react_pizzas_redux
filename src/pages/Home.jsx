import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/categories';

import PizzasBlock from '../components/pizzasBlock';
import Skeleton from '../components/sceleton';
import Sort from '../components/sort';
import { Context } from '../context';
import Pagination from '../pagination';
import { changeCategory, sortCategory } from '../redux/slices/filterSlice';
import { changeCurrentPage } from '../redux/slices/paginationSlice';

const URL = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas';
const URL_UKR = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas_ukr';

function Home() {
  //Redux
  const { isUkraine } = useSelector((state) => state.language);
  const { categoryId, sortType } = useSelector((state) => state.filter);
  const { currentPage } = useSelector((state) => state.currentPage);

  const { searchValue } = useContext(Context);
  const dispatch = useDispatch();
  //State
  // const [categoriesById, setCategoriesById] = useState(0);

  // const [sortType, setSortType] = useState({ name: 'популярности (A-Z)', sortProperty: 'rating' });
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sort = sortType['sortProperty'].replace('-', '');
  const order = sortType.sortProperty.startsWith('-') ? 'desc' : 'asc';
  const search = searchValue ? `&search=${searchValue}` : '';
  const page = `page=${currentPage}&limit=4`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${isUkraine ? URL_UKR : URL}?${page}&${category}&sortBy=${sort}&order=${order}${search}`,
      )
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage, isUkraine]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories isUkraine={isUkraine} />
          <Sort isUkraine={isUkraine} />
        </div>
        <h2 className="content__title">{isUkraine ? 'Усі піци ​​💙💛🇺🇦​' : 'Все пиццы ​🌊​🚢​'}</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(pizzas.length || 6)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((pizza) => <PizzasBlock key={pizza.id} {...pizza} />)}
        </div>
        <Pagination onChangePage={(number) => dispatch(changeCurrentPage(number))} />
      </div>
    </>
  );
}
export default Home;
