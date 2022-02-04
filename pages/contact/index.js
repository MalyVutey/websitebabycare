import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Grid, SimpleGrid,Box, Text,Center,Image } from "@chakra-ui/react"
import FormEmail from '../../components/Model/contact/FormEmail';

const Contact = () => {
 return ( 
  <Box bg={"#FFFF"}>
  <Head>
    <title>Contac</title>
     <meta name="keywords" content="ninjas" />
   </Head>
    {/* <SimpleGrid columns={2}  boxShadow="md" >
        <Box height='400px' >
          <Center fontSize='xl' fontWeight="extrabold"  height='400px' >
          <Center bg="pink.400"  color="white">
           <FormEmail title="GET IN TOUCH" />
          </Center>
          </Center>
        </Box>
        <Box bg='pink.400' height='400px' >
          <Box  ml="50" mt="20">
            <Box fontSize='xl' fontWeight="extrabold">Nicola Marshall-Sauvage</Box>
            <Box color="#FFFF">Siem Reap</Box>
          </Box>
          <Box  ml="50" mt="15">
            <Box fontSize='xl' fontWeight="extrabold">Email Address</Box>
            <Box color="#FFFF">nicolamarshall9999@gmail.com</Box>
          </Box>
          <Box  ml="50" mt="15">
            <Box fontSize='xl' fontWeight="extrabold">Phone Number</Box>
            <Box color="#FFFF">+855 61 269 851</Box>
          </Box>
        </Box>
    </SimpleGrid> */}
     <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px" >
          {/* <Center bg="white.500"  as="button" boxShadow="md"  color="white" >
             <Box borderBottomRadius="md" color="pink.500" p="5px">
                <Box textAlign="justify" noOfLines={10}>
                 <FormEmail title="GET IN TOUCH" />
                </Box>
            </Box>
          </Center> */}
          <Center bg='pink.500'  as="button" boxShadow="md"  color="white" >
             <Box borderBottomRadius="md" color="pink.200" p="5px">
                <Box  ml="50" mt="20">
                <Box fontSize='xl' fontWeight="extrabold">Nicola Marshall-Sauvage</Box>
                <Box color="#FFFF">Siem Reap</Box>
              </Box>
              <Box  ml="50" mt="15">
                <Box fontSize='xl' fontWeight="extrabold">Email Address</Box>
                <Box color="#FFFF">nicolamarshall9999@gmail.com</Box>
              </Box>
              <Box  ml="50" mt="15">
                <Box fontSize='xl' fontWeight="extrabold">Phone Number</Box>
                <Box color="#FFFF">+855 61 269 851</Box>
              </Box>
            </Box>
          </Center>
      </SimpleGrid>
</Box>
  );
}
 
export default Contact;