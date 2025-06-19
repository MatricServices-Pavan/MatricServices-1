import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  IconButton,
  VStack,
  HStack,
  Text,
  Menu, 
  MenuButton, 
  MenuList,
  MenuItem, 
  Button,
  useDisclosure,
  useMenuContext,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { IoMdMenu, } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
import logo from "../../assets/logo.png";
import { ImCross } from "react-icons/im";

const Webnav = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
    if (open === true) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  // Common styles for navigation links
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? theme.colors.ten : "black",
    borderBottom: isActive ? `2px solid ${theme.colors.ten}` : "none",
    paddingBottom: "3px",
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // If scrolled more than 50px, set the navbar to fixed
        setIsScrolled(true);
      } else {
        // If not scrolled, set the navbar to static
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <Box
        boxShadow="md"
        bg="white"
        position={isScrolled?'fixed':'static'} // Position fixed when scrolled
        w="100%"
        top="0"
       
        zIndex="25"
        transition="position 0.3s ease-in-out"
        display={open ? "none" : "block"} // Hide navbar when drawer is open
        
        
      >
        {/* Mobile & Desktop Flex Container */}
        <HStack
          fontFamily={theme.fonts.body}
          w="95%"
          maxW="1200px"
          mx="auto"
          h="70px"
          p={1}
          display="flex"
          justifyContent={{ base: "space-between", lg: "space-between" }}
          alignItems="center"
          flexDirection={{ base: "row", lg: "row" }} // Keep items in a row layout
        >
          {/* Mobile View: Menu Toggle, Logo, Chat Button */}
          <HStack
            display={{ base: "flex", lg: "none" }}
            w="full"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack>
              {/* Hamburger Icon for Small Screens */}
              <IconButton
                icon={<IoMdMenu />}
                aria-label="Toggle navigation"
                fontSize="2rem"
                onClick={toggleNav}
                display={{ base: "block", lg: "none" }}
                mr="0px"
                borderColor="#000"
                borderWidth="1px"
                borderRadius="6px"
                _hover={{
                  backgroundColor: "gray.100", // Light background color on hover
                  transform: "scale(1.05)", // Slightly increase the size
                  transition: "all 0.2s ease", // Smooth transition
                }}
              />

              {/* Logo */}
              <Box w="150px" h="150px" ml="0px" mt="6px" p="0px">
                {/* Adjust logo size as needed */}
                <NavLink to="/">
                  <Image w="100%" h="100%" src={logo} alt="Logo" />
                </NavLink>
              </Box>
            </HStack>

            {/* WhatsApp Button */}
            {/* <Box
              w="max-content"
              borderRadius="30px"
              p="5px 15px"
              bg={'#25D366'}
              display={{ base: "flex", lg: "flex" }} 
              alignItems="center"
              justifyContent="center"
              gap="5px"
              color="white"
              cursor="pointer"
            >
              <a
              href="https://wa.me/919390555433"
              target="_blank"
              rel="noopener noreferrer"
              >
              <HStack spacing={2} alignItems="center">
                <FaWhatsapp fontSize="1.5rem" cursor="pointer" />
              </HStack>
              </a>
            </Box> */}
            </HStack>

            {/* Desktop View */}
          <Box
            display={{ base: "none", lg: "flex" }}
            w="full"
            justifyContent="space-between"
          >
            {/* Logo for Desktop */}
            <Box w="15%" h="100%">
              <NavLink to="/">
                <Image w="100%" h="100%" src={logo} alt="Logo" />
              </NavLink>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              w="40%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontWeight="700"
              textTransform="uppercase"
              fontSize={"0.8rem"}
            >
              <NavLink to="/" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </NavLink>
              <NavLink to="/about" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </NavLink>
<Menu>
  {({ onClose }) => (
    <>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        fontWeight="700"
        textTransform="uppercase"
        fontSize="0.8rem"
        transition="all 0.2s ease"
        borderRadius="md"
        px={4}
        py={2}
      >
        Services
      </MenuButton>
      <MenuList
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        boxShadow="lg"
        py={1}
        minW="200px"
        zIndex={1000}
        overflow="hidden"
      >
        
      

          <NavLink to="/webdevelopment" style={navLinkStyle}>
          <MenuItem
            fontWeight="700"
            textTransform="uppercase"
            fontSize="0.8rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={4}
            py={2}
            mx={0}
            onClick={onClose} // Close the menu on click
          >
             Web Development
          </MenuItem>
        </NavLink>

          <NavLink to="/appDev" style={navLinkStyle}>
          <MenuItem
            fontWeight="700"
            textTransform="uppercase"
            fontSize="0.8rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={4}
            py={2}
            mx={0}
            onClick={onClose} // Close the menu on click
          >
            App Development
          </MenuItem>
        </NavLink>

          <NavLink to="/digitalmarketing" style={navLinkStyle}>
          <MenuItem
            fontWeight="700"
            textTransform="uppercase"
            fontSize="0.8rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={4}
            py={2}
            mx={0}
            onClick={onClose} // Close the menu on click
          >
            Digital Marketing
          </MenuItem>
        </NavLink>

        <NavLink to="/workshop" style={navLinkStyle}>
          <MenuItem
            fontWeight="700"
            textTransform="uppercase"
            fontSize="0.8rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={4}
            py={2}
            mx={0}
            onClick={onClose} // Close the menu on click
          >
            Workshops
          </MenuItem>
        </NavLink>

          <NavLink to="/projects" style={navLinkStyle}>
          <MenuItem
            fontWeight="700"
            textTransform="uppercase"
            fontSize="0.8rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={4}
            py={2}
            mx={0}
            onClick={onClose} // Close the menu on click
          >
            Projects
          </MenuItem>
        </NavLink>
        
      </MenuList>
    </>
  )}
</Menu>
              <NavLink to="/products" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Products</Box>
              </NavLink>
            </Box>

            {/* WhatsApp Button for Desktop */}
            {/* <Box
              w="20%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="20px"
            >
              <Box
                w="max-content"
                borderRadius="30px"
                p="5px 15px"
                bg={'#25D366'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="5px"
                color="white"
              >
                <a
                  href="https://wa.me/919390555433"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HStack spacing={2} alignItems="center">
                    <FaWhatsapp cursor="pointer" />
                    <Text>Chat Now</Text>
                  </HStack>
                </a>
              </Box>
            </Box> */}
          </Box>
        </HStack>
      </Box>
      {open && (
        <>
          <Box
            position="fixed"
            w={"100%"}
            height={"100%"}
            top="0"
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            bg="white"
            zIndex={99999}
          >
           <Box w="150px" h="150px">
              <NavLink to="/">
                <Image w="100%" h="100%" src={logo} alt="Logo" objectFit={'contain'}/>
              </NavLink>
            </Box>
            <Box
              color="black"
              fontSize={"1.2rem"}
              onClick={toggleNav}
              position="absolute"
              right="5%"
              top="9%"
            >
              <ImCross />
            </Box>
            <VStack
              w="100%"
              align="flex-start"
              pl={6}
              mt={8}
              fontSize={"1rem"}
              fontWeight={500}
              spacing={2}
            >
             
              <NavLink to="/" style={navLinkStyle} onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }} textTransform="uppercase">Home</Box>
              </NavLink>

              <NavLink to="/about" style={navLinkStyle} onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }} textTransform="uppercase">About Us</Box>
              </NavLink>
