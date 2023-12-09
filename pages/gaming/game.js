import styles from '../../styles/Games.module.css';
//data
export default function Game({ name, playerCount, imageUrl }) {
    return (
        <div className={styles.gameCard} style={{ backgroundImage: `url(${imageUrl})`}}>
            <h4>{name}</h4>
            <h5>{playerCount} players</h5>
        </div>
    );
}
