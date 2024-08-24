import React from 'react'
import styles from './navbar.module.css'
import { AuthLinks } from '../AuthLinks/AuthLinks';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>lamablog</div>
        <div className={styles.links}>
          <AuthLinks />
          <ThemeToggle />
        </div>
      </div>
    );
  };
  