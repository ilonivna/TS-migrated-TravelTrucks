import css from "./ReviewLocation.module.css";
import icons from "../../../assets/sprite.svg";
import { Link } from "react-router-dom";
import { Camper } from "../../types/types";

type ReviewsType = {
  reviews: {
    reviewer_name?: string;
    reviewer_rating?: number;
    comment?: string;
  };
};

export default function ReviewLocation({
  location,
  reviews,
  rating,
  id,
}: Camper) {
  return (
    <div className={css.reviewLocationContainer}>
      <Link to={`/campers/${id}/reviews`}>
        {reviews && (
          <p className={css.rating}>
            <svg className={css.ratingIcon} width="24" height="21">
              <use href={`${icons}#icon-rating`}></use>
            </svg>
            {rating} ({reviews.length} Reviews)
          </p>
        )}
      </Link>

      <p>
        <svg width="24" height="21" fill="#101828">
          <use href={`${icons}#icon-map`}></use>
        </svg>
        {location}
      </p>
    </div>
  );
}
