import { createSelector } from 'reselect';
import { REMOVE_PET } from './pets';

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';
export const RESET_REVIEWS = 'reviews/RESET_REVIEWS';

export const createReview = (reviewToCreate) => async (dispatch) => {
  const req = await fetch(`/api/pets/${reviewToCreate.petId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ rating: reviewToCreate.rating })
  });
  const data = await req.json();
  const createdReview = data;
  dispatch(receiveReview(createdReview));
  return createdReview;
};

export const editReview = (reviewToEdit) => async (dispatch) => {
  const req = await fetch(`/api/reviews/${reviewToEdit.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reviewToEdit)
  });
  const data = await req.json();
  const editedReview = data;
  dispatch(receiveReview(editedReview));
  return editedReview;
};

export const deleteReview = (reviewId) => async (dispatch) => {
  await fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  dispatch(removeReview(reviewId));
  return reviewId;
};

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const resetReviews = () => ({
  type: RESET_REVIEWS,
});

const selectReviews = state => state?.reviews

export const selectAllReviews = createSelector (selectReviews, reviews => {
  return reviews ? Object.values(reviews) : [];
});

export const selectReviewsForPet = petId => createSelector (selectReviews, (reviews) => {
  return reviews ? Object.values(reviews).filter(review => review.petId === petId) : [];
});

export const selectReview = reviewId => state => {
  return state?.reviews ? state.reviews[reviewId] : null;
};

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return { ...state, [action.review.id]: action.review };
    case RECEIVE_REVIEWS:
      return { ...state, ...action.reviews };
    case REMOVE_REVIEW: {
      const newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    }
    case REMOVE_PET: {
      const newState = { ...state };
      for (let review of state) {
        if (review.petId === action.petId) {
          delete newState[review.id];
        }
      }
      return newState;
    }
    case RESET_REVIEWS:
      return {};
    default:
      return state;
  }
};

export default reviewsReducer;
