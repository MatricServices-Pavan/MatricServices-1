import { Box, Text, SimpleGrid, VStack, HStack, Tag, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import React, { useState, useRef } from 'react';
import theme from '../../theme';

// Fallback color in case theme.colors.ten is undefined
const fallbackColor = '#2DD4BF'; // Teal color as a fallback; replace with your theme.colors.ten

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
  }),
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Animation for the header
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Animation for the underline
const underlineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: '80px', opacity: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
};

// Enhanced modal animation variants
const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 100,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.34, 1.56, 0.64, 1],
      type: 'spring',
      stiffness: 300,
      damping: 30
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 100,
    rotateX: 15,
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 0.6, 1]
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.2, ease: 'easeIn' }
  },
};

// Enhanced backdrop blur animation
const backdropVariants = {
  hidden: { 
    opacity: 0,
    backdropFilter: 'blur(0px)'
  },
  visible: { 
    opacity: 1,
    backdropFilter: 'blur(20px)',
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: { duration: 0.3, ease: 'easeIn' }
  },
};

// Reusable Portfolio Card Component
const PortfolioCard = React.memo(({ project, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      as={motion.div}
      ref={ref}
      bg="white"
      borderRadius="20px"
      overflow="hidden"
      border="1px solid #f0f0f0"
      cursor="pointer"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      custom={index}
      whileHover="hover"
      onClick={() => onClick(project)}
      position="relative"
    >
      {/* Subtle hover overlay */}
      <Box
        position="absolute"
        top="-1px"
        left="-1px"
        right="-1px"
        bottom="-1px"
        borderRadius="20px"
        background={`linear-gradient(135deg, ${(theme.colors.ten || fallbackColor) + '20'}, transparent)`}
        opacity={0}
        transition="opacity 0.3s ease"
        _hover={{ opacity: 0.4 }}
        pointerEvents="none"
      />

      {/* Project Image Placeholder */}
      <Box
        h="200px"
        bg={`linear-gradient(135deg, ${(theme.colors.ten || fallbackColor) + '30'}, ${(theme.colors.ten || fallbackColor) + '10'})`}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg={`linear-gradient(45deg, ${(theme.colors.ten || fallbackColor) + '20'} 25%, transparent 25%, transparent 75%, ${(theme.colors.ten || fallbackColor) + '20'} 75%, ${(theme.colors.ten || fallbackColor) + '20'}), linear-gradient(45deg, ${(theme.colors.ten || fallbackColor) + '20'} 25%, transparent 25%, transparent 75%, ${(theme.colors.ten || fallbackColor) + '20'} 75%, ${(theme.colors.ten || fallbackColor) + '20'})`}
          backgroundSize="20px 20px"
          backgroundPosition="0 0, 10px 10px"
          opacity="0.1"
        />
        <VStack spacing={2}>
          <Box
            as={motion.div}
            fontSize="3rem"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            📱
          </Box>
          <Text
            fontSize="1.2rem"
            fontWeight="600"
            color={theme.colors.ten || fallbackColor}
            _hover={{ textShadow: `0 0 8px ${(theme.colors.ten || fallbackColor) + '40'}` }}
            transition="all 0.3s ease"
          >
            {project.title}
          </Text>
        </VStack>
      </Box>

      {/* Project Details */}
      <Box p={6}>
        <VStack spacing={4} alignItems="flex-start">
          <HStack justifyContent="space-between" w="100%">
            <Tag
              size="sm"
              bg={`${(theme.colors.ten || fallbackColor) + '20'}`}
              color={theme.colors.ten || fallbackColor}
              borderRadius="15px"
              fontWeight="600"
              as={motion.div}
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </Tag>
            <HStack spacing={1}>
              {project.platform.map((platform) => (
                <Tag
                  key={platform}
                  size="sm"
                  variant="outline"
                  colorScheme="gray"
                  fontSize="0.7rem"
                >
                  {platform}
                </Tag>
              ))}
            </HStack>
          </HStack>
          <Text
            fontSize={{ base: '1.3rem', md: '1.5rem' }}
            fontWeight="700"
            color={theme.colors.ten || fallbackColor}
            lineHeight="1.3"
          >
            {project.title}
          </Text>
          <Text
            fontSize={{ base: '0.9rem', md: '1rem' }}
            color="gray.600"
            lineHeight="1.6"
            noOfLines={3}
          >
            {project.description}
          </Text>
          <HStack spacing={6} w="100%" fontSize="0.85rem">
            <VStack spacing={0}>
              <Text fontWeight="600" color={theme.colors.ten || fallbackColor}>
                {project.downloads || 'N/A'}
              </Text>
              <Text color="gray.500">Downloads</Text>
            </VStack>
            <VStack spacing={0}>
              <Text fontWeight="600" color={theme.colors.ten || fallbackColor}>
                {project.duration}
              </Text>
              <Text color="gray.500">Duration</Text>
            </VStack>
          </HStack>
          <HStack spacing={2} flexWrap="wrap">
            {project.technologies.slice(0, 3).map((tech) => (
              <Tag
                key={tech}
                size="xs"
                bg="gray.100"
                color="gray.600"
                borderRadius="10px"
              >
                {tech}
              </Tag>
            ))}
            {project.technologies.length > 3 && (
              <Text fontSize="0.8rem" color="gray.500">
                +{project.technologies.length - 3} more
              </Text>
            )}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
});

// Main AppPortfolio Component
const AppPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Clear selected project after animation completes
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Box
      id="app-portfolio"
      w="100%"
      my={{ base: '4rem', md: '5rem', lg: '6rem' }}
      bg={theme.colors.sixty || 'gray.100'} // Fallback background color
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        background={`radial-gradient(circle at 25% 25%, ${theme.colors.ten || fallbackColor} 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${theme.colors.ten || fallbackColor} 0%, transparent 50%)`}
      />

      <Box
        maxW="1200px"
        w="95%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        fontFamily={theme.fonts.body}
        mx="auto"
        py={{ base: 12, md: 16 }}
        position="relative"
        ref={ref}
      >
        {/* Header */}
        <VStack
          as={motion.div}
          spacing={4}
          textAlign="center"
          mb={16}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          <Text
            fontSize={{ base: '1.8rem', md: '2.5rem', lg: '3rem' }}
            fontWeight="700"
            color={theme.colors.ten || fallbackColor}
          >
            Our Success Stories
          </Text>
          <Box
            as={motion.div}
            w="80px"
            h="4px"
            bg={theme.colors.ten || fallbackColor}
            borderRadius="20px"
            variants={underlineVariants}
          />
          <Text
            fontSize={{ base: '1rem', md: '1.2rem' }}
            color="gray.600"
            maxW="800px"
            lineHeight="1.8"
            textAlign="center"
          >
            Explore our portfolio of successful mobile applications that have transformed businesses and delighted users across various industries.
          </Text>
        </VStack>

        {/* Portfolio Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8} w="100%">
          {portfolioItems.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              onClick={handleProjectClick}
            />
          ))}
        </SimpleGrid>

        {/* Beautiful Enhanced Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <Box
              position="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              zIndex="9999"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* Enhanced Backdrop */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.8)',
                }}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={closeModal}
              />

              {/* Modal Content */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  position: 'relative',
                  zIndex: 10000,
                  maxWidth: '900px',
                  width: '90vw',
                  maxHeight: '90vh',
                  margin: 'auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Box
                  bg="white"
                  borderRadius="24px"
                  overflow="hidden"
                  border="1px solid rgba(255,255,255,0.2)"
                  position="relative"
                >
                  {/* Gradient Header */}
                  <Box
                    position="relative"
                    bg={`linear-gradient(135deg, ${(theme.colors.ten || fallbackColor) + '15'}, ${(theme.colors.ten || fallbackColor) + '05'})`}
                    borderBottom="1px solid #f0f0f0"
                    py={6}
                    px={8}
                  >
                    {/* Animated gradient line */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${theme.colors.ten || fallbackColor}, ${(theme.colors.ten || fallbackColor) + '60'}, ${theme.colors.ten || fallbackColor})`,
                        backgroundSize: '200% 100%',
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    
                    <HStack justifyContent="space-between" alignItems="center">
                      <Text
                        fontSize={{ base: '1.6rem', md: '2rem' }}
                        fontWeight="700"
                        color={theme.colors.ten || fallbackColor}
                      >
                        {selectedProject?.title}
                      </Text>
                      
                      {/* Enhanced Close Button */}
                      <motion.button
                        onClick={closeModal}
                        style={{
                          background: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          color: '#666',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 90,
                          backgroundColor: '#f7f7f7',
                          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        ×
                      </motion.button>
                    </HStack>
                  </Box>

                  {/* Modal Body with Enhanced Scroll */}
                  <Box
                    maxH="70vh"
                    overflowY="auto"
                    bg="white"
                    css={{
                      '&::-webkit-scrollbar': {
                        width: '6px',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: theme.colors.ten || fallbackColor,
                        borderRadius: '3px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                        background: (theme.colors.ten || fallbackColor) + 'dd',
                      },
                    }}
                  >
                    {selectedProject && (
                      <Box p={{ base: 6, md: 8 }}>
                        <VStack spacing={8} alignItems="flex-start">
                          {/* Enhanced Project Image */}
                          <motion.div
                            style={{ width: '100%' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            <Box
                              w="100%"
                              h={{ base: '200px', md: '300px' }}
                              borderRadius="20px"
                              overflow="hidden"
                              position="relative"
                              bg={`linear-gradient(135deg, ${(theme.colors.ten || fallbackColor) + '30'}, ${(theme.colors.ten || fallbackColor) + '10'})`}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              {/* Animated background pattern */}
                              <motion.div
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: `linear-gradient(45deg, ${(theme.colors.ten || fallbackColor) + '20'} 25%, transparent 25%, transparent 75%, ${(theme.colors.ten || fallbackColor) + '20'} 75%)`,
                                  backgroundSize: '20px 20px',
                                  opacity: 0.15,
                                }}
                                animate={{
                                  backgroundPosition: ['0px 0px', '20px 20px'],
                                }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                              />
                              
                              <VStack spacing={4}>
                                <motion.div
                                  style={{ fontSize: '4rem' }}
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                  }}
                                >
                                  📱
                                </motion.div>
                                <Text
                                  fontSize={{ base: '1.2rem', md: '1.5rem' }}
                                  fontWeight="600"
                                  color={theme.colors.ten || fallbackColor}
                                  textAlign="center"
                                >
                                  {selectedProject.title} Preview
                                </Text>
                              </VStack>
                            </Box>
                          </motion.div>

                          {/* Enhanced Metadata Grid */}
                          <motion.div
                            style={{ width: '100%' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
                              <VStack alignItems="flex-start" spacing={3}>
                                <Text fontWeight="600" color="gray.600" fontSize="0.9rem">Category</Text>
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Tag
                                    bg={`${(theme.colors.ten || fallbackColor) + '20'}`}
                                    color={theme.colors.ten || fallbackColor}
                                    px={4}
                                    py={2}
                                    borderRadius="12px"
                                    fontWeight="600"
                                  >
                                    {selectedProject.category}
                                  </Tag>
                                </motion.div>
                              </VStack>
                              
                              <VStack alignItems="flex-start" spacing={3}>
                                <Text fontWeight="600" color="gray.600" fontSize="0.9rem">Platforms</Text>
                                <HStack spacing={2} flexWrap="wrap">
                                  {selectedProject.platform.map((platform, index) => (
                                    <motion.div
                                      key={platform}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <Tag
                                        variant="outline"
                                        colorScheme="gray"
                                        borderRadius="8px"
                                        fontSize="0.8rem"
                                        px={3}
                                        py={1}
                                      >
                                        {platform}
                                      </Tag>
                                    </motion.div>
                                  ))}
                                </HStack>
                              </VStack>
                              
                              <VStack alignItems="flex-start" spacing={3}>
                                <Text fontWeight="600" color="gray.600" fontSize="0.9rem">Duration</Text>
                                <motion.div
                                  whileHover={{ 
                                    textShadow: `0 0 8px ${(theme.colors.ten || fallbackColor) + '40'}`,
                                    scale: 1.05 
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Text
                                    fontWeight="700"
                                    fontSize="1.2rem"
                                    color={theme.colors.ten || fallbackColor}
                                  >
                                    {selectedProject.duration}
                                  </Text>
                                </motion.div>
                              </VStack>
                            </SimpleGrid>
                          </motion.div>

                          {/* Enhanced Project Overview */}
                          <motion.div
                            style={{ width: '100%' }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                          >
                            <VStack alignItems="flex-start" spacing={4}>
                              <Text
                                fontSize={{ base: '1.2rem', md: '1.4rem' }}
                                fontWeight="600"
                                color={theme.colors.ten || fallbackColor}
                              >
                                Project Overview
                              </Text>
                              <Text
                                fontSize={{ base: '0.95rem', md: '1rem' }}
                                lineHeight="1.8"
                                color="gray.700"
                              >
                                {selectedProject.description}
                              </Text>
                            </VStack>
                          </motion.div>

                          {/* Enhanced Key Features */}
                          <motion.div
                            style={{ width: '100%' }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                          >
                            <VStack alignItems="flex-start" spacing={4}>
                              <Text
                                fontSize={{ base: '1.2rem', md: '1.4rem' }}
                                fontWeight="600"
                                color={theme.colors.ten || fallbackColor}
                              >
                                Key Features
                              </Text>
                              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                                {selectedProject.features.map((feature, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ x: 5 }}
                                  >
                                    <HStack alignItems="flex-start" spacing={3}>
                                      <motion.div
                                        style={{
                                          width: '8px',
                                          height: '8px',
                                          background: theme.colors.ten || fallbackColor,
                                          borderRadius: '50%',
                                          marginTop: '8px',
                                        }}
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ duration: 0.2 }}
                                      />
                                      <Text fontSize="0.95rem" color="gray.700" lineHeight="1.6">
                                        {feature}
                                      </Text>
                                    </HStack>
                                  </motion.div>
                                ))}
                              </SimpleGrid>
                            </VStack>
                          </motion.div>

                          {/* Enhanced Technologies */}
                          <motion.div
                            style={{ width: '100%' }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                          >
                            <VStack alignItems="flex-start" spacing={4}>
                              <Text
                                fontSize={{ base: '1.2rem', md: '1.4rem' }}
                                fontWeight="600"
                                color={theme.colors.ten || fallbackColor}
                              >
                                Technologies Used
                              </Text>
                              <HStack spacing={3} flexWrap="wrap">
                                {selectedProject.technologies.map((tech, index) => (
                                  <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                                    whileHover={{ 
                                      scale: 1.1, 
                                      boxShadow: `0 4px 12px ${(theme.colors.ten || fallbackColor) + '30'}`,
                                      y: -2
                                    }}
                                  >
                                    <Tag
                                      size="md"
                                      bg="gray.100"
                                      color="gray.700"
                                      borderRadius="12px"
                                      px={4}
                                      py={2}
                                      fontWeight="500"
                                    >
                                      {tech}
                                    </Tag>
                                  </motion.div>
                                ))}
                              </HStack>
                            </VStack>
                          </motion.div>
                        </VStack>
                      </Box>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

// Dummy portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'FoodieConnect',
    category: 'Food Delivery',
    platform: ['iOS', 'Android'],
    image: '/api/placeholder/300/400',
    description:
      'A comprehensive food delivery platform connecting restaurants with hungry customers. Features real-time tracking, multiple payment options, and smart recommendations.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe API'],
    features: [
      'Real-time order tracking',
      'Multiple payment gateways',
      'Restaurant management dashboard',
      'Customer review system',
      'Push notifications',
      'GPS integration',
    ],
    duration: '4 months',
  },
  {
    id: 2,
    title: 'FitTrack Pro',
    category: 'Health & Fitness',
    platform: ['iOS', 'Android', 'Web'],
    image: '/api/placeholder/300/400',
    description:
      'A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and health metrics with AI-powered insights.',
    technologies: ['Flutter', 'Firebase', 'Python', 'TensorFlow', 'HealthKit'],
    features: [
      'Workout planning & tracking',
      'Nutrition logging',
      'AI-powered recommendations',
      'Social fitness challenges',
      'Wearable device integration',
      'Progress analytics',
    ],
    duration: '6 months',
  },
  {
    id: 3,
    title: 'EduLearn',
    category: 'Education',
    platform: ['iOS', 'Android'],
    image: '/api/placeholder/300/400',
    description:
      'An interactive e-learning platform designed for students and professionals, featuring live classes, assignments, and progress tracking.',
    technologies: ['React Native', 'Django', 'PostgreSQL', 'WebRTC', 'AWS'],
    features: [
      'Live video classes',
      'Interactive assignments',
      'Progress tracking',
      'Offline content access',
      'Discussion forums',
      'Certificate generation',
    ],
    duration: '5 months',
  },
];

export default AppPortfolio;