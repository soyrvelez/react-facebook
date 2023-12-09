import React from 'react';
import styles from "../../styles/Games.module.css";
import FacebookLogo from './logo';
import Options from './options';
import SearchBar from './search';
import Sections from './sections';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLeft}>
                <FacebookLogo />
                <SearchBar />
            </div>
            <div className={styles.navCenter}>
                <Sections />
            </div>
            <div className={styles.navRight}>
                <Options />
            </div>
        </nav>
    );
};
