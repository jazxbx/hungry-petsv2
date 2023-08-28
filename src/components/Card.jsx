const Card = ({
  name,
  emoji,
  hunger,
  love,
  feedPet,
  lovePet,
  epitaph,
  isAlive,
}) => {
  return (
    <div className={`card ${isAlive ? "isalive" : "isdead"}`}>
      {isAlive ? (
        <>
          <div className="emoji" onClick={lovePet}>
            {emoji}
          </div>
          <p className="name">{name}</p>
          <div className="meter-container">
            <p className="description">Hunger:</p>
            <meter max="100" min="0" value={hunger}></meter>
          </div>
          <div className="meter-container">
            <p className="description">Love:</p>
            <meter max="100" min="0" value={love}></meter>
          </div>
          <button onClick={feedPet}>Feed Me 🥪</button>
        </>
      ) : (
        <>
          <div></div>
          <div className="emoji">{emoji}</div>
          <q>{epitaph}</q>
        </>
      )}
    </div>
  );
};

export { Card };
