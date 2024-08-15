import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Fade,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import images from "../../theme/images";
import { useAppContext } from "../../context/AppContext/index";
import Link from "next/link";
import { LINKEDIN, INSTAGRAM, FACEBOOK, GITHUB } from "../../constants/index";
import styled from "@emotion/styled";
import { Icon } from "@chakra-ui/react";

const links = [
  {
    icon: FaLinkedinIn,
    path: LINKEDIN,
    colors: { dark: "linkedin.300", light: "linkedin.300" },
  },
  {
    icon: FaGithub,
    path: GITHUB,
    colors: { dark: "gray.300", light: "gray.900" },
  },
  {
    icon: FaFacebook,
    path: FACEBOOK,
    colors: { dark: "facebook.300", light: "facebook.300" },
  },
  {
    icon: FaInstagram,
    path: INSTAGRAM,
    colors: { dark: "pink.300", light: "pink.300" },
  },
];

const CustomeImage = styled(Image)`
  max-width: 18rem;
`;
type HeaderProps = { children: React.ReactNode };

const WrapperHeader: React.FC<HeaderProps> = ({ children }) => {
  const { isTabletOrMobile, isDarkMode } = useAppContext();

  return (
    <Box h="70vh" position="relative" w="100%">
      <Box
        bg={isDarkMode ? "gray.900" : "brand.50"}
        position="absolute"
        h="100%"
        w="97%"
        top={0}
        left={0}
        zIndex={-1}
        borderRadius="0 0 4rem 0"
      />

      <Container h="100%" maxW="container.md">
        <Flex direction="column" justify="center" h="100%">
          <HStack spacing={20}>
            <VStack alignItems="flex-start" spacing={10}>
              {children}
            </VStack>
            {!isTabletOrMobile && (
              <Fade in={true}>
                <CustomeImage
                  src={images.logoIcon}
                  alt="Dorny Muba Heading Logo"
                />
              </Fade>
            )}
          </HStack>
        </Flex>
      </Container>
      <Fade delay={0.8} in={true}>
        <Flex
          align="center"
          position="absolute"
          bottom="12%"
          left={0}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: isDarkMode ? "gray.800" : "gray.200",
            width: "100%",
          }}
          w="95%"
          justify="flex-end"
        >
          <HStack mx={8} color="gray.500" spacing={5}>
            {links.map(({ path, icon, colors }, idx) => (
              <Link target="_blank" key={idx + path} href={path}>
                <Icon
                  as={icon}
                  transition="all .4s ease-in-out 0s"
                  _hover={{
                    color: isDarkMode ? colors.dark : colors.light,
                    transform: "scale(1.2)",
                  }}
                />
              </Link>
            ))}
          </HStack>
        </Flex>
      </Fade>
    </Box>
  );
};

export default WrapperHeader;
