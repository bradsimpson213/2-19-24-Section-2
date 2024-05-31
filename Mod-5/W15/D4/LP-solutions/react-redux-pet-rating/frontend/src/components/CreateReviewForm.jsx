import { createReview } from '../store/reviews';
import ReviewForm from './ReviewForm';

const CreateReviewForm = ({ petId, closeForm }) => {
  const review = {
    petId,
    rating: 0
  };

  return (
    <ReviewForm
      review={review}
      formType="Submit Review"
      onSubmit={createReview}
      closeForm={closeForm}
    />
  );
}

export default CreateReviewForm;
