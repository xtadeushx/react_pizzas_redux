import React from 'react';
import styles from './NotFoundContent.module.scss';
function NotFoundContent() {
	return (
		<>
			<div className='conteiner'>
				<div className={styles.root}>
					<span>😕</span>
					<h2 className={styles.title}>Page not found</h2>

					<p className={styles.text}>this page does not exist in our shop</p>
				</div>
			</div>
		</>
	);
}

export default NotFoundContent;
