import { useLocation } from "react-router";
import css from "./Description.module.css";
import clsx from "clsx";
import { Camper } from "../../types/types";

export default function Description({ description }: Camper) {
  const location = useLocation();

  const isShortText = location.pathname === "/campers";

  const getDescriptionClass = () => {
    return clsx(css.descriptionFull, isShortText && css.descriptionShort);
  };

  return (
    <div className={css.descrCont}>
      <p className={getDescriptionClass()}>{description}</p>
    </div>
  );
}
