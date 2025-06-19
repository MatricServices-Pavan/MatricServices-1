import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloatingButton = () => (
  <Box
    position="fixed"
    bottom={{ base: "24px", md: "32px" }}
    right={{ base: "24px", md: "32px" }}
    zIndex={9999}
    bg="#25D366"
    color="white"
    borderRadius="100px"
    p="12px 20px"
    boxShadow="0 4px 24px rgba(0,0,0,0.18)"
    display="flex"
    alignItems="center"
    cursor="pointer"
    _hover={{ bg: "#1ebe57", boxShadow: "0 8px 32px rgba(0,0,0,0.22)" }}
    as="a"
    href="https://wa.me/919390555433"
    target="_blank"
    rel="noopener noreferrer"
  >
    <HStack spacing={2}>
      <FaWhatsapp fontSize="1.7rem" />
      <Text display={{ base: "none", md: "block" }} fontWeight="bold">
        Chat Now
      </Text>
    </HStack>
  </Box>
);

export default WhatsappFloatingButton;