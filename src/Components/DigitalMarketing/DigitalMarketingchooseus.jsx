import { Box, Flex, Text, UnorderedList, ListItem, theme } from "@chakra-ui/react";
import React from "react";

const whyChooseUsPoints = [
  "Data-Driven Strategies: Every decision we make is backed by data analytics, industry trends, and user behavior insights to deliver measurable success.",
  "Certified Professionals: Our team consists of Google Ads, Meta (Facebook), and SEO-certified experts who bring technical excellence to every project.",
  "Transparent Reporting: You’ll receive easy-to-understand, real-time performance reports to track your return on investment.",
  "Customized Campaigns: We don’t believe in one-size-fits-all. Our strategies are tailored specifically to your business goals and target audience.",
  "End-to-End Support: From consultation to campaign execution and beyond, we stay with you at every stage of the marketing journey.",
];

const DigitalMarketingChooseUs = () => {
  return (
    <Box w="100%" bg="gray.50" py={{ base: 10, md: 20 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        px={{ base: 4, md: 8 }}
        gap={{ base: 10, md: 16 }}
        align="flex-start"
      >
        {/* Left Side – Title and Intro Paragraph */}
        <Box flex="1" bg={theme.colors.ten} color='black'>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            mb={4}
          >
            Why Choose Us
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}  mb={4}>
            In today's competitive digital space, choosing the right marketing partner
            can make or break your business growth. We combine creativity, technology,
            and data to provide tailored digital solutions that actually work.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} >
            Whether you're a startup or a well-established brand, our mission is to
            help you achieve sustained visibility, engagement, and results across
            every digital platform.
          </Text>
        </Box>

        {/* Right Side – Key Benefits List */}
        <Box flex="1">
          <UnorderedList
            spacing={5}
            fontSize={{ base: "md", md: "lg" }}
            color="gray.800"
            pl={4}
          >
            {whyChooseUsPoints.map((point, index) => (
              <ListItem key={index}>{point}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};

export default DigitalMarketingChooseUs;
