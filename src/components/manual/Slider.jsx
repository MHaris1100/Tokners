import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import one from "../../assets/One.svg";
import two from "../../assets/Two.svg";
import three from "../../assets/Three.svg";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Slider {...settings}>
        <Box
          bgColor="white"
          color="black"
          p={12}
          borderRadius="20px"
          minW="300px"
        >
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
        <Box
          bgColor="white"
          color="black"
          p={12}
          borderRadius="20px"
          minW="300px"
        >
          <VStack gap={10}>
            <Image src={two} />
            <Heading>Phase One</Heading>
            <VStack>
              <Text>1 BNB = 100000 WNTR</Text>
              <Text>Soft cap: 5000 BNB</Text>
              <Text>Hard cap: 10000 BNB</Text>
            </VStack>
          </VStack>
        </Box>
        <Box
          bgColor="white"
          color="black"
          p={12}
          borderRadius="20px"
          minW="300px"
        >
          <VStack gap={10}>
            <Image src={three} />
            <Heading>Phase One</Heading>
            <VStack>
              <Text>1 BNB = 100000 WNTR</Text>
              <Text>Soft cap: 5000 BNB</Text>
              <Text>Hard cap: 10000 BNB</Text>
            </VStack>
          </VStack>
        </Box>
      </Slider>
    </Container>
  );
}

export default SimpleSlider;
