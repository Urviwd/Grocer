import {
  Box,
  Flex,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
function CategoryList() {
  const { data, isLoading, error } = useCategories();

  if (error) return null;

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        marginLeft="50%"
        marginTop="20%"
      ></Spinner>
    );
  return (
    <SimpleGrid height={"70px"} bgColor={"#ebebed"}>
      <HStack margin={1}>
        <List>
          <HStack>
            {data?.map((cat) => (
              <ListItem
                height={"60px"}
                borderRight={"1px"}
                borderColor={"gray.400"}
                key={cat}
                padding={4}
              >
                {cat}
              </ListItem>
            ))}
          </HStack>
        </List>
        <Box paddingLeft="50%">Account</Box>
      </HStack>
    </SimpleGrid>
  );
}

export default CategoryList;
