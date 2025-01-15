import css from "./GallerySimple.module.css";
import { Camper, GalleryItem } from "../../types/types";

export default function GallerySimple({ gallery, name }: Camper) {
  return (
    <>
      {gallery && (
        <ul className={css.container}>
          {gallery.map((item: GalleryItem, index: number) => {
            return (
              <li className={css.imageContainer} key={index}>
                <img className={css.image} src={item.thumb} alt={name} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
