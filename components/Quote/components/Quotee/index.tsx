import { Box, BoxProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";
import { APP_NAME } from "../../../../constants";
import styled from "@emotion/styled";

const CustomImage = styled(Image)`
  margin: 0 auto;
  objectfit: cover;
  width: 4.5rem;
  heigth: 4.5rem;
  border-radius: 50%;
`;

interface Props extends BoxProps {
  name: string;
  jobTitle: string;
  imageSrc: string;
}

const Quotee = (props: Props) => {
  const { name, jobTitle, imageSrc, ...boxProps } = props;
  return (
    <Box {...boxProps}>
      <CustomImage src={imageSrc} alt={`${APP_NAME} profile`} />
      <Box textAlign="center" mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default Quotee;
