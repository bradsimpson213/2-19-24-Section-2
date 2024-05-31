import { createSelector } from 'reselect';
import { receiveReviews } from './reviews';

export const RECEIVE_PET = 'pets/RECEIVE_PET';
export const RECEIVE_PETS = 'pets/RECEIVE_PETS';
export const REMOVE_PET = 'pets/REMOVE_PET';
export const RESET_PETS = 'pets/RESET_PETS';

export const fetchPets = () => async (dispatch) => {
  const req = await fetch('/api/pets');
  const data = await req.json();
  const pets = data;
  const reviews = {};
  for (let pet of pets) {
    if ('Reviews' in pet) {
      for (let review of pet.Reviews) {
        reviews[review.id] = review;
      }
      delete pet.Reviews;
    }
  }
  dispatch(receivePets(pets));
  dispatch(receiveReviews(reviews));
  return { pets, reviews };
};

export const receivePet = pet => ({
  type: RECEIVE_PET,
  pet
});

export const receivePets = pets => ({
  type: RECEIVE_PETS,
  pets
});

export const removePet = petId => ({
  type: REMOVE_PET,
  petId
});

export const resetPets = () => ({
  type: RESET_PETS
});

const selectPets = state => state?.pets;

export const selectAllPets = createSelector (selectPets, pets => {
  return pets ? Object.values(pets) : [];
});

export const selectPet = petId => state => {
  return state?.pets ? state.pets[petId] : null;
};

const petsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PET:
      return { ...state, [action.pet.id]: action.pet };
    case RECEIVE_PETS: {
      const newState = { ...state };
      for (let pet of action.pets) {
        newState[pet.id] = pet;
      }
      return newState;
    }
    case REMOVE_PET: {
      const newState = { ...state };
      delete newState[action.petId];
      return newState;
    }
    case RESET_PETS:
      return {};
    default:
      return state;
  }
};

export default petsReducer;
