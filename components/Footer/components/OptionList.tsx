import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../../../constants";
import { useAppContext } from "../../../context/AppContext";
import Logo from "../../Logo";
import { footerOptions } from "../data";
import Copyright from "./Copyright";
import Lister from "./Lister";
import Pair from "./Pair";

type OptionListProps = {};

const OptionList: React.FC<OptionListProps> = ({}) => {
  const { isTabletOrMobile } = useAppContext();

  return (
    <>
      <Flex direction={isTabletOrMobile ? "column" : "row"}>
        <Flex w="100%">
          <VStack spacing={4} alignItems="flex-start">
            <Logo />
            <Pair title="Tel" value={PHONE_NUMBER} />
            <Pair title="Email" value={EMAIL_ADDRESS} />
          </VStack>
        </Flex>

        <Flex mt={isTabletOrMobile ? 20 : 0} w="100%">
          <Lister data={footerOptions} />
        </Flex>
      </Flex>
      <Box mt={16}>
        <Copyright />
      </Box>
    </>
  );
};

export default OptionList;
