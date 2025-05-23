import React from 'react';
import AdminNavbar from '../../Components/Admin/AdminNavbar';
import { Outlet, useLocation } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import Privateroute from '../../routs/Privateroute';

const AdminLayoutPage = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/admin'; 

  return (
 
      <Box>
          <Flex minHeight="100vh">
                {!isLoginPage && (
                  <Box width="300px" bg="gray.800" color="white" p={2}>
               <AdminNavbar />
                  </Box>
                
                )}

        <Box flex="1" p={4} overflow="auto"><Outlet /></Box>
        </Flex>
      </Box>
      
  );
};

export default AdminLayoutPage;
