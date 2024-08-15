import React from "react";
import { Box, Flex, SlideFade } from "@chakra-ui/react";
import { SeeMoreButton, TitleAndDescription } from "../../../../components";
import { experiences } from "./experiences";
import Image from "next/image";
import styled from "@emotion/styled";
import { useAppContext } from "../../../../context/AppContext/index";
import { useInView } from "react-intersection-observer";
import { LINKEDIN_EXPERIENCE } from "../../../../constants";

type MyExperienceProps = {};

const CustomeImage = styled(Image)`
  flex: 1;
  max-width: 12rem;
  margin: 0 1rem;
`;

const MyExperience: React.FC<MyExperienceProps> = ({}) => {
  const { isTabletOrMobile } = useAppContext();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <Box py={10}>
      <TitleAndDescription
        title="My Experience"
        orientation={isTabletOrMobile ? "vertical" : "horizontal"}
        descrition=" My work is the bridge to various insightful digital and engineering
          experiences"
      />
      <Flex
        direction={isTabletOrMobile ? "column" : "row"}
        align="center"
        justify="center"
        my={16}
      >
        {experiences.map(({ logo, name }, idx) => (
          <SlideFade
            ref={ref}
            key={idx + name}
            delay={0.1}
            in={inView}
            offsetY="20px"
          >
            <Box my={isTabletOrMobile ? 4 : 0}>
              <CustomeImage src={logo} alt={`${name} logo`} />
            </Box>
          </SlideFade>
        ))}
      </Flex>

      <SeeMoreButton delay={0.3} link={LINKEDIN_EXPERIENCE} />
    </Box>
  );
};

export default MyExperience;
