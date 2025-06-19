import { Box, Simplegrid, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { MdCampaign, MdDevices, MdQuestionAnswer } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
const Homesec2 = () => {
  return (
    <Box
      maxW="1200px"
      w="95%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      fontFamily={theme.fonts.body}
      mx="auto"
      my={{ base: "3rem", md: "4rem", lg: "5rem" }}
    >
      <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
        Our Services
      </Text>
      <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>

      {/* Services */}
      <SimpleGrid columns={[1, 2, 3, 3]} mt={"2rem"} spacing={5}>

        {/* service1 */}

                <Box
          bg={theme.colors.thirty}
          p="30px 30px"
          height="auto"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          color="black"
          textAlign={"center"}
          gap="10px"
          _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-out" }}
        >
          <Box fontSize={"2.5rem"}>
            <MdDevices /> {/* Icon for both web and app development */}
          </Box>
          <Text fontSize="1.5rem" lineHeight="1" fontWeight={"400"}>
            Web & App Development
          </Text>
          <Text fontSize={"0.8rem"}>
            We craft high-performance websites and mobile applications tailored
            to your business needs—ensuring seamless user experiences across all
            platforms.
          </Text>
        </Box>


        {/* service2 */}
        <Box
          bg={theme.colors.ten}
          p="30px 30px"
          height="auto"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          color="white"
          textAlign={"center"}
          gap="10px"
          _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-out" }}
        >
          <Box fontSize={"2.5rem"}>
            <MdCampaign /> {/* Icon representing digital marketing */}
          </Box>
          <Text fontSize="1.5rem" lineHeight="1" fontWeight={"400"}>
            Digital Marketing
          </Text>
          <Text fontSize={"0.8rem"}>
            We help you grow your online presence through SEO, social media
            campaigns, and targeted strategies that drive traffic and increase
            conversions.
          </Text>
        </Box>

        {/* service3 */}

        <Box
          bg={theme.colors.ten}
          p="30px 30px"
          color="white"
          height="auto"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="10px"
          textAlign={"center"}
          _hover={{
            transform: "scale(1.05)",
            transition: "all 0.3s ease-out ",
          }}
        >
          <Box fontSize={"2rem"}>
            <FaTools />
          </Box>
          <Text fontSize="1.5rem" lineHeight="1" fontWeight={"400"}>
            Workshops
          </Text>
          <Text fontSize={"0.8rem"}>
            We organize expert-led workshops covering a wide range of
            technologies, customized to meet the specific requirements of
            educational institutions and organizations.
          </Text>
        </Box>

        {/* service4 */}

        <Box
          bg={theme.colors.thirty}
          p="30px 30px"
          height="auto"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          color="black"
          textAlign={"center"}
          gap="10px"
          _hover={{
            transform: "scale(1.05)",
            transition: "all 0.3s ease-out ",
          }}
        >
          <Box fontSize={"3rem"}>
            <HiOutlineAcademicCap />
          </Box>
          <Text fontSize="1.5rem" lineHeight="1" fontWeight={"400"}>
            Academic Projects
          </Text>

          <Text fontSize={"0.8rem"}>
            We provide end-to-end assistance with academic projects, offering
            both guided and done-for-you solutions tailored to the needs of
            students and educators.
          </Text>
        </Box>

        {/* service5 */}

        <Box
          bg={theme.colors.ten}
          p="30px 30px"
          height="auto"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          color="white"
          textAlign={"center"}
          gap="10px"
          _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-out" }}
        >
          <Box fontSize={"2.5rem"}>
            <MdQuestionAnswer />
          </Box>
          <Text fontSize="1.5rem" lineHeight="1" fontWeight={"400"}>
            Custom Solutions
          </Text>
          <Text fontSize={"0.8rem"}>
            We develop tailored hardware and software solutions to meet the
            specific demands of industries, helping businesses innovate and
            improve efficiency.
          </Text>
        </Box>

        {/* service6 */}

        <Box
          bg={theme.colors.thirty}
          p="30px 30px"
          color="black"
          height="auto"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
          gap="10px"
          _hover={{
            transform: "scale(1.05)",
            transition: "all 0.3s ease-out ",
          }}
        >
          <Box fontSize={"2.5rem"}>
            <FaHandsHelping />
          </Box>
          <Text fontSize="1.5rem" lineHeight="1" fontWeight={"400"}>
            Internship and Training
          </Text>
          <Text fontSize={"0.8rem"}>
            Join our Internship & Training programs to gain hands-on experience,
            industry-relevant skills, and real-world exposure. Work on live
            projects, receive expert mentorship, and take a step closer to your
            dream career.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Homesec2;
