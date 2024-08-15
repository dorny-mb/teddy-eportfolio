import { HStack, StackProps, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import images from "../../theme/images";
import { APP_NAME } from "../../constants";
import Link from "next/link";

const Name = styled(Text)`
  font-family: "Poiret One", cursive;
  font-weight: 900;
`;
const CustomImage = styled(Image)`
  object-fit: cover;
`;
type LogoProps = {} & StackProps;

const Logo: React.FC<LogoProps> = ({ ...rest }) => {
  return (
    <Link href="/">
      <HStack w={40} {...rest}>
        <CustomImage
          src={images.logoIcon}
          width={30}
          alt="Dorny Muba Logo Icon"
        />
        <Name flex={1}>{APP_NAME}</Name>
      </HStack>
    </Link>
  );
};

export default Logo;
