import GamingCategories from "./gamingCategories";
import SidebarSearch from "./sidebarSearch";
import styles from '../../styles/Games.module.css';
import Image from "next/image";
import SideBarActions from "./sideBarActions";
export default function GamingSideBar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBarTitle}>
                <h3>Gaming</h3>
                <Image src={'/cog.png'} height='20' width='20'/>
            </div>
            <div className={styles.sideBarSearch}>
                <SidebarSearch />
            </div>
            <div className={styles.sideBarPlay}>
            <SideBarActions />
            </div>
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
            <div className={styles.sideBarCategories}>
                <h4>Categories</h4>
                <GamingCategories />
            </div>


        </div>
    )
}
