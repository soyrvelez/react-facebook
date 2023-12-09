import styles from '../../styles/Games.module.css';
import Carousel from "./carousel";
//data
const CarouselArray = [
    { title: 'Games we love', games: [{ name: "Test Game", playerCount: 1000, imageUrl: '/engineer.png' }, { name: "Test Game", playerCount: 2000, imageUrl: '/engineer.png' }, { name: "Test Game", playerCount: 3000, imageUrl: '/engineer.png' }, { name: "Test Game", playerCount: 4000, imageUrl: '/engineer.png' }] },
    { title: 'New Games', games: [{ name: "Test Game", playerCount: 1000, imageUrl: '/engineer.png' }, { name: "Test Game", playerCount: 2000, imageUrl: '/engineer.png' }, { name: "Test Game", playerCount: 3000, imageUrl: '/engineer.png' }, { name: "Test Game", playerCount: 4000, imageUrl: '/engineer.png' }] }
];

export default function Gfeed() {
    const displayCarouselArray = CarouselArray.map((carousel, idx) => {
        return <Carousel title={carousel.title} games={carousel.games} key={idx} />
    });
    return (
        <div className={styles.gameFeed}>
            {displayCarouselArray}
        </div>
    );
}
