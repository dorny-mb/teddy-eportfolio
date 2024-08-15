import { Fade, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PUBLIC_ROUTES } from "../routes";
import { useAppContext } from "../../../../context/AppContext/index";

type LaptopProps = {};

const Laptop: React.FC<LaptopProps> = ({}) => {
  const router = useRouter();
  const { isDarkMode } = useAppContext();
  return (
    <Fade in={true}>
      <HStack
        spacing={6}
        fontWeight="semibold"
        ml={2}
        textTransform="uppercase"
        letterSpacing={0.1}
        fontSize={9}
      >
        {PUBLIC_ROUTES.map(({ title, path }) => {
          const active = router.pathname === path;

          return (
            <Text
              position="relative"
              _before={{
                content: '""',
                borderBottom: "1px solid",
                borderColor: "purple.300",
                position: "absolute",
                top: "130%",
                left: 0,
                transition: "width .3s ease-in-out 0s",
                width: 0,
                ...(active && {
                  width: "100%",
                }),
              }}
              _hover={{
                color: isDarkMode ? "purple.50" : "purple.900",
                _before: {
                  width: "100%",
                },
              }}
              color={
                active ? (isDarkMode ? "purple.200" : "purple.800") : undefined
              }
              key={path}
            >
              <Link href={path}>{title}</Link>
            </Text>
          );
        })}
      </HStack>
    </Fade>
  );
};

export default Laptop;
