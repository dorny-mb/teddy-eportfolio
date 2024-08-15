import {
  GridProps,
  HStack,
  Icon,
  SimpleGrid,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";

type IconGridProps = {
  icons: { icon: IconType; name: string }[];
} & GridProps;

const IconGrid: React.FC<IconGridProps> = ({ icons, ...rest }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SimpleGrid
      mt={20}
      alignContent="center"
      justifyItems="center"
      gap={10}
      columns={[2, 4]}
      h="30vh"
      {...rest}
    >
      {icons?.map(({ icon, name }, idx) => (
        <SlideFade
          key={idx}
          ref={ref}
          delay={idx / 10}
          in={inView}
          offsetY="20px"
        >
          <HStack cursor="pointer">
            <Icon color="gray.300" boxSize={[5, 10]} as={icon} />
            <Text fontWeight="semibold" fontSize="xs">
              {name}
            </Text>
          </HStack>
        </SlideFade>
      ))}
    </SimpleGrid>
  );
};

export default IconGrid;
