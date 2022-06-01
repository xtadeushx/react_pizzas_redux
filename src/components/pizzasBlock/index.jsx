import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../context';
import styles from './PizzasBlock.module.scss';

const pizzasTypesRus = ['тонкое', 'традиционное', 'толстое'];
const pizzasTypesUkr = ['тонке', 'традиційне', 'товсте'];

function PizzasBlock({ id, imageUrl, title, types, sizes, price }) {
	//State
	const [pizzasCount, setPizzasCount] = useState(0);
	const [isActiveSize, setSsActiveSize] = useState(0);
	const [isActiveType, setIsActiveType] = useState(0);
	//Use context
	// const { isUkraine } = useContext(Context);
	//Redux
	const { isUkraine } = useSelector((state) => state.language);
	return (
		<>
			<div className='pizza-block'>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
				<h4 className='pizza-block__title'>{title}​</h4>
				<div className='pizza-block__selector'>
					<ul>
						{types.map((type, index) => (
							<li
								className={isActiveType === index ? 'active' : ''}
								onClick={() => setIsActiveType(index)}
								key={uuidv4()}>
								{isUkraine ? pizzasTypesUkr[type] : pizzasTypesRus[type]}
							</li>
						))}
					</ul>

					<ul>
						{sizes.map((item, index) => (
							<li
								className={isActiveSize === index ? 'active' : ''}
								onClick={() => setSsActiveSize(index)}
								key={uuidv4()}>
								{item} см.
							</li>
						))}
					</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>
						{isUkraine ? 'від' : 'от'} {price} {isUkraine ? '₴' : '₽'}
					</div>
					<div
						onClick={() => setPizzasCount((prev) => prev + 1)}
						className='button button--outline button--add'>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
								fill='white'
							/>
						</svg>
						<span>{isUkraine ? 'Додати' : 'Добавить'}</span>
						{pizzasCount > 0 ? <i>{pizzasCount}</i> : null}
					</div>
				</div>
			</div>
		</>
	);
}

export default PizzasBlock;
