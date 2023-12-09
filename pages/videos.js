import styles from "../styles/Games.module.css";
import Navbar from "./navbar/navs";
import GamingSideBar from "./sidebar/gamingSidebar";
import NewVideos from "./videos/new-videos";
import VideoFeed from "./videos/video-feed";

export default function Videos() {
  return(
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.subContainer}>
        <GamingSideBar />
        <NewVideos />
        <VideoFeed />
      </div>
    </div>
  );
}
