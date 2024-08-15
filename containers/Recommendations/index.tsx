import React from "react";
import { PageWrap } from "../../layout";
import { Testimonials } from "./components";

type RecommendationsProps = {};

const Recommendations: React.FC<RecommendationsProps> = ({}) => {
  return (
    <PageWrap title="Recommendations">
      <Testimonials />
    </PageWrap>
  );
};

export default Recommendations;
