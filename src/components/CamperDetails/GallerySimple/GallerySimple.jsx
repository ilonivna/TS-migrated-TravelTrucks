import css from "./GallerySimple.module.css";

export default function GallerySimple({ gallery, name }) {
  return (
    <>
      <ul className={css.container}>
        {gallery.map((item, index) => {
          return (
            <li className={css.imageContainer} key={index}>
              <img className={css.image} src={item.thumb} alt={name} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
