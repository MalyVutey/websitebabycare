import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Grid, GridItem,Box, Text,Center,Container,SimpleGrid  } from "@chakra-ui/react"
import nurs  from '../../.next/cache/images/nurs.jpg'
import nurs1  from '../../.next/cache/images/nurs1.jpg'
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
import img4 from '../../image/img6.jpg'
import img5 from '../../image/img7.jpg'
import img6 from '../../image/img6.jpg'
import img7 from '../../image/img7.jpg'
import img8 from '../../image/img8.jpg'
import img9 from '../../image/img8.jpg'
import Image from 'next/image'
import CartDetail from '../../components/Model/service/CartDetail'
const Service = () => {
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
    <title>Vutey rin || Service</title>
     <meta name="keywords" content="ninjas" />
   </Head>
   <Center  bg="pink.500" h="50px" color="white" mb="10px" mt="10px">
       <Text fontSize="2xl" fontWeight="extrabold">Midwifery Services Cambodia</Text> 
      </Center>
      <Grid h="400px">
        {/* my work  */}
        <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">About Service</Text> 
          </Center>
          <Center  textAlign="justify">
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
          </Center>
        </GridItem>
      </Grid> 
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
          <Center fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">SUPPORT AVAILABLE</Center>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
        {/* cart one */}
        <Box boxShadow="md" bg="#FFFF" height="500px" rounded="md" >
          <Box><Image h={200} src={img2} alt="Segun Adebayo"/></Box>
          <Box h="70px" borderBottomRadius="md" color="pink.500" p="5px">
            <Center>Help</Center>
            <Box textAlign="justify">
             {(data1.detail).substring(0, 200)}...
            </Box>
            <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
             <CartDetail data={data1}/>
            </Center>
          </Box>
        </Box>
        {/* cart two */}
        <Box boxShadow="md" bg="#FFFF" height="500px" rounded="md">
          <Box><Image h={200} src={img3} alt="Segun Adebayo"/></Box>
          <Box h="70px" borderBottomRadius="md" color="pink.500" p="5px">
            <Center>Help</Center>
            <Box textAlign="justify">
             {(data2.detail).substring(0, 200)}...
            </Box>
            <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
             <CartDetail data={data2}/>
            </Center>
          </Box>
        </Box>
        {/* cart three */}
        <Box boxShadow="md" bg="#FFFF" height="500px" rounded="md">
          <Box><Image h={200} src={img4} alt="Segun Adebayo"/></Box>
          <Box h="70px" borderBottomRadius="md" color="pink.500" p="5px">
            <Center>Help</Center>
            <Box textAlign="justify">
             {(data3.detail).substring(0, 200)}...
            </Box>
            <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
             <CartDetail data={data3}/>
            </Center>
          </Box>
        </Box>
      </SimpleGrid>
</>
  );
}
 
export default Service;