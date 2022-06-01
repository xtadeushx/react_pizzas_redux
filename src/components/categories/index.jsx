import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Categories({ categoriesById, handleChangeCategory }) {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						className={categoriesById === index ? 'active' : ''}
						key={uuidv4()}
						onClick={() => handleChangeCategory(index)}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
