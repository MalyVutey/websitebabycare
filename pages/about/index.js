import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Wrap, WrapItem } from "@chakra-ui/react"
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

  return {
    props: {
      aboutdata: res.items
    },
    revalidate: 1
  }
}
const About = ({aboutdata}) => {
 return ( 
  <Box bg={"#FFFF"}>
  <Head>
    <title>About</title>
     <meta name="keywords" content="ninjas" />
   </Head>
    <Flex color="white">
      <Square size="350px">
      <Image
          borderRadius="full"
          boxSize="300px"
          src={aboutdata[0].fields.image.fields.file.url}
          alt="Segun Adebayo"
        />
      </Square>
      <Box mt="15">
        <Center h="50px" color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold"> {aboutdata[1].fields.title}</Text> 
        </Center>
        <Center color="black" textAlign="justify" p={4}>
         {documentToReactComponents(aboutdata[1].fields.body)}
        </Center>
      </Box>
    </Flex>
    <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
      <Center h="50px" color="white">
        <Text fontSize="2xl" color="black" fontWeight="extrabold"> {aboutdata[0].fields.title}</Text> 
      </Center>
      <Box textAlign="justify">
      {documentToReactComponents(aboutdata[1].fields.body)}
      </Box>
    </GridItem>
  </Box>
  );
}
 
export default About;