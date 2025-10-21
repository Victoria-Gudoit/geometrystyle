import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>404 - Страница не найдена</title>
        <meta name="description" content="Запрошенная страница не существует." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>К сожалению, запрошенная страница не существует.</p>
      <Link to="/" className={styles.link}>Вернуться на главную</Link>
    </div>
  );
};
