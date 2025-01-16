import sorryGif from "./assets/sorry.gif";
import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <img src={sorryGif} alt="Sorry.." className={css.image} />
      <h3 className={css.text}>
        Sorry, requested page was not found. <br />
        Please,
        <Link to="/">
          <span className={css.link}>return to Home Page</span>
        </Link>
      </h3>
    </div>
  );
}
