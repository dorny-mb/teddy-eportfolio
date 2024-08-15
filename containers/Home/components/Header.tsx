import { SlideFade, Heading, Button, Text, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { VscChevronRight, VscCloudDownload } from "react-icons/vsc";
import { WrapperHeader } from "../../../components";
import { useAppContext } from "../../../context/AppContext/index";
import { useTextTypingEffect } from "../../../hooks";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const { isDarkMode } = useAppContext();
  useTextTypingEffect("#autoTxt");
  return (
    <WrapperHeader>
      <SlideFade delay={0.1} in={true} offsetY="20px">
        <Heading color={isDarkMode ? "gray.200" : "gray.700"}>
          <Text fontSize="6xl">Hi,</Text> I&apos;m Teddy
          <br />
          <Text
            id="autoTxt"
            display="inline"
            data-word='["SQA Engineer","Tech Enthusiast"]'
            data-wait="3000"
            borderRight="1px solid"
            borderColor="purple.400"
            color="purple.400"
          ></Text>
        </Heading>
      </SlideFade>
      <SlideFade delay={0.2} in={true} offsetY="20px">
        <Text fontSize={14} color="gray.500">
          I come up with how it would look attractive and how it would work
          effectively
        </Text>
      </SlideFade>
      <HStack spacing={4}>
        <SlideFade delay={0.4} in={true} offsetY="20px">
          <Link href="/cv_teddy_muba.pdf" target="_blank" download>
            <Button
              fontSize="x-small"
              colorScheme="blue"
              fontWeight="bold"
              leftIcon={<VscCloudDownload />}
            >
              Download My CV
            </Button>
          </Link>
        </SlideFade>
        <SlideFade delay={0.5} in={true} offsetY="20px">
          <Link href="#skills">
            <Button
              fontSize="x-small"
              colorScheme="purple"
              variant="ghost"
              fontWeight="bold"
              rightIcon={<VscChevronRight />}
            >
              <Text mr={4}>See My Skills</Text>
            </Button>
          </Link>
        </SlideFade>
      </HStack>
    </WrapperHeader>
  );
};

export default Header;
