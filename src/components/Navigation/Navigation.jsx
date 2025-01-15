import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "../../assets/TravelTrucks.png";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width="135"
          height="15"
          className={css.logo}
        />
      </Link>
      <nav className={css.linkList}>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/campers" className={getLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}
