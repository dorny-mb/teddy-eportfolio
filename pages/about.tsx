import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Loader } from "../components";

const AboutContainer = dynamic(() => import("../containers/About"), {
  suspense: true,
});

const About = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AboutContainer />
    </Suspense>
  );
};

export default About;
