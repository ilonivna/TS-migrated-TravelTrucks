import { useSelector } from "react-redux";
import css from "./CamperReviews.module.css";
import { selectCamper } from "../../redux/campers/selectors";
import { nanoid } from "nanoid";
import icons from "../../assets/sprite.svg";
import { Camper } from "../types/types";

type ReviewsType = {
  reviewer_name?: string | undefined;
  reviewer_rating?: number | undefined;
  comment?: string | undefined;
};

export default function CamperReviews() {
  const camper: Camper = useSelector(selectCamper);
  const { reviews } = camper;
  if (!reviews) return null;
  return (
    <div className={css.reviews}>
      <ul className={css.list}>
        {reviews.map((review: ReviewsType) => {
          if (!review.reviewer_name || review.reviewer_rating === undefined) {
            return null;
          }

          const letter = review.reviewer_name.charAt(0).toUpperCase();
          const stars = 5;
          const rating = review.reviewer_rating ?? 0;
          return (
            <li key={review.reviewer_name}>
              <div className={css.itemCont}>
                <div className={css.avatar}>{letter}</div>
                <div className={css.nameRatingCont}>
                  <p>{review.reviewer_name}</p>

                  <p>
                    {[...Array(stars)].map((_, index) => (
                      <svg
                        width={16}
                        height={16}
                        fill={index < rating ? "#ffc531" : "#f2f4f7"}
                        key={nanoid()}
                      >
                        <use href={`${icons}#icon-rating`}></use>
                      </svg>
                    ))}
                  </p>
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
