import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Logo } from "..";
import { EMAIL_ADDRESS } from "../../constants";
import { useAppContext } from "../../context/AppContext";

import Menu from "./Menu";
import { useDynamicNav } from "../../hooks";

type NavProps = {};

const Nav: React.FC<NavProps> = ({}) => {
  const { isTabletOrMobile, isDarkMode } = useAppContext();
  const { toggleColorMode } = useColorMode();
  const { fixed, show } = useDynamicNav();

  return (
    <Box
      py={2}
      my={fixed ? 0 : 8}
      position={fixed ? "fixed" : "absolute"}
      w="100%"
      zIndex={294}
      left={0}
      bg={fixed ? (isDarkMode ? "gray.800" : "white") : "transparent"}
      transition="all .4s ease-in-out 0s"
      top={show ? 0 : -80}
    >
      <Container maxW="container.md">
        <Flex justify="space-between" align="center">
          <Flex
            align="center"
            justify="center"
            direction={isTabletOrMobile ? "row-reverse" : "row"}
          >
            <Logo />
            <Menu />
          </Flex>
          <HStack spacing={6}>
            <Icon
              as={isDarkMode ? FaSun : FaMoon}
              boxSize={2.5}
              cursor="pointer"
              onClick={toggleColorMode}
            />
            <Link href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
              <Button size="sm" fontSize="x-small" colorScheme="purple">
                Let&apos;s Talk
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
