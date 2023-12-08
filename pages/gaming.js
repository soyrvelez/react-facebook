import Navbar from "./navbar/navs";
import Gfeed from "./gaming/game-feed";
import GamingSidebar from "./sidebar/gamingSidebar";


export default function Gaming() {
    return (
      <div>
        <Navbar />
        <GamingSidebar />
        <Gfeed />
      </div>
    );
}
