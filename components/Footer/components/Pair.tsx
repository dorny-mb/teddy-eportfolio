import { HStack, Text } from "@chakra-ui/react";

type PairProps = { title: string; value: string };
const Pair: React.FC<PairProps> = ({ title, value }) => (
  <HStack
    alignItems="flex-start"
    justifyContent="flex-start"
    color="gray.300"
    fontSize="xs"
    spacing={4}
  >
    <Text fontWeight="semibold">{title}:</Text> <Text>{value}</Text>
  </HStack>
);
export default Pair;
