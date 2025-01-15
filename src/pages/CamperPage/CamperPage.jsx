import { fetchCamper } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { Outlet, useParams } from "react-router-dom";
import { Suspense, useEffect } from "react";
import {
  selectCamper,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";
import { NavLink } from "react-router-dom";
import iziToast from "izitoast";
import ReviewLocation from "../../components/CamperDetails/ReviewLocation/ReviewLocation";
import NamePrice from "../../components/CamperDetails/NamePrice/NamePrice";
import Description from "../../components/CamperDetails/Description/Description";
import GallerySimple from "../../components/CamperDetails/GallerySimple/GallerySimple";
import css from "./CamperPage.module.css";
import clsx from "clsx";
import BookingForm from "../../components/BookingForm/BookingForm";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function CamperPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  return (
    <div className={css.section}>
      {loading && <Loader />}

      {error &&
        iziToast.error({
          title: "Error",
          message: "Error occurred! Reload, please",
          color: "#D84343",
          position: "topRight",
        })}
      {camper && (
        <div className={css.container}>
          <div className={css.container}>
            <NamePrice name={camper.name} id={camper.id} price={camper.price} />
            <ReviewLocation
              location={camper.location}
              reviews={camper.reviews}
              rating={camper.rating}
              id={camper.id}
            />
            <GallerySimple name={camper.name} gallery={camper.gallery} />

            <Description description={camper.description} />
          </div>
          <div>
            <ul className={css.linkCont}>
              <li className={css.item}>
                <NavLink to="features" className={getLinkClass}>
                  Features
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="reviews" className={getLinkClass}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={css.nestedCont}>
            <Suspense fallback={<Loader />}>
              <Outlet context={{ data: camper }} />
            </Suspense>

            <div className={css.form}>
              <BookingForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
