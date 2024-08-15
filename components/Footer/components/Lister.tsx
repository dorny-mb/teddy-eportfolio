import { VStack, Text, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { ListerDataType } from "../types";

type ListerProps = { data: ListerDataType[] };

const Lister: React.FC<ListerProps> = ({ data }) => (
  <>
    {data.map(({ title, items }, idx) => (
      <VStack alignItems="flex-start" spacing={8} flex={1} key={title + idx}>
        <Text
          color="gray.300"
          textTransform="uppercase"
          fontSize="x-small"
          fontWeight="semibold"
        >
          {title}
        </Text>
        <List fontSize="xs" spacing={3} color="gray.400">
          {items.map(({ title, path }, idx) => (
            <ListItem textTransform="capitalize" key={title + path + idx}>
              <Link href={path}>{title}</Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    ))}
  </>
);

export default Lister;
