import Carousel from "./carousel";

//data
const CarouselArray = [
  { title: 'Games we love', games: [{name: "Test Game", playerCount: 1000, imageUrl: 'http://google.com'}, {name: "Test Game", playerCount: 2000, imageUrl: 'http://google.com'}, {name: "Test Game", playerCount: 3000, imageUrl: 'http://google.com'}, {name: "Test Game", playerCount: 4000, imageUrl: 'http://google.com'}]},
  { title: 'New Games', games: [{name: "Test Game", playerCount: 1000, imageUrl: 'http://google.com'}, {name: "Test Game", playerCount: 2000, imageUrl: 'http://google.com'}, {name: "Test Game", playerCount: 3000, imageUrl: 'http://google.com'}, {name: "Test Game", playerCount: 4000, imageUrl: 'http://google.com'}]}
];

export default function Gfeed() {
  const displayCarouselArray = CarouselArray.map((carousel, idx) => {
    return <Carousel title={carousel.title} games={carousel.games} key={idx}/>
  });
  return (
    <div>
      {displayCarouselArray}
    </div>
  );
}
