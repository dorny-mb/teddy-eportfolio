import { Box, Container, Divider } from "@chakra-ui/react";

import React from "react";

import { CallToAction, MySkills, OptionList } from "./components";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      color="white"
      position="relative"
      borderRadius="4rem 0 0 0"
      bg="brand.400"
    >
      <Container py={24} id="skills" maxW="container.md">
        <MySkills />
      </Container>
      <Box w="98.5%" borderRadius="0 4rem 0 0" h="100%" bg="brand.600">
        <Container py={20} maxW="container.md">
          <CallToAction />
        </Container>
        <Divider borderColor="purple.900" w="78%" />
        <Container py={20} maxW="container.md">
          <OptionList />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
