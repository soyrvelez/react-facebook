import Navbar from "./navbar/navs";
import SettingSearch from "./settings/search";
import Sfeed from "./settings/settings-feed";
import GamingSideBar from "./sidebar/gamingSidebar";

export default function Settings() {
  return(
    <div>
      <Navbar />
      <GamingSideBar />
      <SettingSearch />
      <Sfeed />
    </div>
  );
}
