import Game from "./game";
import styles from '../../styles/Games.module.css'
// data


export default function Carousel({ title, games }) {
    const displayGameArray = games.map((game, idx) => {
        return <Game name={game.name} playerCount={game.playerCount} imageUrl={game.imageUrl} key={idx} />
    });

    return (
        <div className={styles.carousel}>
            <h3>{title}</h3>
            <div className={styles.gameStrip}>
                {displayGameArray}
            </div>
        </div>
    )
}
