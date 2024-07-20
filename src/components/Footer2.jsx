import React from 'react';
import Content from './Content';

import styles from './styles/footer2.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.deepContainer}>
          <Content />
        </div>
      </div>
    </div>
  );
}
