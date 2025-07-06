import React from "react";
import theme from "../../theme";
import image1 from '../../assets/portfolioicon.png'
import image2 from '../../assets/ecommercewebsite.png'
import image3 from '../../assets/businesswebsite.webp'
import image4 from '../../assets/educationalportals.png'
import image5 from '../../assets/maintenance.png'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const handleClick=()=>{
    let message = `Hello`;
        const whatsappMessage = `https://api.whatsapp.com/send?phone=919390555433&text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappMessage, "_blank")
}
const Webdevservices = () => {
  const websitetypes = [
    {
      title: "Portfolio Websites",
      des: "Showcase your skills, projects, and achievements with a clean, professional design tailored to highlight your unique story.",
      button: "View Portfolio Examples",
      img:image1
    },

    {
      title: "E-commerce Websites",
      des: "Launch your online store with secure, user-friendly features that make browsing and purchasing seamless for your customers.",
      button: "Start Your Store",
      img:image2
    },

    {
      title: "Business Websites",
      des: "Build a strong online presence with a responsive, engaging site designed to grow your brand and connect with clients.",
      button: "Grow Your Business",
       img:image3
    },

    {
      title: "Educational Portals",
      des: "Create interactive platforms for students and educators with easy access to resources, assignments, and collaboration tools.",
      button: "Explore Education Solutions",
      img:image4
    },

     {
      title: "Maintenance and Support",
      des: "Keep your website secure and updated with our reliable maintenance services, so you can focus on your goals without technical worries.",
      button: "Get Support Now",
      img:image5
    },
  ];

  return (
    <>
      <Box
        maxW="1200px"
        w="100%"
        mx="auto"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        py={5}
      >
        <Box
          w="98%"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
            What We Build for You
          </Text>
          <Text
            fontSize={{ base: "0.8rem", md: "1.2rem" }}
            fontWeight={"500"}
            color={theme.colors.ten}
            mb={3}
          >
            Explore the Various Website Designs We Build for You
          </Text>
          <Grid w='98%'  templateColumns={{base:'repeat(2,1fr)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}} gap={{base :3,md:4,lg:6}} mt={5}>
          {websitetypes.map((type) => {
            return (

              <>
              <GridItem colSpan={'1'}>
                <Card
                  boxShadow={"md"}
                  p={{base:'8px',md:'30px'}}
                   h='100%'
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease-in-out",
                  }}
              
                >
                  <CardBody>
                    <HStack mb="6" gap="3">
                      <Box w={{base:'30px',md:'50px'}} h={{base:'30px',md:'50px'}} >
                        <Image
                          src={type.img}
                          w="100%"
                          h="100%"
                          objectFit={"cover"}
                          
                        />
                        <Box name="Nate Foss" />
                      </Box>
                      <Stack gap="0">
                        <Text fontWeight="semibold" textStyle="sm" fontSize={{base:'0.95rem'}}>
                          {type.title}
                        </Text>
                      </Stack>
                    </HStack>
                    <Text mt={{base:'-10px'}} fontSize={{base:'0.6rem',md:'1rem'}} textAlign={'justify'} h={{base:'auto',md:'100px'}}> {type.des}</Text>
                  </CardBody>
                  <CardFooter display={'flex'} justifyContent={'flex-start'} position={'relative'}>
                    
                    <Button
                      
                      color={{base:'black',md:'white'}}
                      mt={{ base: "10px", md: "20px", lg: "30px" }}
                      fontSize={{ base: "0.8rem" }}
                      bg={{base:'none',md:'#3b3b3b'}}
                      fontWeight={'500'}
                      w="max-content"
                      textAlign="center"
                       whiteSpace="normal"
                      p={{ base: "4px 12px" }}
                      borderRadius={{base:'none',md:'5px'}}
                      cursor={"pointer"}
                      _hover={{
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      border='1px solid #3b3b3b'
                      onClick={handleClick}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
                </GridItem>
              </>
            );
          })}
            </Grid>
            <Box></Box>
        </Box>
      
      </Box>
    </>
  );
};

export default Webdevservices;
