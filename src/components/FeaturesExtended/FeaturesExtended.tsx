import { useSelector } from "react-redux";
import Features from "../CamperDetails/Features/Features";
import VehicleDetails from "../CamperDetails/VehicleDetails/VehicleDetails";
import { selectCamper } from "../../redux/campers/selectors";
import css from "./FeaturesExtended.module.css";
import { Camper } from "../types/types";

export default function FeaturesExtended() {
  const camper: Camper = useSelector(selectCamper);
  return (
    <div className={css.features}>
      <Features
        transmission={camper.transmission}
        AC={camper.AC}
        engine={camper.engine}
        TV={camper.TV}
        kitchen={camper.kitchen}
        radio={camper.radio}
        bathroom={camper.bathroom}
      />
      <VehicleDetails
        form={camper.form}
        length={camper.length}
        width={camper.width}
        height={camper.height}
        tank={camper.tank}
        consumption={camper.consumption}
      />
    </div>
  );
}
