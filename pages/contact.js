import Head from 'next/head'
import { Grid, SimpleGrid,Box, Text,Center,Image } from "@chakra-ui/react"
import FormEmail from '../components/Model/contact/FormEmail';
import { createClient } from 'contentful'
import Footer from '../components/Footer';
export async function getStaticProps() {
  const client = createClient({
    space: "tv804lyjxtpt",
    accessToken:"uJSHOdqNGgrmX6l6TxTUhSbbStRnK4qzB-GR8zUpwr0",
  })
  const converImage = await client.getEntries({content_type: "converImage"})
    return {
      props: {
        converImage: converImage.items
      },
      revalidate: 1
    }
  }
const Contact = ({converImage}) => {
 return ( 
  <Box bg={"#FFFF"}>
  <Head>
    <title>Contact</title>
     <meta name="keywords" content="ninjas" />
   </Head>
     <Box>
          <Image  src={"https:"+converImage[0]?.fields?.image?.fields?.file?.url} alt="log"/>
      </Box>
     <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px" >
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
      <Footer/>
 </Box>
  );
}
 
export default Contact;