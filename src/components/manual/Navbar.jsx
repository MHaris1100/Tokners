import { Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <Container>
      <Flex justifyContent="space-between" alignItems={"center"} minH="64px">
        <Flex color="white" minW="50%" justifyContent="space-between">
          <Image src={Logo} />
          <Flex
            alignItems="flex-end"
            gap={4}
            display={{ base: "none", md: "flex" }}
          >
            <Text>Our Team</Text>
            <Text>Tokens</Text>
            <Text>Contact Wallet</Text>
            <Text>LightPaper</Text>
          </Flex>
        </Flex>
        <Flex gap={4} display={{ base: "none", md: "flex" }}>
          <Button> Login</Button>
          <Button>SignUp</Button>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Navbar;
