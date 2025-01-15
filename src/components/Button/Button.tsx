/* eslint-disable react/prop-types */

import css from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  type: string;
};

export default function Button({ children }: Props) {
  return (
    <button type="submit" className={css.btn}>
      {children}
    </button>
  );
}
