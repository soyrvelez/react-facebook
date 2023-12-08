import GamingCategories from "./gamingCategories";
import SidebarSearch from "./sidebarSearch";

export default function GamingSideBar() {
    return (
        <div>
            <h1>Gaming <span><a>Settings(gear icon)</a></span></h1>
            <SidebarSearch />
            <a>controller icon = Play Games</a>
            <br />
            <a>bell icon = Notifications</a>
            <hr />
            <h2>Your Games <span><a>See All</a></span></h2>
            <p>Save a game to Your games to create a shortcut for it here</p>
            <a>bookmark icon = Save Games</a>
            <hr />
            <h2>Categories</h2>
            <GamingCategories />


        </div>
    )
}
