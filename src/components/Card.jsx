const Card = ({ name, emoji, hunger, love, feedPet, lovePet, isAlive }) => {
  return (
    <div className="card">
      {isAlive ? (
        <>
          <div className="emoji" onClick={lovePet}>
            {emoji}
          </div>
          <p>{name}</p>
          <p>Hunger:</p>
          <meter max="100" min="0" value={hunger}></meter>
          <p>Love:</p>
          <meter max="100" min="0" value={love}></meter>
          <button onClick={feedPet}>Feed Me 🍞</button>
        </>
      ) : (
        <p>Sorry ma brutha</p>
      )}
    </div>
  );
};

export { Card };
