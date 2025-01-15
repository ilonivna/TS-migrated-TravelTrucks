import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "../../../redux/campers/slice";
import { selectFavorites } from "../../../redux/campers/selectors";

import icons from "../../../assets/sprite.svg";
import clsx from "clsx";
import css from "./NamePrice.module.css";
import { useLocation } from "react-router-dom";

export default function NamePrice({ name, price, id }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const isCatalog = location.pathname === "/campers";
  const getIconClass = () => {
    return clsx(isCatalog ? css.iconSvg : css.iconNoShow);
  };

  const getPriceContainerClass = () => {
    return clsx(
      isCatalog ? css.namePriceContainer : css.namePriceContainerDetailed
    );
  };

  const getPriceClass = () => {
    return clsx(isCatalog ? null : css.price);
  };

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch(setFavorite(id));
    } else {
      dispatch(deleteFavorite(id));
    }
  };

  return (
    <div className={getPriceContainerClass()}>
      <h4>{name}</h4>
      <div className={css.priceFavContainer}>
        <p className={getPriceClass()}>€{price}.00</p>
        <label className={css.label}>
          <input
            className={css.input}
            type="checkbox"
            onChange={handleChange}
            checked={isFavorite}
          />

          <svg width="24" height="21" className={getIconClass()}>
            {isFavorite ? (
              <use className={css.icon} href={`${icons}#checked-heart`}></use>
            ) : (
              <use href={`${icons}#heart`}></use>
            )}
          </svg>
        </label>
      </div>
    </div>
  );
}
