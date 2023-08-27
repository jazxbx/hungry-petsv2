import { useEffect, useState } from "react";
import { Card } from "./components/Card";

const App = () => {
  // initial state
  const [pets, setPets] = useState([
    {
      id: 1,
      emoji: "🦉",
      name: "Owliver",
      hunger: 66,
      love: 95,
      isAlive: true,
      epitaph: "In the silence of the night, your wisdom echoes.",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval running");
      setPets((prevPets) => {
        // make a copy of state
        const updatedPets = prevPets.map((pet) => ({
          ...pet,
          // update hunger and love
          hunger: pet.hunger + 0.5,
          love: pet.love - 0.5,
        }));
        console.log(
          "Updated hunger values:",
          updatedPets.map((pet) => pet.hunger)
        );
        return updatedPets;
      });
    }, 1000);
    // clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Hungry Pets</h1>
      <div className="card-container">
        {pets.map((pet) => {
          return (
            <Card
              hunger={pet.hunger}
              love={pet.love}
              name={pet.name}
              emoji={pet.emoji}
              key={pet.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
