import { useSelector } from "react-redux";
import css from "./VehicleDetails.module.css";
import { selectLoading } from "../../../redux/campers/selectors";
import Loader from "../../Loader/Loader";

export default function VehicleDetails({
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) {
  const loading = useSelector(selectLoading);
  return (
    <div className={css.cont}>
      {loading && <Loader />}
      <h4 className={css.title}>Vehicle details</h4>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p>Form</p>
          <p className={css.formType}>{form}</p>{" "}
        </li>
        <li className={css.listItem}>
          <p>Length</p> <p>{length}</p>
        </li>
        <li className={css.listItem}>
          <p>Width</p> <p>{width}</p>
        </li>
        <li className={css.listItem}>
          <p>Height</p> <p>{height}</p>
        </li>
        <li className={css.listItem}>
          <p>Tank</p> <p>{tank}</p>
        </li>
        <li className={css.listItem}>
          <p>Consumption</p> <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
}
