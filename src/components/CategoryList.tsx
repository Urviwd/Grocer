import {
  Box,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
function CategoryList() {
  const { data, isLoading, error } = useCategories();
  const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

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
                padding={5}
                color="#315350"
                fontSize={"xs"}
                fontWeight="semibold"
                fontFamily={"sofia-pro, sans-serif"}
              >
                {capitalizeFirst(cat)}
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
