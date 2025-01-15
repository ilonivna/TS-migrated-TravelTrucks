import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
const Reviews = lazy(() =>
  import("../../components/CamperReviews/CamperReviews")
);
const FeaturesExtended = lazy(() =>
  import("../../components/FeaturesExtended/FeaturesExtended")
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/campers" element={<CatalogPage />}></Route>
        <Route path="/campers/:id" element={<CamperPage />}>
          <Route path="features" element={<FeaturesExtended />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
