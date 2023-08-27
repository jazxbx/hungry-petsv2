const Card = ({ name, emoji, hunger, love, feedPet, lovePet }) => (
  <div className="card">
    <div className="emoji" onClick={lovePet}>
      {emoji}
    </div>
    <p>{name}</p>
    <p>Hunger:</p>
    <meter max="100" min="0" value={hunger}></meter>
    <p>Love:</p>
    <meter max="100" min="0" value={love}></meter>
    <button
      onClick={feedPet}
      // was not working due to forgetting the parenthesis to call the onFeedClick()

      //   onClick={() => {
      //     onFeedClick;
      //   }}
    >
      Feed Me 🍞
    </button>
  </div>
);

export { Card };
