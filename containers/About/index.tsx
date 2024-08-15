import React from "react";
import { PageWrap } from "../../layout";
import { Testimonials } from "./components";

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
  return (
    <PageWrap title="About">
      <Testimonials />
    </PageWrap>
  );
};

export default About;
