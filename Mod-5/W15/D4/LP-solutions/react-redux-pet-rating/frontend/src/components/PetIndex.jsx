import { useEffect, useState } from 'react';
import PetIndexItem from './PetIndexItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPets, fetchPets } from '../store/pets';
import { selectAllReviews } from '../store/reviews';

const SORT_BY_NAME = "name";
const SORT_BY_RATING = "rating";
const SORT_BY_ASC = 1;
const SORT_BY_DESC = -1;

const PetIndex = () => {
  const pets = useSelector(selectAllPets);
  const reviews = useSelector(selectAllReviews);
  const [sortBy, setSortBy] = useState(SORT_BY_NAME);
  const [sortByDir, setSortByDir] = useState(SORT_BY_ASC);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  let sortedPets = [];
  for (let idx in pets) {
    const pet = { ...pets[idx] };
    const petReviews = reviews.filter(review => review.petId === pet.id);
    const totalPawsRating = petReviews.reduce((sum, review) => review.rating + sum, 0);
    pet.avgPawsRating = totalPawsRating / petReviews.length;
    sortedPets.push(pet);
  }
  if (sortBy === SORT_BY_RATING) {
    sortedPets.sort((petA, petB) => (sortByDir) * (petA.avgPawsRating - petB.avgPawsRating));
  } else if (sortBy === SORT_BY_NAME) {
    sortedPets.sort((petA, petB) => sortByDir * (petA.name < petB.name ? -1 : 1));
  }

  return (
    <section>
      <ul className="sort">
        Sort Animals By:
        <li
          disabled={sortBy === SORT_BY_RATING}
          onClick={() => setSortBy(SORT_BY_RATING)}
          className={sortBy === SORT_BY_RATING ? " active" : ""}
        >
          Rating
        </li>
        <li
          disabled={sortBy === SORT_BY_NAME}
          onClick={() => setSortBy(SORT_BY_NAME)}
          className={sortBy === SORT_BY_NAME ? " active" : ""}
        >
          Name
        </li>
        <li
          disabled={sortByDir === SORT_BY_ASC}
          onClick={() => setSortByDir(SORT_BY_ASC)}
          className={sortByDir === SORT_BY_ASC ? " active" : ""}
        >
          ASC
        </li>
        <li
          disabled={sortByDir === SORT_BY_DESC}
          onClick={() => setSortByDir(SORT_BY_DESC)}
          className={sortByDir === SORT_BY_DESC ? " active" : ""}
        >
          DESC
        </li>
      </ul>
      <ul>
        {
          sortedPets.map(pet => (
            <PetIndexItem
              pet={pet}
              key={pet.id}
            />
          ))
        }
      </ul>
    </section>
  );
}

export default PetIndex;
