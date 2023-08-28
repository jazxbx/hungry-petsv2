import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { FeedPetBtn, HandleLoveIncrease } from "./components/PetUtils";

const App = () => {
  // initial state
  const [pets, setPets] = useState([
    {
      id: 1,
      emoji: "🦉",
      name: "Owliver",
      hunger: 1,
      love: 95,
      isAlive: true,
      epitaph: "In the silence of the night, your wisdom echoes.",
    },
    {
      id: 2,
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
        const updatedPets = prevPets.map((pet) => {
          let updatedHunger = pet.hunger + 0.5;
          let updatedLove = pet.love - 0.5;

          if (updatedHunger === 100 || updatedLove <= 0) {
            updatedHunger = 0;
            updatedLove = 0;
            pet.isAlive = false;
          }
          console.log(updatedHunger);
          console.log(pet.isAlive);
          return {
            ...pet,
            hunger: updatedHunger,
            love: updatedLove,
          };
        });
        return updatedPets;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Hungry Pets</h1>
      <div className="card-container">
        {pets.map((pet) => {
          return (
            <Card
              key={pet.id}
              hunger={pet.hunger}
              love={pet.love}
              name={pet.name}
              emoji={pet.emoji}
              epitaph={pet.epitaph}
              feedPet={() => {
                FeedPetBtn(pet.id, setPets);
              }}
              lovePet={() => HandleLoveIncrease(pet.id, setPets)}
              isAlive={pet.isAlive}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
