import react ,{useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import img from '../image/img1.jpg'
import nurs from '../image/nurs.jpeg'
import nurs1 from '../image/img1.jpg'
import img1 from '../image/img1.jpg'
import img2 from '../image/img2.jpg'
import img3 from '../image/img3.jpg'
import img4 from '../image/img6.jpg'
import img5 from '../image/img7.jpg'
import img6 from '../image/img6.jpg'
import img7 from '../image/img7.jpg'
import img8 from '../image/img8.jpg'
import img9 from '../image/img8.jpg'
import { position, Wrap, WrapItem } from "@chakra-ui/react"
import { Flex, Spacer,Square } from "@chakra-ui/react"
import { Grid, GridItem,Box,Link, Text,Center,Container,SimpleGrid  } from "@chakra-ui/react"
import ReadMore from '../components/Model/home/ReadMore'
import { FormProvider } from 'antd/lib/form/context'
import FormEmail from '../components/Model/contact/FormEmail'
import SupportOffer from '../components/Model/home/SupportOffer'
import OutProject from '../components/Model/home/OutProject'
export default function Home() {
  // #FF69B4
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const data1 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    detail: " Data1 are many benefits to a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production",
  
  }
  const data2 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    detail: " Data2 are many benefits to a joint design and development system. Not onlydoesto a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in productionto a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in productionto a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production",
  
  }
  const data3 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    detail: " Data3 are many benefits to a joint design and development system. Not onlydoes it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent lookand feel, not just in our design specs, but in production",
  
  }
 
  return (
    <>
      <Head>
        <title>Vutey rin || Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      {/* How can i support you */}
      <Center  bg="pink.500" h="50px" color="white" mb="10px" mt="10px">
       <Text fontSize="2xl" fontWeight="extrabold">How Can I Support You</Text> 
      </Center>
      <Grid h="500px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}mb={10}>
        {/* About */}
        <GridItem rowSpan={2} colSpan={2} boxShadow="md" p="6" rounded="md" bg="white">
          <Image  src={nurs} alt="Segun Adebayo"/>
          <Center h="50px" color="white">
            <Text fontSize="2xl" color="black" fontWeight="extrabold">About Me</Text> 
          </Center>
          <Container  textAlign="justify">
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams.
          </Container>
        </GridItem>
        {/* my work  */}
        <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
         <Image src={nurs} alt="Segun Adebayo"/>
        </GridItem>
        <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center h="50px" color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">My Work</Text> 
          </Center>
          <Container  textAlign="justify">
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
          </Container>
        </GridItem>
      </Grid> 
      {/* small bottom  */}
      <SimpleGrid mt="14" columns={[1, null, 2]} spacing="20px">
          {/* <Center  borderRadius="5" bg="pink.500"  as="button" boxShadow="md"  h="10" color="white">
            <SupportOffer />
          </Center> */}
          <Center  bg="pink.500"  as="button" boxShadow="md"  h="10" color="white">
            <OutProject/>
          </Center>
          {/* <Center borderRadius="5" bg="pink.500"  as="button" boxShadow="md"  h="10" color="white">
            <FormEmail title="Contact" />
          </Center> */}
      </SimpleGrid>
      {/* packages available  */}
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
          <Center fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">SUPPORT I CAN OFFER</Center>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
        {/* cart one */}
        <Box boxShadow="md" bg="#FFFF" height="500px" rounded="md" >
          <Box><Image h={200} src={img2} alt="Segun Adebayo"/></Box>
          <Box h="70px" borderBottomRadius="md" color="pink.500" p="5px">
            <Center fontWeight="extrabold">Antenatal</Center>
            <Box textAlign="justify">
              {(data1.detail).substring(0, 200)}...
            </Box>
            <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
              <ReadMore data={data1}/>
            </Center>
          </Box>
        </Box>
        {/* cart two */}
        <Box boxShadow="md" bg="#FFFF" height="500px" rounded="md">
          <Box><Image h={200} src={img3} alt="Segun Adebayo"/></Box>
          <Box h="70px" borderBottomRadius="md" color="pink.500" p="5px">
            <Center fontWeight="extrabold">Postnatal & Infant support</Center>
            <Box textAlign="justify">
            {(data2.detail).substring(0, 200)}...
            </Box>
            <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
              <ReadMore data={data2}/>
            </Center>
          </Box>
        </Box>
        {/* cart three */}
        <Box boxShadow="md" bg="#FFFF" height="500px" rounded="md">
          <Box><Image h={200} src={img4} alt="Segun Adebayo"/></Box>
          <Box h="70px" borderBottomRadius="md" color="pink.500" p="5px">
            <Center fontWeight="extrabold">Birth support</Center>
            <Box textAlign="justify">
            {(data3.detail).substring(0, 200)}...
            </Box>
            <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
              <ReadMore data={data3}/>
            </Center>
          </Box>
        </Box>
      </SimpleGrid>
      {/* Gallery */}
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
          <Center p="3" fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">Gallery</Center>
      </SimpleGrid>
      <SimpleGrid mt="5" columns={[2, null, 4]} spacing="20px">
          <Center onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} h="200">
          {isHovering ? (
          <Image h={350} width={200} src={img1} alt="Segun Adebayo"/>
          ) : (
          <Image h={200}   src={img1} alt="Segun Adebayo"/>
          )}
          </Center>
          <Center  bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img2} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img3} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img4} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img5} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img6} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img7} alt="Segun Adebayo"/>
          </Center>
          <Center  bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
           <Image h={200} src={img8} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img9} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img1} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img2} alt="Segun Adebayo"/>
          </Center>
          <Center   bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
            <Image h={200} src={img3} alt="Segun Adebayo"/>
          </Center>
      </SimpleGrid>
      {/* <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
          <Center p="3" fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">Gallery</Center>
      </SimpleGrid> */}
      <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center h="50px" color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">My Image Action</Text> 
          </Center>
          <Box  textAlign="justify">
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
  )
}
