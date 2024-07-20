import React from 'react';
import Content from './Content';

import styles from './styles/footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <Content />
      </div>
    </div>
  );
}

/**
 *  <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <Content />
        </div>
      </div>
 */
