// checks if pet is dead or alive

const UpdatePetStatus = (pets) => {
  return pets.map((pet) => {
    const updatedPet = { ...pet };
    if (pet.hunger <= 0 || pet.love <= 0) {
      updatedPet.isAlive = false;
    }
    return updatedPet;
  });
};

export { UpdatePetStatus };
