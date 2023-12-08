//data
export default function Game({ name, playerCount, imageUrl}) {
  return (
    <div>
      <h4>{name}</h4>
      <h5>{playerCount} players</h5>
    </div>
  );
}
