import { useSelector } from "react-redux";
import CamperDetails from "../CamperDetails/CamperDetails";
import css from "./CampersList.module.css";
import { selectError, selectLoading } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";
import iziToast from "izitoast";
import { Camper } from "../types/types";
import { MouseEventHandler } from "react";

type Props = {
  campersList: Camper[];
  page: number;
  totalPages: number;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function CampersList({
  campersList,
  page,
  totalPages,
  handleClick,
}: Props) {
  const loading = useSelector(selectLoading);
  const isDisabled = totalPages <= page;
  const error = useSelector(selectError);
  return (
    <div>
      {error &&
        iziToast.info({
          title: "Sorry!",
          message: "No campers were found! Reload, please.",
          color: "#D84343",
          position: "topRight",
        })}
      {loading && <Loader />}
      {campersList.length > 0 && (
        <ul>
          {campersList.map((camper: Camper) => {
            return (
              <li key={camper.id}>
                <CamperDetails camper={camper} />
              </li>
            );
          })}
        </ul>
      )}

      {campersList.length > 0 && (
        <button onClick={handleClick} className={css.btn} disabled={isDisabled}>
          Load more campers
        </button>
      )}
    </div>
  );
}
