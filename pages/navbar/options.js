import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Games.module.css';
export default function Options() {
    return (
        <div className={styles.navOptions}>
            {/* Assuming you have three logo images */}
            <Image src='/engineer.png' alt='house' width='40' height='40' />
            <Image src='/engineer.png' alt='house' width='40' height='40' />
            <Image src='/engineer.png' alt='house' width='40' height='40' />
            <Image src='/engineer.png' alt='house' width='40' height='40' />
        </div>
    );
};
