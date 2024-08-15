import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Loader } from "../components";

const RecommendationsContainer = dynamic(
  () => import("../containers/Recommendations"),
  {
    suspense: true,
  }
);

const Recommendations = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RecommendationsContainer />
    </Suspense>
  );
};

export default Recommendations;
