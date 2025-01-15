import { useSelector } from "react-redux";
import CamperDetails from "../CamperDetails/CamperDetails";
import css from "./CampersList.module.css";
import { selectError, selectLoading } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader.jsx";
import iziToast from "izitoast";

export default function CampersList({
  campersList,
  page,
  totalPages,
  handleClick,
}) {
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
          {campersList.map((camper) => {
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
