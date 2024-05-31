import { useSelector } from 'react-redux';
import { selectReviewsForPet } from '../store/reviews';
import ReviewItem from './ReviewItem';

const ReviewList = ({ petId }) => {
  const reviews = useSelector(selectReviewsForPet(petId));

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id} className="review-item">
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
