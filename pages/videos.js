import Navbar from "./navbar/navs";
import NewVideos from "./videos/new-videos";
import VideoFeed from "./videos/video-feed";

export default function Videos() {
  return(
    <div>
      <Navbar />
      <NewVideos />
      <VideoFeed />
    </div>
  );
}
