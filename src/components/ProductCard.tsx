import {
  Card,
  Image,
  Button,
  Spinner,
  VStack,
  HStack,
  Text,
  CardBody,
  SimpleGrid,
  Icon,
  Stack,
  Box,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import useProducts from "../hooks/useProducts";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = () => {
  const { data, isLoading, error } = useProducts();

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
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
        spacing={6}
        marginTop="20px"
        marginLeft="50px"
        marginRight="50px"
      >
        {data?.map((product) => (
          <HStack key={product.id}>
            <Card width={250} height={400}>
              <CardBody padding={3}>
                <Box
                  float="right"
                  boxSize="6"
                  bgColor="#ebebed"
                  borderRadius={50}
                >
                  <VStack>
                    <Icon
                      boxSize="5"
                      as={AiOutlineHeart}
                      marginTop={0.5}
                      cursor={"pointer"}
                    />
                  </VStack>
                </Box>
                <VStack>
                  <Image
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                    height={200}
                    backgroundColor="#5d48b0"
                  />
                </VStack>
                <Stack>
                  <Text
                    height={1}
                    marginBottom={2}
                    marginTop={2}
                    fontSize=".6em"
                    fontWeight="bold"
                  >
                    {product.category}
                  </Text>
                  <Text
                    height="55px"
                    fontSize="xs"
                    overflow={"hidden"}
                    title={product.title}
                    cursor={"pointer"}
                  >
                    {product.title}
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize="lg" color="#315350">
                    ${product.price}
                  </Text>
                </Stack>
                <HStack spacing={0}>
                  <Button
                    width={230}
                    height={10}
                    color="#315350"
                    fontSize="xs"
                    backgroundColor="#efefef"
                    fontWeight="bold"
                  >
                    <Icon boxSize="5" as={BsBoxSeam} marginRight={1} />
                    Add
                  </Button>
                  <Button height={10} width={3} backgroundColor="#e6e5ea">
                    <AddIcon boxSize={3} color="#315350" />
                  </Button>
                </HStack>
              </CardBody>
            </Card>
          </HStack>
        ))}
      </SimpleGrid>
      ;
    </>
  );
};

export default ProductCard;
