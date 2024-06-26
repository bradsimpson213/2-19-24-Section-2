import produceData from '../mockData/produce.json';
import { createSelector } from 'reselect';

const POPULATE = 'produce/POPULATE';
const TOGGLE_LIKE = 'produce/TOGGLE_LIKE';

/* ----- ACTIONS ------ */
export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export const toggleLike = (produceId) => {
  return {
    type: TOGGLE_LIKE,
    produceId
  };
};

/* ------ SELECTORS ------ */
export const selectProduce = (state) => state.produce;
export const selectProduceArray =
  createSelector(selectProduce, (produce) => Object.values(produce));

/* ------ REDUCER ------ */
export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    }
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.produceId]: {
          ...state[action.produceId],
          liked: !state[action.produceId].liked,
        },
      };
    default:
      return state;
  }
}
