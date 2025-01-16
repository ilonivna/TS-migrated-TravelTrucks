import { fetchCamper } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { Outlet, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
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

const getLinkClass = ({ isActive }: { isActive: boolean }): string => {
  return clsx(css.link, isActive && css.active);
};

export default function CamperPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const camper = useSelector(selectCamper);
  9;
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      iziToast.error({
        title: "Error",
        message: "Error occurred! Please reload the page.",
        color: "#D84343",
        position: "topRight",
      });
    }
  }, [error]);

  if (loading) {
    return <Loader />;
  }

  if (!camper) {
    return (
      <div className={css.errorMessage}>
        <p>No camper found. Please check the camper ID.</p>
      </div>
    );
  }

  return (
    <div className={css.section}>
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
    </div>
  );
}
