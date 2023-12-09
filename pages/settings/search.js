import Image from "next/image";
export default function SettingSearch() {
  return(
    <div>
      <h3>Find the setting you need</h3>
      <div>
        <Image src="/engineer.png" width="40" height="40"/>
        <form>
          <input type="text" id="setting-search" name="query" placeholder="Search..."/>
        </form>
      </div>
    </div>
  );
}
