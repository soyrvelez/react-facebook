import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Games.module.css';
export default function Options() {
    return (
        <div className={styles.navOptions}>
            {/* Assuming you have three logo images */}
            <Image src='/grid.png' alt='house' width='40' height='40' />
            <Image src='/messenger.png' alt='house' width='40' height='40' />
            <Image src='/bell.png' alt='house' width='40' height='40' />
            <Image src='/engineer.png' alt='house' width='40' height='40' />

        </div>
    );
};
