import { Link } from "react-router-dom";
import css from "./CamperDetails.module.css";
import Features from "./Features/Features";
import Description from "./Description/Description";
import NamePrice from "./NamePrice/NamePrice";
import ReviewLocation from "./ReviewLocation/ReviewLocation";
import Gallery from "./Gallery/Gallery";
import Button from "../Button/Button";
import { Camper } from "../types/types";

type CamperProp = {
  camper: Camper;
};

export default function CamperDetails({ camper }: CamperProp) {
  const {
    id,
    transmission,
    AC,
    engine,
    TV,
    kitchen,
    radio,
    bathroom,
    name,
    gallery,
    location,
    reviews,
    rating,
    price,
    description,
  } = camper;

  return (
    <div className={css.container}>
      <div className={css.containerGallery}>
        <Gallery name={name} gallery={gallery} slidesPerView={1} />
      </div>
      <div className={css.containerDetails}>
        <NamePrice name={name} id={id} price={price} />
        <ReviewLocation
          id={id}
          location={location}
          reviews={reviews}
          rating={rating}
        />
        <Description description={description} />
        <Features
          transmission={transmission}
          AC={AC}
          engine={engine}
          TV={TV}
          kitchen={kitchen}
          radio={radio}
          bathroom={bathroom}
        />
        <div className={css.btn}>
          <Link to={`/campers/${id}/features`}>
            <Button type="button">Show more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
