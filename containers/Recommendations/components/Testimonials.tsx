import { Box, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { SwiperWrap } from "../../../components";
import images from "../../../theme/images";

const recommendations = [
  {
    link: "",
    message:
      "Teddy Muba is a Software QA Engineer who prioritizes delivering exceptional user experiences and ensuring the usability of applications without compromising on the robustness of business logic. He possesses an advanced understanding of complex quality assurance concepts and consistently integrates modern testing technologies into his projects. His expertise spans over various testing frameworks and tools, with a strong command of programming languages such as JAVA, Python, and JavaScript, and proficiency in working with RESTful APIs and Cloud Services.",
    name: "Chris Ndala",
    jobTitle: "Senior Software Quality Engineer",
    imageSrc: images.ruphinProfile,
  },
  {
    link: "",
    message: `Teddy is a diligent and skilled student who excels in Software QA Engineering. He consistently goes the extra mile, demonstrating strong teamwork and leadership abilities. With a comprehensive skill set in quality assurance, Teddy delivers outstanding results and effectively tackles any new technology. Additionally, he serves as a mentor to his fellow students, guiding them with his expertise and enthusiasm.`,
    name: "Monde Masiko",
    jobTitle: "Head of Product & User Experience at Mr D",
    imageSrc: images.waldonProfile,
  },
];
const Testimonials = () => (
  <Box as="section" py={20} bg={useColorModeValue("white", "gray.800")}>
    <SwiperWrap slides={recommendations} />
  </Box>
);

export default Testimonials;
