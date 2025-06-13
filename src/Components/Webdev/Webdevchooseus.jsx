import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import image1 from "../../assets/webdevchoose1.jpg";
import image2 from "../../assets/webdevchoose2.webp";
import image3 from "../../assets/webdevchoose3.png";

const points = [
  {
    reason: "User-Centered Design",
    des: "We prioritize your users’ journey with clean, intuitive interfaces that boost engagement and satisfaction. Every design is made to simplify navigation and enhance usability.",
    img: image1,
  },
  {
    reason: "Responsive & Scalable",
    des: "Our designs adapt seamlessly across all devices—mobiles, tablets, or desktops. Plus, they’re built to scale as your business or project grows.",
    img: image2,
  },
  {
    reason: "Built with Modern Tools",
    des: "We leverage the latest technologies and frameworks to ensure your website or app is fast, secure, and future-ready.",
    img: image3,
  },
];
const Webdevchooseus = () => {
  return (
    <>
      <Box
        maxW={"1200px"}
        w="100%"
        py="5"
        mx="auto"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          w="98%"
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
        >
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
            Why choose us?
          </Text>
          <Text
            fontSize={{ base: "0.8rem", md: "1.2rem" }}
            fontWeight={"500"}
            color={theme.colors.ten}
          >
            Pixel-perfect designs backed by robust development.
          </Text>
          <Box
            w="98%"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={5}
            flexDirection="column"
            gap={{ base: "20px", md: "10px" }}
          >
            {points.map((point) => {
              return (
                <>
                  <Box
                    w="100%"
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={"center"}
                    alignItems={'center'}
                  >
                    <Box
                      w={{ base: "100%", md: "30%" }}
                      h="150px"
                      position="relative"
                    >
                      <Image
                        src={point.img}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
                    </Box>
                      
                    <Box
                      w={{ base: "100%", md: "50%" }}
                       p={{ base: "none", md: "10px", lg: "15px" }}
                      h="auto"
                      display={"flex"}
                      justifyContent={"flex-start"}
                      flexDirection={"column"}
                    
                    >
                      <Text
                        fontWeight={500}
                        fontSize={{ base: "1.2rem", md: "1.5rem" }}
                      >
                        {point.reason}
                      </Text>
                      <Box as="hr" w="100%" h="0.02rem" bg="gray" />
                      <Text w="95%" fontSize={{ base: "0.8rem", lg: "1rem" }} mt='10px'>
                        {point.des}
                      </Text>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Webdevchooseus;