<Menu closeOnSelect={false}>
  {({ onClose, isOpen }) => (
    <>
      <MenuButton
        as={Box} // Changed from Button to Box to remove button styling
        fontSize="1rem" // Match other nav items
        fontWeight={500} // Match other nav items
        textTransform="uppercase" // Match other nav items
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="180px" // Keep width consistent
        _hover={{ cursor: "pointer" }}
      >
        <HStack w="full">
          <Text marginRight="20px">Services</Text>
          {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </HStack>
      </MenuButton>
      <MenuList
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        boxShadow="lg"
        py={1}
        minW="200px"
        zIndex={1000}
        overflow="hidden"
      >
       
      

        <NavLink to="/webdevelopment" style={navLinkStyle} onClick={() => { toggleNav(); onClose(); }}>
          <MenuItem
            fontWeight={500}
            textTransform="uppercase"
            fontSize="1rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={3}
            py={2}
            mx={0}
            pl={6}
          >
            Web Development
          </MenuItem>
        </NavLink>

        <NavLink to="/appDev" style={navLinkStyle} onClick={() => { toggleNav(); onClose(); }}>
          <MenuItem
            fontWeight={500}
            textTransform="uppercase"
            fontSize="1rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={3}
            py={2}
            mx={0}
            pl={6}
          >
            App Development
          </MenuItem>
        </NavLink>

        <NavLink to="/digitalmarketing" style={navLinkStyle} onClick={() => { toggleNav(); onClose(); }}>
          <MenuItem
            fontWeight={500}
            textTransform="uppercase"
            fontSize="1rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={3}
            py={2}
            mx={0}
            pl={6}
          >
            Digital Marketing
          </MenuItem>
        </NavLink>

         <NavLink to="/workshop" style={navLinkStyle} onClick={() => { toggleNav(); onClose(); }}>
          <MenuItem
            fontWeight={500} // Match other nav items
            textTransform="uppercase" // Match other nav items
            fontSize="1rem" // Match other nav items
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={3}
            py={2}
            mx={0}
            pl={6} // Indent to align with parent nav items
          >
            Workshops
          </MenuItem>
        </NavLink>


          <NavLink to="/projects" style={navLinkStyle} onClick={() => { toggleNav(); onClose(); }}>
          <MenuItem
            fontWeight={500}
            textTransform="uppercase"
            fontSize="1rem"
            _hover={{ bg: "gray.100" }}
            _focus={{ bg: "gray.200" }}
            transition="all 0.2s ease"
            borderRadius="md"
            px={3}
            py={2}
            mx={0}
            pl={6}
          >
            Projects
          </MenuItem>
        </NavLink>
       
      </MenuList>
    </>
  )}
</Menu>
              <NavLink to="/products" style={navLinkStyle} onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }} textTransform="uppercase">Products</Box>
              </NavLink>
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};

export default Webnav;
