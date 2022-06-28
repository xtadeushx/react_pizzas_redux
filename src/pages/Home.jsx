import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/categories';
import ErrorPizza from '../components/errorPizza/ErrorPizza';

import PizzasBlock from '../components/pizzasBlock';
import Skeleton from '../components/sceleton';
import Sort from '../components/sort';
import { Context } from '../context';
import Pagination from '../pagination';
import { changeCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { setItems, fetchPizzas } from '../redux/slices/pizzaSlice';
import { SORT__NAME_RU, SORT__NAME_UA } from '../pizzasType';

function Home() {
  //Redux
  const { isUkraine } = useSelector((state) => state.language);
  const { categoryId, sortType, currentPage } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchValue } = useContext(Context);
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sort = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.startsWith('-') ? 'desc' : 'asc';
  const search = searchValue ? `&search=${searchValue}` : '';
  const page = `page=${currentPage}&limit=4`;

  useEffect(() => {
    const { search } = window.location;
    if (search) {
      const params = qs.parse(search.substring(1));
      const sort = SORT__NAME_UA.find((item) => item.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [categoryId, sortType.sortProperty, currentPage]);

  const fetchData = async () => {
    dispatch(
      fetchPizzas({
        category,
        sort,
        order,
        page,
        search,
      }),
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType.sortProperty, currentPage]);

  useEffect(() => {
if(isMounted.current){
  const queryString = qs.stringify({
      sortProperty: sortType.sortProperty,
      categoryId,
      currentPage,
    });
     navigate(`?${queryString}`);
}
isMounted.current = true;
  }, [categoryId, sortType.sortProperty, currentPage]);

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
          {status === 'rejected' ? (
            <ErrorPizza />
          ) : status === 'loading' ? (
            [...new Array(items.length || 6)].map((_, index) => <Skeleton key={index} />)
          ) : (
            items.map((pizza) => <PizzasBlock key={pizza.id} {...pizza} />)
          )}
        </div>
        <Pagination onChangePage={onChangePage} />
      </div>
    </>
  );
}
export default Home;
