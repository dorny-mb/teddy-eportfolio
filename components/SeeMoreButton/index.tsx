import { Center, SlideFade, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";

type SeeMoreButtonProps = {
  link: string;
  title?: string;
  delay?: number | Partial<Record<"exit" | "enter", number>> | undefined;
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  link,
  title,
  delay,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <Center mt={14} ref={ref} flexDirection="column">
      <SlideFade delay={delay} in={inView} offsetY="20px">
        <Link href={link} target="_blank">
          <Button
            fontSize="x-small"
            colorScheme="white"
            variant="ghost"
            fontWeight="bold"
            rightIcon={<VscChevronRight />}
          >
            <Text mr={4}>{title}</Text>
          </Button>
        </Link>
      </SlideFade>
    </Center>
  );
};

SeeMoreButton.defaultProps = {
  title: "See More",
  delay: 1,
};

export default SeeMoreButton;
