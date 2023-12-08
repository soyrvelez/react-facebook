import Game from "./game";

// data


export default function Carousel({ title, games }) {
  const displayGameArray = games.map((game, idx) => {
    return <Game name={game.name} playerCount={game.playerCount} imageUrl={game.imageUrl} key={idx} />
  });

  return (
    <div>
      <h3>{title}</h3>
      {displayGameArray}
    </div>
  )
}
