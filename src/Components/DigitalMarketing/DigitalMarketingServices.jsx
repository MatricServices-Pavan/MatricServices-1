import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import {
  FaFacebookF,
  FaSearch,
  FaGoogle,
  FaPenNib,
  FaEnvelopeOpenText,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";
import { isAxiosError } from "axios";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Boost brand awareness and engagement with tailored content and strategies for platforms like Instagram, Facebook, and LinkedIn.",
    icon: FaFacebookF,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your website’s visibility on search engines with on-page and off-page SEO techniques that drive organic traffic.",
    icon: FaSearch,
  },
  {
    title: "Paid Ads (Google & Meta)",
    description:
      "Maximize reach and conversions with data-driven ad campaigns across Google Ads and Meta platforms.",
    icon: FaGoogle,
  },
  {
    title: "Content Marketing",
    description:
      "Create and distribute valuable content to attract, engage, and convert your ideal customers across blogs, videos, and more.",
    icon: FaPenNib,
  },
  {
    title: "Email Campaigns",
    description:
      "Build lasting relationships and improve customer retention through personalized and automated email campaigns.",
    icon: FaEnvelopeOpenText,
  },
  {
    title: "Influencer Marketing",
    description:
      "Partner with relevant influencers to amplify your brand's voice and reach niche audiences with authenticity.",
    icon: FaUserFriends,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track performance, understand user behavior, and make informed decisions with detailed marketing analytics.",
    icon: FaChartLine,
  },
];

const DigitalMarketingServices = () => {
  return (
    <>
      <Box w='100%'  bg={theme.colors.thirty} >
      <Box
        maxW="1200px"
        w="100%"
        mx="auto"
        py={{ base: 8, md: 16 }}
        px={{ base: 4, md: 6 }}
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
       
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Our Services
        </Text>
        <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>
        <Grid
          mt={6}
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)"}}
          gap={5}
     
        >
          {services.map((service,index) => {
           
            return (
              <>
                <Box
               
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  key={index}
                  colspan={1}
                  p="10px"
                  bg='white'
                   _hover={{
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                  }}
               
                  
                >
                  <Box w='50px' h='50px' display='flex' alignItems={'center'} justifyContent={'center'}  fontSize={'1.5rem'} color={theme.colors.ten}><service.icon/></Box>
                  <Box p={4} flex="1">
                    <Stack spacing={2}>
                      <Text fontWeight="bold" fontSize="lg">
                        {service.title}
                      </Text>
                      <Text fontSize="sm">{service.description}</Text>
                    </Stack>
                  </Box>
                </Box>
              </>
            );
          })}
        </Grid>
      </Box>
      </Box>
    </>
  );
};

export default DigitalMarketingServices;
