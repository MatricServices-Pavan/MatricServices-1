import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import theme from '../../theme'

const handleClick=()=>{
    let message = `Hello! 👋\nThank you for contacting us `;
        const whatsappMessage = `https://api.whatsapp.com/send?phone=919390555433&text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappMessage, "_blank")
}
const DigitalMarketingHero = () => {
  const headingFontSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "5xl",
    xl: "6xl",
  });

  const subTextFontSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "lg",
    lg: "xl",
  });

  return (
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
      gap={6}
    >
      <Text
        fontSize={headingFontSize}
        fontWeight="bold"
        lineHeight="short"
        color="gray.800"
      >
        Empowering Your Brand with Smart Digital Marketing Solutions
      </Text>

      <Text
        fontSize={subTextFontSize}
        color="gray.600"
        maxW={{ base: "90%", md: "80%", lg: "70%" }}
      >
        Unlock your business potential through SEO, Social Media, Content Marketing, and more tailored strategies that drive real results.
      </Text>

      <NavLink to="/">
        <Box
          mt={4}
          fontSize={{ base: "sm", md: "md" }}
          bg={theme.colors.ten}
          color="white"
          px={{ base: 6, md: 8 }}
          py={{ base: 2, md: 3 }}
          borderRadius="lg"
          fontWeight="semibold"
          cursor="pointer"
          _hover={{
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          }}
          onClick={handleClick}
        >
          Explore Our Services
        </Box>
      </NavLink>
    </Box>
  );
};

export default DigitalMarketingHero;
