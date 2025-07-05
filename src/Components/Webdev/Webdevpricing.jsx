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

const handleClick = () => {
  let message = `Hello! 👋\nThank you for contacting us `;
  const whatsappMessage = `https://api.whatsapp.com/send?phone=919390555433&text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappMessage, "_blank");
};

const Webdevpricing = () => {
  const pricingtable = [
    {
      id: 1,
      plan: "Basic Website",
      price: " ₹4,999",
      des: "Perfect for individuals looking to launch a simple and clean website.",
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
      des: "Ideal for small businesses that need a professional and functional features.",
      benefits: [
        "Up to 6 Pages with Custom Design",
        "Responsive & Modern Layout,WhatsApp/Email Integration",
        "Inquiry/Contact Forms",
        "SEO Optimized",
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
  maxW="1200px"
  w="100%"
  py="5"
  mx="auto"
  display="flex"
  flexDirection="column"
  alignItems="center"
>
  {/* Section heading */}
  <Text
    fontSize={{ base: "1.5rem", md: "2rem" }}
    fontWeight="700"
    textAlign="center"
    mb="2"
  >
    Transparent Pricing for Every Need
  </Text>
  <Text
    fontSize={{ base: "0.85rem", md: "1.1rem" }}
    fontWeight="400"
    color={theme.colors.ten}
    textAlign="center"
    mb="6"
    maxW="600px"
  >
    Simple, affordable, and scalable plans designed for individuals, small businesses, and growing brands.
  </Text>

  {/* Grid: first row with 3 plans */}
  <Grid
  w={{ base: "90%", md: "95%", xl: "90%" }}
  gridTemplateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
  gap={{ base: "20px", md: "25px", lg: "30px" }}
>
  {pricingtable.map((plan) => (
    <GridItem key={plan.id}>
      <Box
        bg={plan.id % 2 === 0 ? theme.colors.thirty : theme.colors.ten}
        color={plan.id % 2 === 0 ? "black" : "white"}
        borderRadius="md"
        p={{ base: "20px", md: "24px" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        textAlign="center"
        h="100%" 
        minH={{ base: "350px", md: "350px" }} // force same height
        _hover={{ transform: "translateY(-4px)", transition: "0.3s ease-in-out" }}
      >
        {/* Top */}
        <Box>
          <Text fontSize={{ base: "1.4rem", md: "1.6rem" }} fontWeight="600" mb="2">
            {plan.plan}
          </Text>
          <Text fontSize={{ base: "2rem", md: "2.2rem" }} fontWeight="700" mb="2">
            {plan.price}
          </Text>
          
        </Box>

        {/* Middle */}
        <List
          mt={'4'}
          spacing={2}
          textAlign="left"
          flexGrow={1}  // benefits section takes available space
          fontSize={{ base: "0.8rem", md: "0.9rem" }}
          mb="4"
        >
          {plan.benefits.map((benefit, idx) => (
            <ListItem key={idx} display="flex" alignItems="flex-start">
              <Text as="span" mr={2} fontWeight="500">➤</Text>
              {benefit}
            </ListItem>
          ))}
        </List>

        {/* Bottom */}
        <Box
          as="button"
          bg="#3b3b3b"
          color="white"
          fontSize={{ base: "0.8rem" }}
          borderRadius="md"
          p={{ base: "6px 15px", md: "8px 20px" }}
          fontWeight="500"
          cursor="pointer"
          _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-in-out" }}
          onClick={handleClick}
        >
          Book Now
        </Box>
      </Box>
    </GridItem>
  ))}
</Grid>


  {/* Custom website card */}
  <Box
    mt={{ base: "25px", md: "35px" }}
    w={{ base: "98%", md: "95%", xl: "90%" }}
    borderRadius="md"
    p={{ base: "20px", md: "30px", lg: "40px" }}
    textAlign={{ base: "center", md: "left" }}
    display="flex"
    flexDirection={{ base: "column", md: "row" }}
    alignItems="center"
    justifyContent="space-between"
    boxShadow="md"
    _hover={{ boxShadow: "md", transform: "translateY(-4px)", transition: "0.3s ease-in-out" }}
  >
    <Box mb={{ base: "20px", md: "0" }} maxW={{ md: "50%" }}>
      <Text fontSize={{ base: "1.8rem", md: "2rem" }} fontWeight="700" mb="2">
        Need a Custom Website?
      </Text>
      <Text fontSize={{ base: "0.9rem", md: "1rem" }} fontWeight="400" mb="4" lineHeight="1.6">
        Tailored design & features built for your unique brand, complex functionality, integrations, and future growth.
      </Text>
      <Box
        as="button"
        bg={theme.colors.ten}
        color='white'
        fontSize={{ base: "0.8rem" }}
        borderRadius="full"
        p={{ base: "6px 15px", md: "8px 20px" }}
        fontWeight="500"
        cursor="pointer"
        _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-in-out" }}
        onClick={handleClick}
      >
        Contact Us for Custom Quote
      </Box>
    </Box>

    <List spacing={2} fontSize={{ base: "0.8rem", md: "0.9rem" }} textAlign="left" maxW={{ md: "45%" }}>
      {[
        "Completely Custom Design & Functionality",
        "Advanced Integrations & APIs",
        "Custom CMS or Backend",
        "SEO & Performance Optimization",
        "Dedicated Support & Maintenance",
        "Scalable for Future Growth",
      ].map((item, idx) => (
        <ListItem key={idx} display="flex" alignItems="flex-start">
          <Text as="span" mr={2} fontWeight="500">➤</Text>
          {item}
        </ListItem>
      ))}
    </List>
  </Box>
</Box>

    </>
  );
};

export default Webdevpricing;
