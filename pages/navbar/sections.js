import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Games.module.css';
export default function Sections() {
    return (
        <div className={styles.navSections}>
            {/* Assuming you have four logo images */}
            <div><Image src='/home.png' alt='house' width='40' height='40' /></div>
            <div><Image src='/videos.png' alt='house' width='40' height='40' /></div>
            <div><Image src='/groups.png' alt='house' width='40' height='40' /></div>
            <div><Image src='/gamepad-nav.png' alt='house' width='40' height='40' /></div>
        </div>
    );
};
