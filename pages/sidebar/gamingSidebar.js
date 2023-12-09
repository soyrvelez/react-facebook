import styles from '../../styles/Games.module.css';
import GamingCategories from "./gamingCategories";
import SidebarSearch from "./sidebarSearch";
export default function GamingSideBar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBarTitle}>
                <h3>Gaming</h3>
                <p>Settings(gear icon)</p>
            </div>
            <div className={styles.sideBarSearch}>
                <SidebarSearch />
            </div>
            <div className={styles.sideBarPlay}>
                <p>controller icon = Play Games</p>
                <p>bell icon = Notifications</p>
            </div>
            <hr />
            <div className={styles.sideBarSaved}>
                <h4>Your Games</h4>
                <p>See All</p>
            </div>
            <div className={styles.sideBarInfo}>
                <p>Save a game to Your games to create a shortcut for it here</p>
            </div>
            <div className={styles.sideBarSave}>
                <p>bookmark icon = Save Games</p>
            </div>
            <hr />
            <div className={styles.sideBarCategories}>
                <h4>Categories</h4>
                <GamingCategories />
            </div>
        </div>
    )
}
