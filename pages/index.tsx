import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Loader } from "../components";

const HomeContainer = dynamic(() => import("../containers/Home"), {
  suspense: true,
});

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HomeContainer />
    </Suspense>
  );
};

export default Home;
