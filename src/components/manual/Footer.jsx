import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/Logo.svg";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Container justifyItems="center" mt={10} minH="50vh">
      <Heading>How to Buy</Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap="6"
        mb={5}
      >
        <GridItem>
          <Box p={5} borderRadius="20px" minH="250px" minW="300px" bg="#1c1c1c">
            <Flex>
              <Text>01</Text>
              <Text p={12}>
                First Connect your Metamask or TrustWallet to the "Connect
                Wallet" on the Homepage.
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          {" "}
          <Box p={5} borderRadius="20px" minH="250px" minW="300px" bg="#1c1c1c">
            <Flex>
              <Text>02</Text>
              <Text p={12}>
                Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale
                wallet
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          {" "}
          <Box p={5} borderRadius="20px" minH="250px" minW="300px" bg="#1c1c1c">
            <Flex>
              <Text>03</Text>
              <Text p={12}>
                Then after you will received your $WNTR to your address within
                24hours.
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Flex
        flexDirection="column"
        width="100%"
        mt={10}
        h="50vh"
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="flex-end"
          gap={10}
          display={{ base: "none", md: "flex" }}
        >
          <Text>Our Team</Text>
          <Text>/</Text>
          <Text>Tokens</Text>
          <Text>/</Text>
          <Text>Contact Wallet</Text>
          <Text>/</Text>
          <Text>LightPaper</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          width="100%"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Image src={Logo} />
          <Flex gap={4}>
            <SocialIcon bgColor="transparent" url="www.twitter.com" />
            <SocialIcon bgColor="transparent" url="www.youtube.com" />
            <SocialIcon bgColor="transparent" url="www.instagram.com" />
            <SocialIcon bgColor="transparent" url="www.telegram.com" />
            <SocialIcon bgColor="transparent" url="www.github.com" />
          </Flex>

          <Text>© 2021 Tokners. All rights reserved.</Text>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Footer;
