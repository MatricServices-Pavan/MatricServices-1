import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import client1 from "../../assets/client1.jpeg";
import client2 from "../../assets/client2.jpeg";
import client3 from "../../assets/client3.jpeg";

const DigitalMarketingclients = () => {
  return (
    <Box
      maxW="1200px"
      w="100%"
      mx="auto"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 6 }}
      textAlign="center"
    >
      {/* Heading */}
      <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="700">
        Our Clients
      </Text>
      <Box
        w="80px"
        h="3px"
        bg={theme.colors.ten}
        borderRadius="20px"
        mx="auto"
        my={4}
      />

      {/* Responsive Client Logos */}
      <Wrap
        justify="center"
        spacing={{ base: 4, md: 10 }}
        mt={{ base: 6, md: 10 }}
      >
        {[client1, client2, client3].map((client, index) => (
          <WrapItem key={index}>
            <Box
              w={{ base: "120px", md: "160px" }}
              h={{ base: "120px", md: "160px" }}
              overflow="hidden"
              borderRadius="md"
              shadow="md"
            >
              <Image
                src={client}
                w="100%"
                h="100%"
                objectFit="cover"
                alt={`client-${index + 1}`}
              />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default DigitalMarketingclients;
