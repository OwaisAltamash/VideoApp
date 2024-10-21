import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/pc2.jpg";
import img2 from "../assets/pc7.jpg";
import img3 from "../assets/pc3.jpg";
import img4 from "../assets/pc4.jpg";
import img5 from "../assets/dc.png";

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"

}

const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
            <Heading textTransform={"uppercase"}
             py="2"
             w={"fit-content"}
             borderBottom={"2px"}
             m={"auto"}
            > 
             Services
            </Heading>

            <Stack
              h={"full"}
              p={"4"}
              alignItems={"center"}
              direction={["column", "row"]}
            >

              <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />

              <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                Welcome to the ultimate destination for gaming services. Unleash your full gaming potential with our comprehensive range of offerings. Whether you're seeking top-tier coaching, dynamic multiplayer matchups, or a platform to connect with fellow gamers, we deliver it all. Our dedicated team of experts is here to amplify your skills and take your gaming journey to new heights. Join us in forging unforgettable gaming moments and be part of a vibrant community. Elevate your gameplay, forge new alliances, and conquer virtual worlds with us. our platform offers a rich array of offerings tailored to your gaming needs. Elevate your gameplay with personalized coaching from seasoned experts, ensuring you stay ahead of the curve. Dive into electrifying multiplayer matchups that guarantee adrenaline-pumping action.</Text>
            </Stack>
        </Container>
    </Box>
  )
};

const MyCarousel = () => (
    <Carousel
      autoPlay infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >

      <Box w={"full"} h={"100vh"}>
        <Image src={img3} h="full" w="full" objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}> Watch The Future </Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img4} h="full" w="full" objectFit={"cover"} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}> Future is Gaming</Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img1} h="full" w="full" objectFit={"cover"} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}> Gaming is Console</Heading>
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img2} h="full" w="50%" objectFit={"cover"} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Game on, world off</Heading>
      </Box>

    </Carousel>
)

export default Home;