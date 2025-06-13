import { Box, Text, Button, VStack, HStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../theme';

// Optimized animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const elegantFloat = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -8px, 0);
  }
`;

const subtlePulse = keyframes`
  0%, 100% {
    transform: scale3d(1, 1, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale3d(1.02, 1.02, 1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Memoized background decoration component
const BackgroundDecoration = memo(() => (
  <>
    <Box
      position="absolute"
      top="15%"
      right="8%"
      w={{ base: "60px", md: "80px", lg: "100px" }}
      h={{ base: "60px", md: "80px", lg: "100px" }}
      borderRadius="50%"
      bg={`linear-gradient(135deg, ${theme.colors.ten}20, ${theme.colors.ten}10)`}
      animation={`${elegantFloat} 8s ease-in-out infinite`}
      willChange="transform"
    />
    <Box
      position="absolute"
      bottom="25%"
      left="5%"
      w={{ base: "40px", md: "50px", lg: "60px" }}
      h={{ base: "40px", md: "50px", lg: "60px" }}
      borderRadius="50%"
      bg={`linear-gradient(135deg, ${theme.colors.ten}15, ${theme.colors.ten}08)`}
      animation={`${elegantFloat} 6s ease-in-out infinite`}
      animationDelay="3s"
      willChange="transform"
    />
    <Box
      position="absolute"
      top="35%"
      left="10%"
      w={{ base: "20px", md: "30px", lg: "40px" }}
      h={{ base: "20px", md: "30px", lg: "40px" }}
      borderRadius="50%"
      bg={`linear-gradient(135deg, ${theme.colors.ten}12, ${theme.colors.ten}06)`}
      animation={`${elegantFloat} 10s ease-in-out infinite`}
      animationDelay="5s"
      willChange="transform"
    />
  </>
));

// Memoized stats component
const StatsSection = memo(() => {
  const stats = [
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <HStack
      spacing={{ base: 6, sm: 8, md: 12, lg: 16 }}
      mt={{ base: 12, md: 16 }}
      flexDirection={{ base: "column", sm: "row" }}
      animation={`${fadeInUp} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s both`}
    >
      {stats.map((stat, index) => (
        <VStack key={stat.label} spacing={2}>
          <Text
            fontSize={{ base: "1.8rem", sm: "2.2rem", md: "2.6rem", lg: "3rem" }}
            fontWeight="700"
            color={theme.colors.ten}
            letterSpacing="-0.02em"
            lineHeight="1"
          >
            {stat.number}
          </Text>
          <Text
            fontSize={{ base: "0.85rem", sm: "0.9rem", md: "1rem" }}
            color="gray.600"
            fontWeight="500"
            textAlign="center"
            letterSpacing="0.02em"
          >
            {stat.label}
          </Text>
        </VStack>
      ))}
    </HStack>
  );
});

const AppHero = memo(() => {

const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with id "${sectionId}" not found. Ensure the section is rendered.`);
    }
  };

  return (
    <Box
      w="100%"
      minH={{ base: "100vh", md: "90vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bg={`linear-gradient(135deg, ${theme.colors.sixty} 0%, ${theme.colors.thirty} 50%, ${theme.colors.sixty} 100%)`}
      overflow="hidden"
      fontFamily={theme.fonts.body}
    >
      {/* Background Decorations */}
      <BackgroundDecoration />
      
      {/* Subtle overlay for depth */}
      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 100%)"
        pointerEvents="none"
      />

      <Box
        maxW="1200px"
        w="95%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mx="auto"
        textAlign="center"
        py={{ base: 16, md: 20 }}
        px={{ base: 4, md: 6 }}
      >
        <VStack spacing={{ base: 6, md: 8 }} maxW="900px" w="100%">
          {/* Main Heading */}
          <Text
            fontSize={{ base: "2.2rem", sm: "2.8rem", md: "3.6rem", lg: "4.2rem", xl: "4.8rem" }}
            fontWeight="800"
            lineHeight={{ base: "1.15", md: "1.2" }}
            letterSpacing="-0.025em"
            animation={`${fadeInUp} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`}
            bgGradient={`linear(to-r, ${theme.colors.ten}, #4a5568)`}
            bgClip="text"
            position="relative"
          >
            Transform Your Ideas Into
            <Text 
              as="span" 
              display="block" 
              color={theme.colors.ten}
              mt={2}
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                bg: theme.colors.ten,
                borderRadius: "2px",
                opacity: 0.8
              }}
            >
              Powerful Mobile Apps
            </Text>
          </Text>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.4rem" }}
            color="gray.600"
            maxW="650px"
            lineHeight={{ base: "1.6", md: "1.65" }}
            letterSpacing="0.01em"
            animation={`${fadeInUp} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both`}
            fontWeight="400"
          >
            We craft exceptional mobile applications that drive business growth and deliver outstanding user experiences across all platforms.
          </Text>

          {/* CTA Buttons */}
          <HStack
            spacing={{ base: 4, md: 6 }}
            mt={{ base: 6, md: 8 }}
            flexDirection={{ base: "column", sm: "row" }}
            w="100%"
            justify="center"
            animation={`${fadeInUp} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both`}
          >
            <Button
              size="lg"
              px={{ base: 8, md: 10 }}
              py={{ base: 6, md: 8 }}
              h={{ base: "52px", md: "56px" }}
              bg={theme.colors.ten}
              color="white"
              borderRadius="6px"
              fontSize={{ base: "1rem", md: "1.1rem" }}
              fontWeight="600"
              letterSpacing="0.02em"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                bg: "#666666"
              }}
              _active={{
                transform: "translateY(0px)"
              }}
              transition="all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              animation={`${subtlePulse} 3s ease-in-out infinite`}
              animationDelay="2s"
              w={{ base: "280px", sm: "auto" }}
              _before={{
                content: '""',
                position: "absolute",
                top: "0",
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                animation: `${shimmer} 2s ease-in-out infinite`,
                animationDelay: "1s"
              }}
              onClick={() => handleScroll("contact-us")} 
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              px={{ base: 8, md: 10 }}
              py={{ base: 6, md: 8 }}
              h={{ base: "52px", md: "56px" }}
              bg="transparent"
              color={theme.colors.ten}
              border={`2px solid ${theme.colors.ten}`}
              borderRadius="6px"
              fontSize={{ base: "1rem", md: "1.1rem" }}
              fontWeight="600"
              letterSpacing="0.02em"
              _hover={{
                bg: theme.colors.ten,
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
              }}
              _active={{
                transform: "translateY(0px)"
              }}
              transition="all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              w={{ base: "280px", sm: "auto" }}
              onClick={() => handleScroll("app-portfolio")} 
            >
              View Our Work
            </Button>
          </HStack>

          {/* Stats */}
          <StatsSection />
        </VStack>
      </Box>
    </Box>
  );
});

export default AppHero;