import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import CategoryList from "./components/CategoryList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "menu" "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="menu">
        <CategoryList />
      </GridItem>
      <GridItem area="main">
        <ProductCard />
      </GridItem>
    </Grid>
  );
}

export default App;
