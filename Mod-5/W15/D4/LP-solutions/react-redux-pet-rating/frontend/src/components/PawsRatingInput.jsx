//!!START SILENT
import { useEffect, useState } from 'react';
import { FaPaw } from 'react-icons/fa6';

//!!END
const PawsRatingInput = ({ rating, disabled, onChange }) => {
  //!!START SILENT
  const [activeRating, setActiveRating] = useState(rating);

  useEffect(() => {
    setActiveRating(rating);
  }, [rating]);
  // NOTE: This useEffect isn't necessary to have for this scenario anymore
  // because the number input has been removed, but if you have a scenario which
  // requires this input to be re-rendered with an updated rating prop instead
  // of unmounted and remounted with an updated rating, then this useEffect is
  // necessary.
  //!!END

  return (
    //!!ADD
    // <input
      // type="number"
      // disabled={disabled}
      // value={rating}
      // onChange={onChange}
    // />
    //!!END_ADD
    //!!START SILENT
    <div className="rating-input">
      <div
        className={activeRating >= 1 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setActiveRating(1)} }
        onMouseLeave={() => { if (!disabled) setActiveRating(rating)} }
        onClick={() => { if (!disabled) onChange(1)} }
      >
        <FaPaw />
      </div>
      <div
        className={activeRating >= 2 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setActiveRating(2)} }
        onMouseLeave={() => { if (!disabled) setActiveRating(rating)} }
        onClick={() => { if (!disabled) onChange(2)} }
      >
        <FaPaw />
      </div>
      <div
        className={activeRating >= 3 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setActiveRating(3)} }
        onMouseLeave={() => { if (!disabled) setActiveRating(rating)} }
        onClick={() => { if (!disabled) onChange(3)} }
      >
        <FaPaw />
      </div>
      <div
        className={activeRating >= 4 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setActiveRating(4)} }
        onMouseLeave={() => { if (!disabled) setActiveRating(rating)} }
        onClick={() => { if (!disabled) onChange(4)} }
      >
        <FaPaw />
      </div>
      <div
        className={activeRating >= 5 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setActiveRating(5) }}
        onMouseLeave={() => { if (!disabled) setActiveRating(rating)} }
        onClick={() => { if (!disabled) onChange(5)} }
      >
        <FaPaw />
      </div>
    </div>
    //!!END
  );
};

export default PawsRatingInput;
