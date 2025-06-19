import { Box, Image } from "@chakra-ui/react";
import img1 from "../../assets/Sliderimage1.png";
import img2 from "../../assets/Sliderimage2.png";
import img3 from "../../assets/Sliderimage3.png";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { NavLink } from "react-router-dom";
import img4 from '../../assets/Sliderimage4.png'
import img5 from '../../assets/Sliderimage5.png'
import img6 from '../../assets/Sliderimage6.png'
import img7 from '../../assets/Sliderimage7.png'

const Sliderimages = [
  {
    image: img1,
    maintext: "Welcome to Matric Services",
    subtext: "Empowering Students Through Quality Education",
    buttontext: "Learn More",
    navlink:'about'
  },
  {
    image: img2,
    maintext: "Hands-On Workshops",
    subtext: "Enhance Your Skills with Our Expert-Led Programs",
    buttontext: "Explore more",
    navlink:'workshop'
  },
  {
    image: img3,
    maintext: "Exciting Projects",
    subtext: "Transform Your Ideas into Reality",
    buttontext: "View Projects",
    navlink:'projects'
  },

  {
    image: img4,
    maintext: "Explore Our Custom Kits & Products",
    subtext: "Quality Kits & Products Designed for Success",
    buttontext: "View Products",
    navlink:'products'
  },

{
  image: img5,
  maintext: "Tailored Web Application Development",
  subtext: "Build secure, scalable, and high-performance web solutions customized to your business needs.",
  buttontext: "Explore Web Development",
  navlink: 'webdevelopment'
},

{
  image: img6,
  maintext: "Innovative App Development Services",
  subtext: "Custom mobile and desktop applications engineered for functionality, performance, and growth.",
  buttontext: "Discover App Development",
  navlink: 'appDev'
},

{
  image: img7,
  maintext: "Strategic Digital Marketing Solutions",
  subtext: "Boost your brand visibility and engagement with data-driven, results-oriented marketing strategies.",
  buttontext: "Digital Marketing",
  navlink: 'digitalmarketing'
},

];

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const increment = () => {
    setCurrentImg((prev) => (prev === Sliderimages.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const timer = setInterval(() => {
      increment();
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [currentImg]);

  return (
    <Box
      w="100%"
      h={{
        base: "30vh",
        sm: "30vh",
        md: "40vh",
        lg: "50vh",
        xl: "80vh",
      }}
      position="relative"
      fontFamily={theme.fonts.body}
    >
      <Box position="absolute" top="0" w="100%" h="100%" objectFit="cover">
        <Image w="100%" h="100%" src={Sliderimages[currentImg].image} />
        <Box
          position="absolute"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          top="50%"
          transform="translateY(-50%)"
          left="5%"
          color="white"
        >
          <Box fontSize={{ base: '1.2rem', md: '2rem', lg: '3rem' }} fontWeight="600">
            {Sliderimages[currentImg].maintext}
          </Box>
          <Box fontSize={{ base: '0.7rem', md: '1rem', lg: '1.2rem' }} mt="-5px">
            {Sliderimages[currentImg].subtext}
          </Box>
          <NavLink to={`/${Sliderimages[currentImg].navlink}`}>
            <Box
              color="black"
              mt={{ base: '10px', md: '20px', lg: '30px' }}
              fontSize={{ base: '0.8rem', md: '1rem' }}
              bg={theme.colors.thirty}
              w="max-content"
              p={{ base: '5px 15px', md: '10px 30px' }}
              borderRadius={{ base: '5px', md: '10px', lg: '15px' }}
              cursor="pointer"
            >
              {Sliderimages[currentImg].buttontext}
            </Box>
          </NavLink>
        </Box>
        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bottom="20px"
          gap="10px"
        >
          {Sliderimages.slice(0, 7).map((_, idx) => (
            <Box
              key={idx}
              w={{ base: "6px", md: "8px", lg: "10px" }}
              h={{ base: "6px", md: "8px", lg: "10px" }}
              borderRadius="50%"
              style={{
                background: idx === currentImg ? "white" : "gray",
                scale: idx === currentImg ? "1.2" : "1",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
