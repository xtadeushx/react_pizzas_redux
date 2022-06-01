import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handelChangeLanguage } from '../../redux/slices/languageSlice';
import styles from './Buttons.module.scss';

function Buttons({ isUkraine }) {
	const dispatch = useDispatch();
	const changeLanguage = () => dispatch(handelChangeLanguage(isUkraine));
	return (
		<div className='root'>
			<div className='button__wrapper'>
				<button
					className={`button_lgn ${!isUkraine ? 'active__btn' : ''}`}
					onClick={() => changeLanguage()}>
					ru
				</button>
				<button
					className={`button_lgn ${isUkraine ? 'active__btn' : ''}`}
					onClick={() => changeLanguage()}>
					ukr
				</button>
			</div>

			{isUkraine ? (
				<p className='button__text'>
					<span>​💙💛​</span>Привіт козаче
				</p>
			) : (
				<p className='button__text'>Русский корабль...</p>
			)}
		</div>
	);
}

export default Buttons;
