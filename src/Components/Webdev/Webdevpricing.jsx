import {
  Box,
  Button,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";

const handleClick=()=>{
    let message = `Hello! 👋\nThank you for contacting us `;
        const whatsappMessage = `https://api.whatsapp.com/send?phone=919390555433&text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappMessage, "_blank")
}

const Webdevpricing = () => {
  const pricingtable = [
    {
      id: 1,
      plan: "Basic Website",
      price: " ₹4,999",
      des: "Perfect for individuals looking to launch a simple and clean website to showcase basic information online",
      benefits: [
        "1-3 Static Pages(Home,contact,About)",
        "Mobile-Responsive Design",
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Month Maintenance Support",
      ],
      idealfor: "Individuals & Students",
    },
    {
      id: 2,
      plan: " Business Website",
      price: " ₹9,999",
      des: "Ideal for small businesses that need a professional and functional website with extra features.",
      benefits: [
        "Up to 6 Pages with Custom Design",
        "Responsive & Modern Layout",
        "Inquiry/Contact Forms",
        "SEO Optimized",
        "WhatsApp/Email Integration",
        "3 Months Maintenance Support",
      ],
      idealfor: "Startups, Freelancers, Consultants",
    },
    {
      id: 3,
      plan: "Ecommerce Website",
      price: " ₹14,999",
      des: "Best for brands needing a dynamic site with advanced features, optimization, are included",
      benefits: [
        "Dynamic Product Pages",
        "Cart & Checkout Functionality",
        "Payment Gateway Integration",
        "Admin Panel for Product Management",
        "Mobile Optimization",
        "6 Months Maintenance Support",
      ],
      idealfor: "Online Stores, Small Shops, Boutique Brands",
    },
  ];
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
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"} textAlign={'center'}>
            Transparent Pricing for Every Need
          </Text>
          <Text
            fontSize={{ base: "0.8rem", md: "1.2rem" }}
            fontWeight={"500"}
            color={theme.colors.ten}
            textAlign={'center'}
          >
            Simple, affordable, and scalable plans designed for all types of
            clients
          </Text>
          <Grid
            w={{base:'98%',md:'100%',lg:'95%',xl:'90%'}}
            gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" ,lg:'repeat(3,1fr)'}}
            gap={{base:'30px',md:'20px',lg:'40px',xl:'50px'}}
            mt={5}
          
            
          >
            {pricingtable.map((plan) => {
              return (
                <>
                  <GridItem colSpan={"1"} w='100%' display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <VStack
                      w={{base:'88%',md:'100%'}}
                      color={plan.id % 2 === 0 ? "black" : "white"}
                      bg={
                        plan.id % 2 === 0
                          ? theme.colors.thirty
                          : theme.colors.ten
                      }
                      p={{ base: "20px", md: "30px" }}
                      borderRadius={{base:'15%',md:'15%',lg:'15%'}}
                      textAlign={"center"}
                      gap={4}
                    >
                      <Text fontSize={{ base: "1.5rem", md: "1.5rem" }} >
                        {plan.plan}
                      </Text>
                      <Text fontSize={{ base: "2rem", md: "3rem" }} fontWeight={500}>
                        {plan.price}
                      </Text>
                      <Text fontSize={{base:'0.8rem',md:'1rem'}} fontWeight={450}>
                        {plan.des}
                      </Text>
                      <Box
                        color="white"
                        fontSize={{ base: "0.8rem" }}
                        bg="#3b3b3b"
                        w="60%"
                        textAlign="center"
                        whiteSpace="normal"
                        borderRadius="3xl"
                         p={{ base: "5px 15px", md: "10px 30px" }}
                        cursor={"pointer"}
                        _hover={{
                          transform: "scale(1.05)",
                          transition: "all 0.3s ease-in-out",
                        }}
                        onClick={handleClick}
                      >
                        Book Now
                      </Box>
                    </VStack>
                    <List spacing={2} p={{ base: "10px", md: "15px" }}>
                      {plan.benefits.map((benefit, index) => {
                        return (
                          <>
                            <ListItem key={index}>
                              <Text as="span" mr={2} color={theme.colors.ten}>
                                ➤
                              </Text>
                              {benefit}
                            </ListItem>
                          </>
                        );
                      })}
                    </List>
                  </GridItem>
                </>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Webdevpricing;
