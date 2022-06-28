import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { changeCategory } from '../../redux/slices/filterSlice';

const categoriesRu = ['Все', 'Мясные 🥩', 'Вегетарианская 🌱', 'Гриль', 'Острые', 'Закрытые'];
const categoriesUa = ['Всі', "М'ясні 🥩", 'Вегетаріанська 🌱', 'Гриль (BBQ)', 'Гострі', 'Закриті'];

function Categories({ isUkraine }) {
  const { status } = useSelector((state) => state.pizza);

  const { categoryId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const categories = isUkraine ? categoriesUa : categoriesRu;

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            className={categoryId === index ? 'active' : ''}
            key={uuidv4()}
            onClick={() => dispatch(changeCategory(index))}
            disable={status !== 'resolved'}
            disabled={status === 'resolved' || status === 'rejected'}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
