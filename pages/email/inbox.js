import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Inbox.module.css';
import Message from '../message';
import Avatar from '../avatar';

// data
const engineersArray = [
    { username: '@Keya-Moradi', message: 'Hi!'},
    { username: '@ltcervan', message: 'Is that still available?'},
    { username: '@JordanJNelson', message: 'suuuuup'},
    { username: '@abbyog27', message: 'Happy Birthday'},
    { username: '@Nimsey', message: 'HBD'},
    { username: '@dfloresca', message: 'Yooooooooooo'},
    { username: '@gongt108', message: 'Sup'},
    { username: '@soyrvelez', message: 'You owe me 50 bucks bruh'},
]

export default function Inbox() {
    const displayEngineersArray = engineersArray.map((engineer, idx) => {
        return <Message username={engineer.username} message={engineer.message} key={idx} />
    });

    return (
        <div className={styles.container}>
            <h1>Messages Inbox</h1>

            <div className={styles.grid}>
                {displayEngineersArray}
            </div>

            <Link href="/">Return Home</Link>
        </div>
    )
}
