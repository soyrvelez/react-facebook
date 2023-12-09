import SettingCarousel from "./carousel";

//data
const carouselArray = [
  {
    type: "popular", title: "Most visited settings", settings: [
      {
        icon: "/engineer.png",
        title: "Blocking",
        description: "Review people you've previously blocked or add someone to your blocked list."
      },
      {
        icon: "/engineer.png",
        title: "Activity Log",
        description: "View and manage your activity on Facebook."
      },
      {
        icon: "/engineer.png",
        title: "Dark mode",
        description: "Choose if you want to use dark mode."
      },
    ]
  },
  {
    type: "others", title: "Looking for something else?", settings: [
      {
        icon: "/engineer.png",
        title: "Privacy Center",
        description: "Learn how to manage and control your privacy across Meta products."
      },
      {
        icon: "/engineer.png",
        title: "Facebook Help Center",
        description: "Review our FAQ's or talk to a service agent."
      },
    ]
  },
];

export default function Sfeed() {
  const displayCarouselArray = carouselArray.map((carousel, idx) => {
    return <SettingCarousel className={carousel.type} title={carousel.title} settings={carousel.settings} key={idx}/>
  });
  return (
    <div>
      {displayCarouselArray}
    </div>
  );
}
