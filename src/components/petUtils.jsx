// Feed pet handler fn

const FeedPetBtn = (petId, setPets) => {
  // sanity check
  // console.log(`Feeding pet with ID: ${petId}`);
  return setPets((prevPets) => {
    return prevPets.map((pet) => {
      if (pet.id === petId) {
        return {
          ...pet,
          hunger: 0,
        };
      }
      return pet;
    });
  });
};

// Love pet handler fn

const HandleLoveIncrease = (petId, setPets) => {
  // my brother in christ
  console.log(`clicked emoji ${petId}`);
  return setPets((prevPets) =>
    prevPets.map((pet) => {
      if (pet.id === petId) {
        return {
          ...pet,
          love: 100,
        };
      }
      return pet;
    })
  );
};

export { FeedPetBtn, HandleLoveIncrease };
