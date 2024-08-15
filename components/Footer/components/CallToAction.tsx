import { Flex, SlideFade, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { EMAIL_ADDRESS } from "../../../constants";
import { useAppContext } from "../../../context/AppContext";
import TitleAndDescription from "../../TitleAndDescription";

type CallToActionProps = {};

const CallToAction: React.FC<CallToActionProps> = ({}) => {
  const { isTabletOrMobile } = useAppContext();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <Flex
      align={isTabletOrMobile ? "flex-start" : "center"}
      direction={isTabletOrMobile ? "column" : "row"}
      justify="space-between"
    >
      <TitleAndDescription
        orientation="vertical"
        title="Interested in Collaboration?"
        descrition="Challenge me I want to work with you to create the really cool stuff."
      />
      <SlideFade ref={ref} delay={0.1} in={inView} offsetY="20px">
        <Link href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
          <Button
            colorScheme="blue"
            mt={isTabletOrMobile ? 12 : 0}
            rightIcon={<VscChevronRight />}
            fontSize="xs"
          >
            <Text mr={10}>Let&apos;s Talk</Text>
          </Button>
        </Link>
      </SlideFade>
    </Flex>
  );
};

export default CallToAction;
