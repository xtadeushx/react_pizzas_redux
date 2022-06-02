import React from 'react';
import { useDispatch} from 'react-redux';

import { handelChangeLanguage } from '../../redux/slices/languageSlice';
import styles from './Buttons.module.scss';

function Buttons({ isUkraine }) {
	const dispatch = useDispatch();
	const changeLanguage = () => dispatch(handelChangeLanguage(isUkraine));
	return (
		<div className={styles.root}>
			<div className={styles.buttonWrapper}>
				<button
					className={`${styles.buttonLng}  ${!isUkraine ? styles.active : ''}`}
					onClick={() => changeLanguage()}>
					ru
				</button>
				<button
					className={`${styles.buttonLng}  ${isUkraine ? styles.active : ''}`}
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
