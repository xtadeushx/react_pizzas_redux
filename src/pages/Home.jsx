import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/categories';

import PizzasBlock from '../components/pizzasBlock';
import Skeleton from '../components/sceleton';
import Sort from '../components/sort';
import { Context } from '../context';
import Pagination from '../pagination';
import {changeCurrentPage} from '../redux/slices/filterSlice';

const URL = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas';
const URL_UKR = 'https://628e644ea339dfef87ad6fce.mockapi.io/pizzas_ukr';

function Home() {
  //Redux
  const { isUkraine } = useSelector((state) => state.language);
  const { categoryId, sortType, currentPage } = useSelector((state) => state.filter);

  const { searchValue } = useContext(Context);
  const dispatch = useDispatch();
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const onChangePage = (number) => dispatch(changeCurrentPage(number));
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
        <Pagination value={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
}
export default Home;
