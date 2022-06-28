import React from 'react';
import styles from './ErrorPizza.module.scss';
function ErrorPizza() {
  return (
    <>
      <div className="conteiner" style={{ display: 'flex', justifyContent: 'center', width: '1200px' }}>
        <div className={styles.root}>
          <span>😕</span>
          <h2 className={styles.title}>The mistake has been committed </h2>

          <p className={styles.text}>
            The list of pizzas did not <strong>loading</strong>{' '}
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPizza;
