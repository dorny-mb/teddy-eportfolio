import {
  Box,
  Flex,
  SlideFade,
  useColorModeValue,
  Text,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";

import images from "../../../theme/images";
import { APP_NAME, JOB_TITLE } from "../../../constants";

import { QuoteIcon, Quotee } from "../../../components/Quote/components";
import { VStack } from "@chakra-ui/react";
import { useAppContext } from "../../../context/AppContext/index";

const { message, name, jobTitle, imageSrc } = {
  message: `I'm Teddy Muba, I am currently in my fourth year of pursuing a BScEng in Electrical & Computer Engineering at the University of Cape Town. Alongside my studies, I work as a Software QA Engineer at GoMaterials.

I'm dedicated, hardworking, and results-oriented, always striving to excel in both personal and professional tasks.

Feel free to explore my CV to see details about my experience, check out the projects I've been involved in, or reach out to me directly for more information. Additionally, you can learn about my hobbies and interests as well.`,
  name: APP_NAME,
  jobTitle: JOB_TITLE,
  imageSrc: images.profile,
};
const Testimonials = () => {
  const { isTabletOrMobile } = useAppContext();
  return (
    <Box as="section" py={20} bg={useColorModeValue("white", "gray.800")}>
      <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }} pt="12" pb="16">
        <Stack
          direction={isTabletOrMobile ? "column-reverse" : "row"}
          align="center"
          spacing={24}
        >
          <VStack textAlign="left" flex={1}>
            <SlideFade delay={0.1} in={true} offsetY="20px">
              <QuoteIcon
                color={useColorModeValue("gray.300", "gray.600")}
                fontSize={{ base: "3xl", md: "6xl" }}
              />
            </SlideFade>
            <SlideFade delay={0.2} in={true} offsetY="20px">
              <Text
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="medium"
                mt="6"
              >
                {message}
              </Text>
            </SlideFade>
          </VStack>
          <SlideFade delay={0.4} in={true} offsetY="20px">
            <Quotee name={name} jobTitle={jobTitle} imageSrc={imageSrc} />
          </SlideFade>
        </Stack>
      </Box>
    </Box>
  );
};

export default Testimonials;
