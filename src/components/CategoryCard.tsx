import {
  Card,
  Spinner,
  HStack,
  Text,
  CardBody,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

const CategoryCard = () => {
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
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {data?.map((cat) => (
          <HStack key={cat}>
            <Card width={300} height={350}>
              <CardBody>
                <Image
                  src={"https://picsum.photos/300/250"}
                  alt={cat}
                  title={cat}
                />
                <Text height={90}>{cat}</Text>
              </CardBody>
            </Card>
          </HStack>
        ))}
      </SimpleGrid>
      ;
    </>
  );
};

export default CategoryCard;
