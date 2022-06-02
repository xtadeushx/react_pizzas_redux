import React from 'react';
import styles from './Buttons.module.scss';




function Buttons({ isUkraine, setIsUkraine }) {
	return (
		<div className='root'>
			<div className='button__wrapper'>
				<button
					className={`${styles.buttonLng} ${!isUkraine ? styles.active : ''}`}
					onClick={() => setIsUkraine((prev) => !prev)}>
					ru
				</button>
				<button
					className={`${styles.buttonLng} ${isUkraine ? styles.active : ''}`}
					onClick={() => setIsUkraine((prev) => !prev)}>
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
