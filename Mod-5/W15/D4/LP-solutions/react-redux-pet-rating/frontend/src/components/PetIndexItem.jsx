import { useState } from 'react';
import CreateReviewForm from './CreateReviewForm';
import ReviewList from './ReviewList';

const PetIndexItem = ({ pet }) => {
  const [showCreateReviewForm, setShowCreateReviewForm] = useState(false);
  return (
    <li>
      <h3>{pet.name}</h3>
      <div>Average Paws Rating: {pet.avgPawsRating.toFixed(1)}</div>
      {showCreateReviewForm ? (
        <CreateReviewForm
          petId={pet.id}
          closeForm={() => setShowCreateReviewForm(false)}
        />
      ) : (
        <button onClick={() => setShowCreateReviewForm(true)} >
          Create a Review
        </button>
      )}
      <ReviewList petId={pet.id} />
    </li>
  );
};

export default PetIndexItem;
