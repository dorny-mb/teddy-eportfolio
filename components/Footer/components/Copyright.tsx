import moment from "moment";
import React from "react";
import { Text } from "@chakra-ui/react";
import { APP_NAME } from "../../../constants/index";

type CopyrightProps = {};

const Copyright: React.FC<CopyrightProps> = ({}) => {
  const date = moment().format("YYYY");
  return (
    <Text fontSize="x-small" color="gray.500">
      {date} &#169; {APP_NAME}. All rights reserved
    </Text>
  );
};

export default Copyright;
