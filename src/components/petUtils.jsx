// Feed pet handler fn

const FeedPetBtn = (petId, setPets) => {
  console.log(`Feeding pet with ID: ${petId}`);
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

export { FeedPetBtn };
