import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";

const whyChooseUs = [
  {
    title: "Data-Driven Strategies",
    description:
      "We base every campaign on in-depth analytics, market research, and performance metrics to ensure you get the best possible outcomes.",
    icon: "📊",
  },
  {
    title: "Certified Professionals",
    description:
      "Our team includes certified experts in Google Ads, Meta marketing, SEO, and more to ensure your campaigns are handled with precision.",
    icon: "🎓",
  },
  {
    title: "Transparent Reporting",
    description:
      "We provide detailed insights and real-time tracking so you always know how your campaigns are performing — no guesswork involved.",
    icon: "📈",
  },

];

const DigitalMarketingchooseus = () => {
  return (
    <>
      <Box w="100%">
        <Box
          maxW="1200px"
          w="100%"
          mx="auto"
          py={{ base: 8, md: 16 }}
          px={{ base: 4, md: 6 }}
          display="flex"
          flexDirection="column"
       
        >
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
            Digital Marketing, Done Right
          </Text>
         
          <Grid
            w="100%"
            h={{base:'auto',md:'300px'}}
            gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
            gap={6}
            mt='100px'
          >
            {whyChooseUs.map((point, index) => {
              return (
                <GridItem
                  key={index}
                  display="flex"
                  alignItems="center"
                  colSpan={1}
                >
                  <Box
                    position="relative"
                    w="70px"
                    h="70px"
                    borderRadius="50%"
                    border='2px solid black'
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    zIndex={2}
                  >
                    {point.icon}
                  
                    <Box
                      position="absolute"
                      w="300px"
                      h="300px"
                      bg={theme.colors.thirty}
                      borderRadius="50%"
                      left='75%'
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      flexDirection={'column'}
                      textAlign={'center'}
                      wordBreak={'true'}
                      px='20px'
                      zIndex={1}
                      gap={6}
                    >
                        <Text fontSize={'xl'} fontWeight={500}>{point.title}</Text>
                         <Text fontSize={'0.8rem'}>{point.description}</Text>

                    </Box>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default DigitalMarketingchooseus;
