import styles from "../styles/Games.module.css";
import Navbar from "./navbar/navs";
import SettingSearch from "./settings/search";
import Sfeed from "./settings/settings-feed";
import GamingSideBar from "./sidebar/gamingSidebar";

export default function Settings() {
  return(
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.subContainer}>
        <GamingSideBar />
        <SettingSearch />
        <Sfeed />
      </div>
    </div>
  );
}
