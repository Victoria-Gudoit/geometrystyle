import React from 'react';
import styles from './ThankYouPage.module.css';

export const ThankYouPage = () => {
  return (
    <div className={styles.thankYouContainer}>
      <div className={styles.thankYouTitle}>Спасибо за заявку!</div>
      <div className={styles.thankYouMessage}>Наш менеджер скоро с вами свяжется.</div>
      <button
        onClick={() => window.location.href = '/'}
        className={styles.thankYouButton}
      >
        Вернуться на главную
      </button>
    </div>
  );
};

