import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react"
// import Image from 'next/image'
import { Grid, GridItem,Box, Text,Center } from "@chakra-ui/react"
import { Flex, Spacer,Square,Image } from "@chakra-ui/react"
import { createClient } from 'contentful'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export async function getStaticProps() {
  const client = createClient({
    space: "tv804lyjxtpt",
    accessToken:"uJSHOdqNGgrmX6l6TxTUhSbbStRnK4qzB-GR8zUpwr0",
  })
  const res = await client.getEntries({content_type: "about" })
  const converImage = await client.getEntries({content_type: "converImage"})
    return {
      props: {
        aboutdata: res.items,
        converImage: converImage.items
      },
      revalidate: 1
    }
  }
const About = ({aboutdata,converImage}) => {
  const imageSize = {
    sm: "50px",
    md: "150px",
    lg: "200px",
    xl: "250px",
    "2xl": "300px",
  }
  const boxImage = {
    sm: "50px",
    md: "150px",
    lg: "200px",
    xl: "250px",
    "2xl": "300px",
  }
  const widthProfile = {
    sm: "50px",
    md: "150px",
    lg: "200px",
    xl: "250px",
    "2xl": "700px",
  }
 return ( 
  <Box bg={"#FFFF"}>
  <Head>
    <title>About</title>
     <meta name="keywords" content="ninjas" />
   </Head>
     <Box>
          <Image  src={"https:"+converImage[0]?.fields?.image?.fields?.file?.url} alt="log"/>
      </Box>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px" >
          <Center bg="white.500"  as="button" boxShadow="md"  color="white" >
             <Box borderBottomRadius="md" color="pink.500" p="5px">
             <Square size={boxImage}>
              <Image
                  borderRadius="full"
                  boxSize={imageSize}
                  src={"https:"+aboutdata[0]?.fields?.image?.fields?.file?.url}
                  alt="Segun Adebayo"
                />
              </Square>
            </Box>
          </Center>
          <Center bg="white.500"  as="button" boxShadow="md"  color="white" >
             <Box borderBottomRadius="md" color="pink.500" p="5px">
              <Center h="50px" color="white">
                <Text fontSize="2xl" color="black" fontWeight="extrabold"> {aboutdata[0].fields.title}</Text> 
              </Center>
              <Center color="black" textAlign="justify" p={4}>
                  {aboutdata[0].fields.bodys}
              </Center>
            </Box>
          </Center>
    </SimpleGrid>
    {/* <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
      <Center h="50px" color="white">
        <Text fontSize="2xl" color="black" fontWeight="extrabold"> {aboutdata[1].fields.title}</Text> 
      </Center>
      <Box textAlign="justify">
       {aboutdata[1].fields.bodys}
      </Box>
    </GridItem> */}
  </Box>
  );
}
 
export default About;