import {
  Center,
  Flex,
  FlexProps,
  Image,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { Logo } from "..";

const Wrapper = styled(Flex)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
`;
const BlinkingImage = styled(Logo)`
  animation: blink 1s ease-in-out 0s alternate infinite;
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Loader: React.FC<FlexProps> = (props) => {
  return (
    <Wrapper
      {...props}
      zIndex={84848}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Center position="relative">
        <BlinkingImage />
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor={useColorModeValue("gray.200", "gray.600")}
          position="absolute"
          color={useColorModeValue("purple.300", "purple.500")}
          left={-2.5}
          size="xl"
        />
      </Center>
    </Wrapper>
  );
};

Loader.defaultProps = {
  position: "fixed",
  bg: "white",
};

export default Loader;
