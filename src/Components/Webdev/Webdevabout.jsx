import { Box, Image, Text,  } from "@chakra-ui/react";
import React from "react";
import image1 from "../../assets/webdevabout1.jpg";
import image2 from "../../assets/webdevabout2.jpeg";
import { NavLink } from "react-router-dom";
import theme from "../../theme";

const Webdevabout = () => {
  return (
    <>
      <Box
        maxW={"1200px"}
        w="100%"
        mx="auto"
        p='5'
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"} textAlign={'left'}>
         About the Service
        </Text>
       
        <Box
          w="95%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          mt={{base:'1',md:'none'}}
          gap="4%"
        
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "58%" }}
            display={"flex"}
            textAlign={"justify"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            gap="1%"
          >
            At Matric Services, our Web and App Development services are crafted
            to empower students, startups, educators, and small businesses with
            cutting-edge digital platforms.Whether you need a personal
            portfolio, a college project portal, a startup landing page, or a
            full-scale business application, we offer solutions that are fast,
            responsive, scalable, and easy to manage.
            <br />
            We understand the unique needs of each client from academic
            innovation to entrepreneurial vision and build applications that
            are customized, performance-driven, and user-focused. Backed by
            modern technologies and intuitive UI/UX, we ensure that your web or
            mobile app isn't just functional, but also visually engaging and
            future-ready.
            <Box>
              {" "}
              <NavLink to="/">
                <Box
                  color="white"
                  mt={{ base: "10px", md: "20px", lg: "30px" }}
                  fontSize={{ base: "0.8rem", md: "1rem" }}
                  bg="#3b3b3b"
                  w="max-content"
                  p={{ base: "5px 15px", md: "10px 30px" }}
                  borderRadius={{ base: "5px", md: "10px", lg: "15px" }}
                  cursor={"pointer"}
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  Get Started Today
                </Box>
              </NavLink>
            </Box>
          </Box>

        <Box
  flex="1"
  maxW="500px"
  h="350px"
  display={{ base: "none", lg: "flex" }}
  justifyContent="center"
  alignItems="center"
  mx="auto"
>
  <Box position="relative" w="100%" h="100%">
    <Box
      position="absolute"
      top="10"
      left="0"
      w="200px"
      h="200px"
      zIndex={23}
      borderRadius="50%"
      cursor="pointer"
      border="5px solid white"
      _hover={{
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
        border:'0'
      }}
    >
      <Image
        src={image1}
        w="100%"
        h="100%"
        objectFit="cover"
        borderRadius="50%"
      />
    </Box>
    <Box
      position="absolute"
      top="5"
      right="10%"
      w="250px"
      h="250px"
      borderRadius="50%"
       border="5px solid white"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
        zIndex: "25",
        border:'0'
      }}
    >
      <Image
        src={image2}
        w="100%"
        h="100%"
        objectFit="cover"
        borderRadius="50%"
      />
    </Box>
  </Box>
</Box>

        </Box>
      </Box>
    </>
  );
};

export default Webdevabout;
