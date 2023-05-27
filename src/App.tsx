import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  id: number;
  title: string;
}
const fetchProducts = (): Promise<Product[]> =>
  axios
    .get<Product[]>("https://fakestoreapi.com/products")
    .then((response) => response.data);

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        marginLeft="50%"
      ></Spinner>
    );

  if (error) return null;

  return (
    <div>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>{u.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
