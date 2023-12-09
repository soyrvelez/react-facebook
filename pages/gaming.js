import styles from "../styles/Games.module.css";
import Gfeed from "./gaming/game-feed";
import Navbar from "./navbar/navs";
import GamingSidebar from "./sidebar/gamingSidebar";

export default function Gaming() {
    return (
        <div className={styles.mainContainer}>
            <Navbar />
                <div className={styles.subContainer}>
                    <GamingSidebar />
                    <Gfeed />
                </div>
        </div>
    );
}
