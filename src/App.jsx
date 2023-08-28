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
      hunger: 33,
      love: 95,
      isAlive: true,
      epitaph: "In the silence of the night, your wisdom echoes.",
    },
    {
      id: 2,
      emoji: "🪨",
      name: "Rockwell",
      hunger: 50,
      love: 80,
      isAlive: true,
      epitaph: "Solid as stone, your memory stands unshaken.",
    },
    {
      id: 3,
      emoji: "🤖",
      name: "Baymax",
      hunger: 0,
      love: 100,
      isAlive: true,
      epitaph: "In the realm of circuits, your digital heart pulses.",
    },
    {
      id: 4,
      emoji: "🦔",
      name: "Prickle",
      hunger: 74,
      love: 85,
      isAlive: true,
      epitaph: "Among the leaves, your gentle spirit rustles.",
    },

    {
      id: 5,
      emoji: "👻",
      name: "Chocoboo",
      hunger: 0,
      love: 100,
      isAlive: true,
      epitaph: "Vanished from sight, your presence haunts our thoughts.",
    },

    {
      id: 6,
      emoji: "🦋",
      name: "Seraphina",
      hunger: 16,
      love: 90,
      isAlive: true,
      epitaph: "Your grace dances on the winds of eternity.",
    },

    {
      id: 7,
      emoji: "🦄",
      name: "Dementor",
      hunger: 20,
      love: 80,
      isAlive: true,
      epitaph: "In the warmth of the sun, your scales shimmer.",
    },

    {
      id: 8,
      emoji: "🦐",
      name: "Crackers",
      hunger: 25,
      love: 75,
      isAlive: true,
      epitaph: "Beneath the waves, your tiny presence leaves ripples.",
    },

    {
      id: 9,
      emoji: "🐧",
      name: "Agent Bob",
      hunger: 15,
      love: 85,
      isAlive: true,
      epitaph: "In the icy expanse, your waddle warms our hearts.",
    },

    {
      id: 10,
      emoji: "😺",
      name: "Whiskers",
      hunger: 10,
      love: 90,
      isAlive: true,
      epitaph: "Purring softly, your memory cuddles close.",
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
    <div className="pets-container">
      <h1 className="casual">Hungry Pets</h1>
      <p className="intro casual">
        Keep your pets well-fed and loved to ensure their happiness and
        survival!
      </p>
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
    </div>
  );
};

export default App;
