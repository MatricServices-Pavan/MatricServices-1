import { Box, Text, SimpleGrid, VStack, HStack, Icon} from '@chakra-ui/react'
import { keyframes } from '@emotion/react';
import React from 'react'
import theme from '../../theme'

// Animation keyframes
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const iconFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(5deg);
  }
`

// Custom Icons (using CSS shapes)
const MobileIcon = () => (
  <Box
    w="40px"
    h="60px"
    bg={theme.colors.ten}
    borderRadius="8px"
    position="relative"
    animation={`${iconFloat} 3s ease-in-out infinite`}
    _before={{
      content: '""',
      position: "absolute",
      top: "8px",
      left: "8px",
      right: "8px",
      bottom: "12px",
      bg: "white",
      borderRadius: "4px"
    }}
  />
)

const CodeIcon = () => (
  <Box
    w="50px"
    h="40px"
    position="relative"
    animation={`${iconFloat} 3s ease-in-out infinite 0.5s`}
  >
    <Box
      w="100%"
      h="2px"
      bg={theme.colors.ten}
      transform="rotate(15deg)"
      position="absolute"
      top="10px"
    />
    <Box
      w="100%"
      h="2px"
      bg={theme.colors.ten}
      transform="rotate(-15deg)"
      position="absolute"
      top="18px"
    />
    <Box
      w="100%"
      h="2px"
      bg={theme.colors.ten}
      transform="rotate(15deg)"
      position="absolute"
      top="26px"
    />
  </Box>
)

const CloudIcon = () => (
  <Box
    w="50px"
    h="30px"
    bg={theme.colors.ten}
    borderRadius="15px"
    position="relative"
    animation={`${iconFloat} 3s ease-in-out infinite 1s`}
    _before={{
      content: '""',
      position: "absolute",
      top: "-8px",
      left: "8px",
      w: "20px",
      h: "20px",
      bg: theme.colors.ten,
      borderRadius: "50%"
    }}
    _after={{
      content: '""',
      position: "absolute",
      top: "-12px",
      right: "8px",
      w: "15px",
      h: "15px",
      bg: theme.colors.ten,
      borderRadius: "50%"
    }}
  />
)

const features = [
  {
    icon: <MobileIcon />,
    title: "Native & Cross-Platform",
    description: "We develop both native iOS/Android apps and cross-platform solutions using React Native and Flutter for maximum reach and performance."
  },
  {
    icon: <CodeIcon />,
    title: "Custom Development",
    description: "Every app is built from scratch according to your specific requirements, ensuring unique functionality and seamless user experience."
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Integration",
    description: "Seamless integration with cloud services, APIs, and third-party systems to create powerful, connected applications."
  }
]

const AppAbout = () => {
  return (
    <Box
      w="100%"
      my={{ base: "4rem", md: "5rem", lg: "6rem" }}
    >
      <Box
        maxW="1200px"
        w="95%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        fontFamily={theme.fonts.body}
        mx="auto"
      >
        {/* Header */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Text
            fontSize={{ base: "1.8rem", md: "2.5rem", lg: "3rem" }}
            fontWeight="700"
            animation={`${slideInLeft} 1s ease-out`}
          >
            Professional App Development Services
          </Text>
          <Box
            w="80px"
            h="4px"
            bg={theme.colors.ten}
            borderRadius="20px"
            animation={`${slideInRight} 1s ease-out 0.2s both`}
          />
          <Text
            fontSize={{ base: "1rem", md: "1.2rem" }}
            color="gray.600"
            maxW="800px"
            lineHeight="1.8"
            textAlign="justify"
            animation={`${slideInLeft} 1s ease-out 0.4s both`}
          >
            At Matric Services, we specialize in creating cutting-edge mobile applications that transform businesses and enhance user experiences. Our team of expert developers combines technical excellence with creative innovation to deliver apps that not only meet your requirements but exceed your expectations.
          </Text>
        </VStack>

        {/* Main Content Grid */}
        <SimpleGrid columns={[1, 1, 2]} spacing={16} alignItems="center" w="100%">
          {/* Left Content */}
          <VStack
            spacing={6}
            alignItems="flex-start"
            animation={`${slideInLeft} 1s ease-out 0.6s both`}
          >
            <Text
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontWeight="600"
              color={theme.colors.ten}
            >
              Why Mobile Apps Matter Today
            </Text>
            
            <VStack spacing={4} alignItems="flex-start">
              {[
                "Mobile apps drive 90% of mobile usage time",
                "Apps increase customer engagement by 3x",
                "Push notifications have 50% higher open rates",
                "In-app purchases generate $380B annually"
              ].map((stat, index) => (
                <HStack key={index} spacing={3}>
                  <Box
                    w="8px"
                    h="8px"
                    bg={theme.colors.ten}
                    borderRadius="50%"
                    mt={1}
                  />
                  <Text fontSize={{ base: "0.9rem", md: "1rem" }} color="gray.700">
                    {stat}
                  </Text>
                </HStack>
              ))}
            </VStack>

            <Text
              fontSize={{ base: "0.9rem", md: "1rem" }}
              color="gray.600"
              lineHeight="1.7"
              textAlign="justify"
            >
              We understand that every business is unique, which is why we take a personalized approach to app development. From ideation to deployment and beyond, we work closely with you to ensure your app not only meets current market demands but is also scalable for future growth.
            </Text>
          </VStack>

          {/* Right Content - Features */}
          <VStack
            spacing={8}
            animation={`${slideInRight} 1s ease-out 0.8s both`}
          >
            {features.map((feature, index) => (
              <HStack
                key={index}
                spacing={6}
                alignItems="flex-start"
                w="100%"
                p={6}
                bg="white"
                borderRadius="15px"
                boxShadow="0 5px 20px rgba(0,0,0,0.08)"
                border={`1px solid ${theme.colors.thirty}`}
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                transition="all 0.3s ease"
              >
                <Box flexShrink={0}>
                  {feature.icon}
                </Box>
                <VStack spacing={2} alignItems="flex-start">
                  <Text
                    fontSize={{ base: "1.1rem", md: "1.3rem" }}
                    fontWeight="600"
                    color={theme.colors.ten}
                  >
                    {feature.title}
                  </Text>
                  <Text
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    color="gray.600"
                    lineHeight="1.6"
                  >
                    {feature.description}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AppAbout