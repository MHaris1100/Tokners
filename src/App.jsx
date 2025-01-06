import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  List,
  Span,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./components/manual/Navbar";
import Banner from "./assets/Banner.svg";
import Crown from "./assets/Crown.svg";
import Star from "./assets/Star.svg";
import Colored from "./assets/Colored.svg";
import one from "./assets/One.svg";
import two from "./assets/Two.svg";
import three from "./assets/Three.svg";
import holding from "./assets/Holding.svg";
import w from "./assets/W.svg";
import full from "./assets/Fullback.png";
import Footer from "./components/manual/Footer";
import SimpleSlider from "./components/manual/Slider";

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Navbar />
      <Flex alignItems="center" flexDirection={{ base: "column", md: "row" }}>
        <Box flex={2} justifyItems="end">
          {" "}
          <VStack
            gap={2}
            maxW="400px"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Heading fontSize={{ base: "xl", md: "3xl" }}>
              Reimagining social media through the power of the blockchain.
            </Heading>
            <Text fontSize={{ base: "sm", md: "lg" }}>
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non fungible
              Tokens that can be owned and traded on the Tknrs network
            </Text>
            <Button bg="green.400" borderRadius="20px" fontSize="md">
              Learn More
            </Button>
          </VStack>{" "}
        </Box>
        <Image flex={1} maxW={{ base: "100%", md: "65%" }} src={Banner} />
      </Flex>
      <Container>
        <Flex
          justifyContent="center"
          gap={4}
          minH={{ md: "50vh", lg: "60vh" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex flexDirection="column" justifyContent="flex-start">
            <Box p={8} bg="#171B29" borderRadius="30px" minH="350px" W="700px">
              <VStack alignItems="flex-start" maxW="600px">
                <Box
                  w="70px"
                  h="70px"
                  rounded="full"
                  bg="green.400"
                  justifyItems="center"
                  alignContent="center"
                >
                  <Image src={Crown} />
                </Box>
                <Heading fontSize={{ base: "lg", md: "2xl" }}>
                  For{" "}
                  <Span
                    color="green.400"
                    textDecoration="underline"
                    textDecorationColor="green.400"
                    textDecorationThickness="4px"
                  >
                    {" "}
                    Creators
                  </Span>
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }}>
                  Creators can gain independence through a decentralised digital
                  currency system that is dependent on growing and engaging with
                  the community and also their star power. They own 10-15% of
                  the total value of the tokens minted.
                </Text>
                <Link href="#" color="green.400">
                  Learn More
                </Link>
              </VStack>
            </Box>
          </Flex>
          <Flex flexDirection="column" justifyContent="flex-end">
            <Box
              bg="#171B29"
              borderRadius="30px"
              p={8}
              minH="350px"
              maxW="700px"
            >
              <VStack alignItems="flex-start" maxW="600px">
                <Box
                  w="70px"
                  h="70px"
                  rounded="full"
                  justifyItems="center"
                  alignContent="center"
                  bg="blue.400"
                >
                  <Image src={Star} />
                </Box>
                <Heading fontSize={{ base: "lg", md: "2xl" }}>
                  For{" "}
                  <Span
                    color="blue.400"
                    textDecoration="underline"
                    textDecorationColor="blue.400"
                    textDecorationThickness="4px"
                  >
                    Holders
                  </Span>
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }}>
                  Holding social tokens allows the individual to gain access to
                  benefits including unreleased content, private communities,
                  direct access to celebrity, early- access to tickets and more
                  as well as the ability to trade with other communities.
                </Text>
                <Link href="#" color="blue.400">
                  Learn More
                </Link>
              </VStack>
            </Box>
          </Flex>
        </Flex>
      </Container>

      <Flex w="100%" mt={10} flexDirection={{ base: "column", md: "row" }}>
        <Image src={Colored} flex={1} w={{ base: "100%", md: "50%" }} />
        <Box
          flex={1}
          p={8}
          bg="white"
          borderTopLeftRadius={{ base: "135px", md: "200px", lg: "300px" }}
          alignContent="center"
          justifyItems="center"
        >
          <VStack color="black" maxW="500px" gap={5}>
            <Heading textAlign="center" fontSize="3xl">
              What makes us different?
            </Heading>
            <Text fontSize="md">
              There are several thousand celebrities and creators on twitter,
              tiktok, Instagram and YouTube with followings in the millions who
              we would be actively engaging before we go viral. <br />
              <br />
              We would get them on our platform and they would see the
              opportunity to create a fan driven digital economy where their
              digital content can be traded as NFTs and their most loyal fans
              can have the monetary value of their creator`s currency increase
              significantly as they promote their digital currency across their
              channels while our native token holders benefit from the Weentar
              popularity.
            </Text>
          </VStack>
        </Box>
      </Flex>
      <Container>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap="6"
          p={8}
        >
          <VStack alignItems="flex-start">
            <HStack>
              <Image src={one} maxWidth="50%" />
              <Text>2021</Text>
            </HStack>
            <List.Root as="ol">
              <List.Item>
                Celebrity, Creator and Influencer partnerships
              </List.Item>
              <List.Item>
                Expansion of creator communities on our platform
              </List.Item>
              <List.Item>More Marketing and promotion </List.Item>
            </List.Root>
          </VStack>
          <VStack alignItems="flex-start">
            <HStack>
              <Image src={two} maxWidth="50%" />
              <Text>2021</Text>
            </HStack>
            <List.Root as="ol">
              <List.Item>
                Celebrity, Creator and Influencer partnerships
              </List.Item>
              <List.Item>
                Expansion of creator communities on our platform
              </List.Item>
              <List.Item>More Marketing and promotion </List.Item>
            </List.Root>
          </VStack>
          <VStack alignItems="flex-start">
            <HStack>
              <Image src={three} maxWidth="50%" />
              <Text>2021</Text>
            </HStack>
            <List.Root as="ol">
              <List.Item>
                Celebrity, Creator and Influencer partnerships
              </List.Item>
              <List.Item>
                Expansion of creator communities on our platform
              </List.Item>
              <List.Item>More Marketing and promotion </List.Item>
            </List.Root>
          </VStack>
          <VStack alignItems="flex-start">
            <HStack>
              <Image src={one} maxWidth="50%" />
              <Text>2021</Text>
            </HStack>
            <List.Root as="ol">
              <List.Item>
                Celebrity, Creator and Influencer partnerships
              </List.Item>
              <List.Item>
                Expansion of creator communities on our platform
              </List.Item>
              <List.Item>More Marketing and promotion </List.Item>
            </List.Root>
          </VStack>
        </Grid>
        <Flex mt={10} flexDirection={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "50%" }} justifyItems="center">
            <VStack gap={5} maxW={"500px"} alignItems="flex-start">
              <HStack>
                <Image src={w} />{" "}
                <Heading fontSize="3xl">Tokner is coming</Heading>
              </HStack>
              <Text fontSize="md">
                Cryptocurrency adoption is at less than 1% of the global world
                population with some countries and entities actively fighting
                against its mass adoption and the smartest developers and nerds
                holding the fort. Bitcoin was the first, and it has since grown
                to thousands of tokens launched all aiming to fix one problem or
                the other with some quite simply FOMOing the moment. Our goal is
                to bring mass adoption to the cryptocurrency space by dumbing it
                down. How far down? So down that even a celebrity can explain it
                in simple words to their followers and have them download an
                app, buy into the social currency of their favourite person and
                watch their investment as is with other crypto currency project.
                <br />
                <br />
                We are trying to do to this space what investment apps did for
                the "nonexistent retail investors". We are gamefying digital
                currency, bringing in popular faces instead of hard to
                understand projects to make it the norm and inadvertently being
                the "gateway drug" for a lot of people to finally give this
                space a real look.
                <br />
                <br />
                Well, Kanye didn't exactly say that, but it sounds like
                something we hope he would say. Currency is digital, it has been
                that way for a while now, but this time there would be no dead
                presidents on the money, there would people like you on the
                money, and you would own it because it would make the most sense
                in the world.
              </Text>
              <Button
                background="transparent"
                border="solid"
                borderColor="green.400"
                borderRadius="20px"
              >
                Read More
              </Button>
            </VStack>
          </Box>
          <Image
            src={holding}
            objectFit="contain"
            width={{ base: "100%", md: "50%" }}
          />
        </Flex>
      </Container>
      <Box
        backgroundImage={`url(${full})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h="100vh"
        width="100%"
      >
        <Container
          h="inherit"
          width="100%"
          alignContent="end"
          justifyItems="center"
        >
          <Heading>Presale Details</Heading>
          {isMobile ? (
            <SimpleSlider />
          ) : (
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
              gap="6"
              p={8}
              minH="50vh"
              width="100%"
            >
              <Box p={4}>
                {" "}
                <Box bgColor="white" color="black" p={12} borderRadius="20px">
                  <VStack gap={10}>
                    <Image src={one} />
                    <Heading>Phase One</Heading>
                    <VStack>
                      <Text>1 BNB = 100000 WNTR</Text>
                      <Text>Soft cap: 5000 BNB</Text>
                      <Text>Hard cap: 10000 BNB</Text>
                    </VStack>
                  </VStack>
                </Box>
              </Box>
              <Box p={4}>
                <Box bgColor="white" color="black" p={12} borderRadius="20px">
                  <VStack gap={10}>
                    <Image src={two} />
                    <Heading>Phase Two</Heading>
                    <VStack>
                      <Text>1 BNB = 100000 WNTR</Text>
                      <Text>Soft cap: 5000 BNB</Text>
                      <Text>Hard cap: 10000 BNB</Text>
                    </VStack>
                  </VStack>
                </Box>
              </Box>
              <Box p={4}>
                {" "}
                <Box bgColor="white" color="black" p={12} borderRadius="20px">
                  <VStack gap={10}>
                    <Image src={three} />
                    <Heading>Phase Three</Heading>
                    <VStack>
                      <Text>1 BNB = 100000 WNTR</Text>
                      <Text>Soft cap: 5000 BNB</Text>
                      <Text>Hard cap: 10000 BNB</Text>
                    </VStack>
                  </VStack>
                </Box>
              </Box>
            </Grid>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default App;
