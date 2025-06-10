import { Box, Text, SimpleGrid, VStack, HStack } from '@chakra-ui/react'
import { keyframes } from '@emotion/react';
import React from 'react'
import theme from '../../theme'

// Smooth animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const scaleInSoft = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`

const rotateIcon = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  50% {
    box-shadow: 0 4px 25px rgba(0,0,0,0.15);
  }
`

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

// Cleaner Icon Components
const QualityIcon = () => (
  <Box
    w={{ base: "50px", md: "56px" }}
    h={{ base: "50px", md: "56px" }}
    bg={`linear-gradient(135deg, ${theme.colors.ten}, ${theme.colors.ten}CC)`}
    borderRadius="16px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="relative"
    boxShadow="0 4px 20px rgba(0,0,0,0.1)"
    _hover={{
      animation: `${rotateIcon} 1s ease-in-out`
    }}
    transition="all 0.3s ease"
  >
    <Box
      w="24px"
      h="24px"
      border="2.5px solid white"
      borderRadius="50%"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        top: "6px",
        left: "6px",
        w: "4px",
        h: "8px",
        border: "2px solid white",
        borderTop: "none",
        borderLeft: "none",
        transform: "rotate(45deg)"
      }}
    />
  </Box>
)

const TimeIcon = () => (
  <Box
    w={{ base: "50px", md: "56px" }}
    h={{ base: "50px", md: "56px" }}
    bg={`linear-gradient(135deg, ${theme.colors.ten}, ${theme.colors.ten}CC)`}
    borderRadius="16px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="relative"
    boxShadow="0 4px 20px rgba(0,0,0,0.1)"
    _hover={{
      animation: `${floatAnimation} 2s ease-in-out infinite`
    }}
    transition="all 0.3s ease"
  >
    <Box
      w="26px"
      h="26px"
      border="2.5px solid white"
      borderRadius="50%"
      position="relative"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        w="1.5px"
        h="7px"
        bg="white"
        borderRadius="1px"
        transform="translate(-50%, -100%)"
        transformOrigin="bottom"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        w="1.5px"
        h="5px"
        bg="white"
        borderRadius="1px"
        transform="translate(-50%, -100%) rotate(90deg)"
        transformOrigin="bottom"
      />
    </Box>
  </Box>
)

const SupportIcon = () => (
  <Box
    w={{ base: "50px", md: "56px" }}
    h={{ base: "50px", md: "56px" }}
    bg={`linear-gradient(135deg, ${theme.colors.ten}, ${theme.colors.ten}CC)`}
    borderRadius="16px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    boxShadow="0 4px 20px rgba(0,0,0,0.1)"
    _hover={{
      animation: `${floatAnimation} 2s ease-in-out infinite`
    }}
    transition="all 0.3s ease"
  >
    <Box
      w="28px"
      h="20px"
      bg="white"
      borderRadius="12px 12px 4px 12px"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-6px",
        left: "16px",
        w: "0",
        h: "0",
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "6px solid white"
      }}
    />
  </Box>
)

const SecurityIcon = () => (
  <Box
    w={{ base: "50px", md: "56px" }}
    h={{ base: "50px", md: "56px" }}
    bg={`linear-gradient(135deg, ${theme.colors.ten}, ${theme.colors.ten}CC)`}
    borderRadius="16px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    boxShadow="0 4px 20px rgba(0,0,0,0.1)"
    _hover={{
      animation: `${floatAnimation} 2s ease-in-out infinite`
    }}
    transition="all 0.3s ease"
  >
    <Box
      w="20px"
      h="24px"
      position="relative"
    >
      <Box
        w="100%"
        h="14px"
        bg="white"
        borderRadius="0 0 6px 6px"
      />
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="14px"
        h="10px"
        border="2.5px solid white"
        borderBottom="none"
        borderRadius="6px 6px 0 0"
      />
    </Box>
  </Box>
)

const reasons = [
  {
    icon: <QualityIcon />,
    title: "Premium Quality",
    description: "Highest standards of code quality, performance optimization, and user experience design in every project.",
  },
  {
    icon: <TimeIcon />,
    title: "On-Time Delivery",
    description: "Agile development process ensures your project is delivered on schedule with consistent progress updates.",
  },
  {
    icon: <SupportIcon />,
    title: "24/7 Support",
    description: "Continuous support and maintenance services to keep your application running smoothly and up-to-date.",
  },
  {
    icon: <SecurityIcon />,
    title: "Secure & Scalable",
    description: "Enterprise-grade security measures and scalable architecture designed to grow with your business.",
  }
]

const AppWhyChoose = () => {
  return (
    <Box
      w="100%"
      py={{ base: "4rem", md: "6rem", lg: "8rem" }}
      bg={theme.colors.thirty}
      position="relative"
    >
      {/* Subtle background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        backgroundImage="radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px)"
        backgroundSize="40px 40px"
      />
      
      <Box
        maxW="1200px"
        w={{ base: "90%", md: "95%" }}
        mx="auto"
        position="relative"
        zIndex="1"
      >
        {/* Header Section */}
        <VStack 
          spacing={{ base: 4, md: 6 }} 
          textAlign="center" 
          mb={{ base: 12, md: 16, lg: 20 }}
          animation={`${fadeInUp} 0.8s ease-out`}
        >
          <Text
            fontSize={{ base: "2rem", md: "2.75rem", lg: "3.25rem" }}
            fontWeight="700"
            color="gray.800"
            fontFamily={theme.fonts.body}
            lineHeight="1.2"
          >
            Why Choose{" "}
            <Box as="span" color={theme.colors.ten}>
              Matric Services
            </Box>
            ?
          </Text>
          
          <Box
            w="60px"
            h="3px"
            bg={`linear-gradient(90deg, ${theme.colors.ten}, ${theme.colors.ten}AA)`}
            borderRadius="full"
            animation={`${scaleInSoft} 0.8s ease-out 0.3s both`}
          />
          
          <Text
            fontSize={{ base: "1rem", md: "1.125rem", lg: "1.25rem" }}
            color="gray.600"
            maxW={{ base: "100%", md: "600px", lg: "700px" }}
            lineHeight="1.7"
            animation={`${fadeIn} 0.8s ease-out 0.5s both`}
            fontWeight="400"
          >
            We create digital experiences that drive results. Here's what sets us apart.
          </Text>
        </VStack>

        {/* Reasons Grid */}
        <SimpleGrid 
          columns={{ base: 1, md: 2 }} 
          spacing={{ base: 6, md: 8, lg: 10 }}
          w="100%"
        >
          {reasons.map((reason, index) => (
            <Box
              key={index}
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="20px"
              boxShadow="0 4px 25px rgba(0,0,0,0.08)"
              border="1px solid rgba(0,0,0,0.04)"
              animation={`${fadeInUp} 0.8s ease-out ${0.1 * (index + 2)}s both`}
              _hover={{
                transform: "translateY(-12px) scale(1.02)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                "& .icon-container": {
                  animation: `${rotateIcon} 1s ease-in-out`
                },
                "& .shimmer-effect": {
                  opacity: 1,
                  animation: `${shimmer} 1.5s ease-in-out infinite`
                },
                "& .card-title": {
                  color: theme.colors.ten,
                  transform: "translateX(4px)"
                },
                "& .card-description": {
                  color: "gray.700"
                }
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              cursor="pointer"
              position="relative"
              overflow="hidden"
            >
              {/* Shimmer effect */}
              <Box
                className="shimmer-effect"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0"
                background="linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)"
                transition="opacity 0.3s ease"
                borderRadius="20px"
              />
              
              {/* Subtle background accent */}
              <Box
                position="absolute"
                top="0"
                right="0"
                w="100px"
                h="100px"
                bg={`linear-gradient(135deg, ${theme.colors.ten}08, transparent)`}
                borderRadius="0 20px 0 100px"
              />
              
              <HStack spacing={{ base: 4, md: 6 }} alignItems="flex-start" position="relative" zIndex="2">
                {/* Icon */}
                <Box flexShrink={0} className="icon-container" transition="all 0.3s ease">
                  {reason.icon}
                </Box>

                {/* Content */}
                <VStack spacing={{ base: 2, md: 3 }} alignItems="flex-start" flex="1">
                  <Text
                    className="card-title"
                    fontSize={{ base: "1.25rem", md: "1.375rem" }}
                    fontWeight="600"
                    color="gray.800"
                    lineHeight="1.3"
                    transition="all 0.3s ease"
                  >
                    {reason.title}
                  </Text>
                  
                  <Text
                    className="card-description"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    color="gray.600"
                    lineHeight="1.6"
                    fontWeight="400"
                    transition="all 0.3s ease"
                  >
                    {reason.description}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AppWhyChoose