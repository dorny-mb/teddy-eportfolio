import {
  Flex,
  SlideFade,
  useColorModeValue,
  Text,
  Box,
  Circle,
  HStack,
} from "@chakra-ui/react";

import React from "react";

import { QuoteIcon, Quotee } from "./components";

export type QuoteProps = {
  name: string;
  jobTitle: string;
  imageSrc: string;
  message: string;
};

const Quote: React.FC<QuoteProps> = ({ name, jobTitle, imageSrc, message }) => {
  return (
    <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <SlideFade delay={0.1} in={true} offsetY="20px">
          <QuoteIcon
            color={useColorModeValue("gray.300", "gray.600")}
            fontSize={{ base: "3xl", md: "6xl" }}
          />
        </SlideFade>
        <SlideFade delay={0.2} in={true} offsetY="20px">
          <Text fontSize={{ base: "md", md: "xl" }} fontWeight="medium" mt="6">
            {message}
          </Text>
        </SlideFade>
        <SlideFade delay={0.4} in={true} offsetY="20px">
          <Quotee name={name} jobTitle={jobTitle} imageSrc={imageSrc} mt="8" />
        </SlideFade>
      </Flex>
    </Box>
  );
};

export default Quote;
