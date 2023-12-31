import styles from '../styles/Inbox.module.css';

export default function Message({ username, message, image }) {
    return (
        <div className={styles.card}>
            <h3>{username}</h3>
            <h4>{message}</h4>
        </div>
    )
}
