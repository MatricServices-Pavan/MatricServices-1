import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

// Theme colors
const themeColors = {
  sixty: 'white',
  thirty: '#ededed',
  ten: '#a5a5a5',
};

// Animation keyframes
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function PricingComponent() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Box
      py={{ base: 10, md: 16, lg: 16 }}
      px={{ base: 4, md: 6, lg: 8 }}
      bg={themeColors.sixty}
      fontFamily="Inter, system-ui, sans-serif"
      position="relative"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={{ base: 0.02, md: 0.03 }}
        backgroundImage="radial-gradient(circle at 25% 25%, #000 2px, transparent 2px)"
        backgroundSize={{ base: '30px 30px', md: '40px 40px', lg: '50px 50px' }}
        pointerEvents="none"
      />

      <VStack
        spacing={{ base: 8, md: 12, lg: 16 }}
        maxW={{ base: '100%', md: '3xl', lg: '7xl' }}
        mx="auto"
        position="relative"
        px={{ base: 2, md: 0 }}
      >
        {/* Header */}
        <VStack
          spacing={{ base: 3, md: 4, lg: 5 }}
          textAlign="center"
          animation={`${slideUp} 0.8s ease-out`}
        >
          <HStack spacing={1} opacity={0.6}>
            <Sparkles size={25} color={themeColors.ten} />
            <Text
              fontSize="md"
              fontWeight="600"
              color={themeColors.ten}
              textTransform="uppercase"
              letterSpacing="0.4rem"
            >
              Premium Development
            </Text>
            <Sparkles size={25} color={themeColors.ten} />
          </HStack>

          <Text
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="800"
            color="#1a1a1a"
            lineHeight="1.5"
            letterSpacing="0.2rem"
          >
            Mobile App
            <Text as="span" display="block" color={themeColors.ten}>
              Development
            </Text>
          </Text>

          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color={themeColors.ten}
            maxW={{ base: '100%', md: 'xl', lg: '2xl' }}
            lineHeight="1.5"
            fontWeight="400"
            px={2}
          >
            Transform your vision into reality with our cutting-edge mobile solutions. From concept to deployment, we craft experiences that users love.
          </Text>
        </VStack>
        <VStack
          spacing={{ base: 4, md: 6 }}
          textAlign="center"
          animation={`${slideUp} 1s ease-out 0.6s both`}
          bg={themeColors.thirty}
          p={{ base: 6, md: 8, lg: 12 }}
          rounded="3xl"
          border="1px solid"
          borderColor="rgba(0,0,0,0.05)"
          maxW={{ base: '100%', md: '2xl', lg: '4xl' }}
          mx="auto"
        >
          <VStack spacing={{ base: 2, md: 4 }}>
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" color="#1a1a1a">
              Need Something Custom?
            </Text>
            <Text
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              color={themeColors.ten}
              maxW={{ base: '100%', md: 'xl', lg: '2xl' }}
              lineHeight="1.6"
            >
              Every project is unique. Let's discuss your specific requirements and create a tailored
              solution that perfectly fits your vision and budget.
            </Text>
          </VStack>

          <HStack
            spacing={{ base: 4, md: 6, lg: 8 }}
            pt={{ base: 2, md: 4 }}
            opacity={0.6}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            justifyContent="flex-start"
          >
            <Text fontSize={{ base: 'xs', md: 'sm' }} color={themeColors.ten}>
              ✅ Free Consultation
            </Text>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color={themeColors.ten}>
              ✅ No Obligation Quote
            </Text>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color={themeColors.ten}>
              ✅ 24/7 Support
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}