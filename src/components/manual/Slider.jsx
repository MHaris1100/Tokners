import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import one from "../../assets/One.svg";
import two from "../../assets/Two.svg";
import three from "../../assets/Three.svg";

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <Box p={4}>
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
      </Box>
      <Box p={4}>
        <Box
          bgColor="white"
          color="black"
          p={12}
          borderRadius="20px"
          minW="300px"
        >
          <VStack gap={10}>
            <Image src={two} />
            <Heading>Phase Two</Heading>
            <VStack>
              <Text>1 BNB = 80000 WNTR</Text>
              <Text>Soft cap: 3000 BNB</Text>
              <Text>Hard cap: 8000 BNB</Text>
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box p={4}>
        <Box
          bgColor="white"
          color="black"
          p={12}
          borderRadius="20px"
          minW="300px"
        >
          <VStack gap={10}>
            <Image src={three} />
            <Heading>Phase Three</Heading>
            <VStack>
              <Text>1 BNB = 50000 WNTR</Text>
              <Text>Soft cap: 2000 BNB</Text>
              <Text>Hard cap: 6000 BNB</Text>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Slider>
  );
};

export default SimpleSlider;
