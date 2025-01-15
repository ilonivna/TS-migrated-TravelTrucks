import icons from "../../../assets/sprite.svg";
import css from "./Features.module.css";

export default function Features({
  transmission,
  ac,
  engine,
  TV,
  kitchen,
  radio,
  bathroom,
}) {
  return (
    <ul className={css.list}>
      {transmission === "automatic" ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20}>
            <use className={css.iconSvg} href={`${icons}#icon-automatic`}></use>
          </svg>
          <p>Automatic</p>
        </li>
      ) : (
        <></>
      )}
      {ac ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-ac`}></use>
          </svg>
          <p>AC</p>
        </li>
      ) : (
        <></>
      )}
      {engine === "petrol" ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p>Petrol</p>
        </li>
      ) : (
        <></>
      )}
      {engine === "diesel" ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p>Diesel</p>
        </li>
      ) : (
        <></>
      )}
      {TV ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-tv`}></use>
          </svg>
          <p>TV</p>
        </li>
      ) : (
        <></>
      )}
      {kitchen ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-kitchen`}></use>
          </svg>
          <p>Kitchen</p>
        </li>
      ) : (
        <></>
      )}
      {radio ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-radio`}></use>
          </svg>
          <p>Radio</p>
        </li>
      ) : (
        <></>
      )}
      {bathroom ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-bath`}></use>
          </svg>
          <p>Bathroom</p>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
}
