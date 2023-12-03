import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Newsfeed.module.css';
import Post from '../post';
import Avatar from '../avatar';

// data
const postsArray = [
    { username: 'Testerio', content: 'I am doing homework on a Sunday morning!' },
    { username: 'Testinho', content: 'Rise and grind am I right?' },
    { username: 'Testeroni', content: 'Ready to shop til I drop' },
    { username: 'Testentia', content: 'Wow I cant believe what my horoscope says' },
    { username: 'Teston', content: 'I am recruiting fellow facebook users for my multilevel marketing pyramid scheme' },
]

export default function Newsfeed() {
    const displayPostsArray = postsArray.map((post, idx) => {
        return <Post username={post.username} content={post.content} key={idx} />
    });

    return (
        <div className={styles.grid}>
            {displayPostsArray}
        </div>
    )
}
