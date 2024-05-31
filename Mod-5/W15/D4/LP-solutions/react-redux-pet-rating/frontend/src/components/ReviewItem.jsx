import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../store/reviews';
import EditReviewForm from './EditReviewForm';
import PawsRatingInput from './PawsRatingInput';

const ReviewList = ({ review }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const dispatch = useDispatch();

  return (
    showEditForm ? (
      <EditReviewForm reviewId={review.id} closeForm={() => setShowEditForm(false)} />
    ) : (
      <>
        <PawsRatingInput rating={review.rating} disabled={true} />
        <button onClick={() => setShowEditForm(true)}>Edit</button>
        <button onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
      </>
    )
  );
}

export default ReviewList;
