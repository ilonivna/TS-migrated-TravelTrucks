/* eslint-disable react/prop-types */
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation.jsx";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
