/* eslint-disable react/prop-types */
import { Suspense } from "react";
import Loader from "../Loader/Loader.jsx";
import Navigation from "../Navigation/Navigation.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
