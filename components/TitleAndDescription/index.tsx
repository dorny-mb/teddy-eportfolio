import {
  HStack,
  Heading,
  Text,
  VStack,
  SlideFade,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "../../context/AppContext/index";

type TitleAndDescriptionProps = {
  title: string;
  descrition: string;
  orientation?: "vertical" | "horizontal";
};

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({
  title,
  descrition,
  orientation,
}) => {
  const isHorizontal = orientation === "horizontal";
  const { isTabletOrMobile } = useAppContext();
  const [headingRef, headingInView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const [textRef, textInView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const contents = () => (
    <>
      <SlideFade ref={headingRef} delay={0.1} in={headingInView} offsetY="20px">
        <Heading size={["xs", !isHorizontal ? "lg" : "md"]}>{title}</Heading>
      </SlideFade>
      <SlideFade ref={textRef} delay={0.2} in={textInView} offsetY="20px">
        <Text color="gray.400" fontSize={!isHorizontal ? "x-small" : "xs"}>
          {descrition}
        </Text>
      </SlideFade>
    </>
  );
  return isHorizontal ? (
    <HStack spacing={[8, 16]}>{contents()}</HStack>
  ) : (
    <VStack spacing={[2, 4]} maxW={52} alignItems="flex-start">
      {contents()}
    </VStack>
  );
};
TitleAndDescription.defaultProps = {
  orientation: "horizontal",
};
export default TitleAndDescription;
