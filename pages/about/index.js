import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Wrap, WrapItem } from "@chakra-ui/react"
import Image from 'next/image'
import { Grid, GridItem,Box, Text,Center } from "@chakra-ui/react"
import nurs from '../../image/nurs.jpeg'
import nurs1 from '../../image/nurs.jpeg'
import img2 from '../../image/img2.jpg'
import { Flex, Spacer,Square } from "@chakra-ui/react"
const About = () => {
 return ( 
  <>
  <Head>
    <title>Vutey rin || About</title>
     <meta name="keywords" content="ninjas" />
   </Head>
    <Flex color="white">
      <Square size="350px">
      <Image
          borderRadius="full"
          boxSize="300px"
          src={nurs}
          alt="Segun Adebayo"
        />
      </Square>
      <Box mt="15">
        <Center h="50px" color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">About Me</Text> 
        </Center>
        <Center color="black" textAlign="justify">
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team, but it also brings benefits to
          engineering teams. It makes sure that our experiences have a consistent look
          and feel, not just in our design specs, but in production
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team, but it also brings benefits to
          engineering teams. It makes sure that our experiences have a consistent look
          and feel, not just in our design specs, but in production
        </Center>
      </Box>
    </Flex>
    <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
      <Center h="50px" color="white">
        <Text fontSize="2xl" color="black" fontWeight="extrabold">What do you want to know from me</Text> 
      </Center>
      <Box textAlign="justify">
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team, but it also brings benefits to
          engineering teams. It makes sure that our experiences have a consistent look
          and feel, not just in our design specs, but in production
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team, but it also brings benefits to
          engineering teams. It makes sure that our experiences have a consistent look
          and feel, not just in our design specs, but in production
      </Box>
    </GridItem>
  </>
  );
}
 
export default About;