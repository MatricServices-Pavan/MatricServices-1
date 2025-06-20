import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import client1 from "../../assets/client1.jpeg";
import client2 from "../../assets/client2.jpeg";
import client3 from "../../assets/client3.jpeg";

const DigitalMarketingClients = () => {
  const clients = [client1, client2, client3, client1, client2, client3];
  // Duplicate the array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <Box
      maxW="1200px"
      w="100%"
      mx="auto"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 6 }}
      textAlign="center"
      overflow="hidden"
    >
      {/* Heading */}
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="gray.800"
        mb={4}
      >
        Our Valued Clients
      </Text>
      <Box
        w="80px"
        h="4px"
        bg={theme.colors.ten}
        borderRadius="full"
        mx="auto"
        mb={8}
      />

      {/* Scrolling Client Logos */}
      <Box
        position="relative"
        overflow="hidden"
        w="100%"
        sx={{
          "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" }, 
          },
        }}
      >
        <Wrap
          direction="row"
          spacing={0}
          display="flex"
          w="max-content" 
          animation="scroll 40s linear infinite" 
          sx={{
            "&:hover": {
              animationPlayState: "paused", 
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <WrapItem key={index} flexShrink={0}>
              <Box
                w={{ base: "100px", md: "140px", lg: "160px" }}
                h={{ base: "100px", md: "140px", lg: "160px" }}
                m={{ base: 2, md: 4 }}
                borderRadius="lg"
                overflow="hidden"
                shadow="lg"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  shadow: "xl",
                }}
              >
                <Image
                  src={client}
                  alt={`client-${(index % clients.length) + 1}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy" 
                />
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};

export default DigitalMarketingClients;