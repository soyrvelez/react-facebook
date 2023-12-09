import Setting from "./setting";

// data

export default function SettingCarousel({title, settings}) {
  const displaySettingsArray = settings.map((setting, idx) => {
    return <Setting icon={setting.icon} title={setting.title} description={setting.description} key={idx}/>
  })

  return (
    <div>
      <h3>{title}</h3>
      {displaySettingsArray}
    </div>
  );
}
