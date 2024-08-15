import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Icon,
  List,
  ListItem,
  Fade,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import Logo from "../../../Logo";

import { PUBLIC_ROUTES } from "../routes";

type MobileProps = {};

const Mobile: React.FC<MobileProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Fade in={true}>
        <Icon
          cursor="pointer"
          boxSize={6}
          onClick={onOpen}
          as={VscMenu}
          mr={6}
        />
      </Fade>
      <Drawer onClose={onClose} placement="left" isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader py={2}>
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <List py={4} spacing={6}>
              {PUBLIC_ROUTES.map(({ title, path }, idx) => (
                <ListItem key={path + idx}>
                  <Link href={path}>{title}</Link>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Mobile;
