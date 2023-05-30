import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
// import ColorModeSwitch from './ColorModeSwitch';
// import SearchInput from './SearchInput';

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <HStack padding="20px" backgroundColor="#315350" spacing={10}>
      <Image src={logo} boxSize="70px" />
      <Input height="50px" width="500px" backgroundColor="white" />
    </HStack>
  );
};

export default NavBar;
