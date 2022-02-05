import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Grid,Image, GridItem,Box, Text,Center,Container,SimpleGrid  } from "@chakra-ui/react"

import { createClient } from 'contentful'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CartDetail from '../../components/Model/service/CartDetail'
export async function getStaticProps() {
  const client = createClient({
    space: "tv804lyjxtpt",
    accessToken:"uJSHOdqNGgrmX6l6TxTUhSbbStRnK4qzB-GR8zUpwr0",
  })
  const res = await client.getEntries({content_type: "aboutService" })
  const supportAvailable = await client.getEntries({content_type: "supportAvailable" })
  const converImage = await client.getEntries({content_type: "converImage"})
  
  return {
    props: {
      aboutServices: res.items,
      supportAvailables: supportAvailable.items,
      converImage: converImage.items
    },
    revalidate: 1
  }
}
const Service = ({aboutServices,supportAvailables,converImage}) => {



 return ( 
  <Box bg={"#FFFF"}>
  <Head>
    <title>Service</title>
     <meta name="keywords" content="ninjas" />
   </Head>
    <Box>
          <Image  src={"https:"+converImage[0]?.fields?.image?.fields?.file?.url} alt="log"/>
      </Box>
     <Center  bg="pink.500"  color="white" mb="10px">
       <Text fontSize="2xl" fontWeight="extrabold">Midwifery Services Cambodia</Text> 
      </Center>
      <Grid>
        {/* my work  */}
        <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">{aboutServices[0].fields.title}</Text> 
          </Center>
          <Center  textAlign="justify">
           {aboutServices[0].fields.body}
          </Center>
        </GridItem>
      </Grid> 
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
          <Center fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">SUPPORT AVAILABLE</Center>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px" p={3}>
        {/* cart one */}
        {supportAvailables?.map((item,ind)=>{
          return(
            <Center  key={ind}  bg="white.500"  as="button" boxShadow="md"  color="white" >
            <Box borderBottomRadius="md" color="pink.500" p="5px">
             <Image src={item.fields.image.fields.file.url} alt="Segun Adebayo"/>
              <Center fontWeight="extrabold">{item.fields.title}</Center>
              <Box textAlign="justify" noOfLines={10}>
               {item.fields.body}
              </Box>
              <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
               <CartDetail data={item.fields}/>
              </Center>
            </Box>
          </Center>
     
          )
        })}

      </SimpleGrid>
</Box>
  );
}
 
export default Service;