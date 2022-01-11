import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Grid,Image, GridItem,Box, Text,Center,Container,SimpleGrid  } from "@chakra-ui/react"
import nurs from '../../image/nurs.jpeg'
import nurs1 from '../../image/nurs.jpeg'
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
import img4 from '../../image/img6.jpg'
import img5 from '../../image/img7.jpg'
import img6 from '../../image/img6.jpg'
import img7 from '../../image/img7.jpg'
import img8 from '../../image/img8.jpg'
import img9 from '../../image/img8.jpg'

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
  
  return {
    props: {
      aboutServices: res.items,
      supportAvailables: supportAvailable.items
    },
    revalidate: 1
  }
}
const Service = ({aboutServices,supportAvailables}) => {




  const data1 = {
    price: 400,
    imageUrl: "https://vnshealthcare.in/img/service/Mother-and-Baby-Care.png",
    detail: " Data1 are many benefits to a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production",
  
  }
  const data2 = {
    price: 300,
    imageUrl: "https://cdn.shopify.com/s/files/1/0443/9159/6186/files/onesie.jpg?v=1613731541",
    detail: " Data2 are many benefits to a joint design and development system. Not onlydoesto a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in productionto a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in productionto a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production",
  
  }
  const data3 = {
    price: 200,
    imageUrl: "https://4.imimg.com/data4/CO/FY/MY-20272032/baby-care-services-500x500.jpg",
    detail: " Data3 are many benefits to a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production",
  
  }

 return ( 
  <>
  <Head>
    <title>Service</title>
     <meta name="keywords" content="ninjas" />
   </Head>
   <Center  bg="pink.500" h="50px" color="white" mb="10px" mt="10px">
       <Text fontSize="2xl" fontWeight="extrabold">Midwifery Services Cambodia</Text> 
      </Center>
      <Grid h="400px">
        {/* my work  */}
        <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">{aboutServices[0].fields.title}</Text> 
          </Center>
          <Center  textAlign="justify">
           {documentToReactComponents(aboutServices[0].fields.body)}
          </Center>
        </GridItem>
      </Grid> 
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
          <Center fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">SUPPORT AVAILABLE</Center>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
        {/* cart one */}
        {supportAvailables?.map((item,ind)=>{
          return(
            <Box key={ind} boxShadow="md" bg="#FFFF" height="500px" rounded="md" >
            <Box><Image h={200} src={item.fields.image.fields.file.url} alt="Segun Adebayo"/></Box>
            <Box h="70px" borderBottomRadius="md" color="pink.500" p="5px">
              <Center ontSize="20" fontWeight="extrabold">{item.fields.title}</Center>
              <Box textAlign="justify" noOfLines={10}>
               {documentToReactComponents(item.fields.body)}
              </Box>
              <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
               <CartDetail data={item.fields}/>
              </Center>
            </Box>
          </Box>
          )
        })}

      </SimpleGrid>
</>
  );
}
 
export default Service;