import React from "react";
import theme from "../../theme";
import { Box, Image } from "@chakra-ui/react";
import image from "../../assets/webdevhero.png";
const Webdevhero = () => {
  return (
    <>
      <Box
        w="100%"
        h={{
          base: "30vh",
          sm: "30vh",
          md: "40vh",
          lg: "50vh",
          xl: "80vh",
        }}
        position={"relative"}
        fontFamily={theme.fonts.body}
        mx="auto"
      >
        
        <Box
          position="absolute"
          top="0px"
          w="100%"
          h="100%"
          objectFit={"cover"}
        >
          <Image w="100%" height={"100%"} src={image} />


        </Box>
      </Box>
    </>
  );
};

export default Webdevhero;
