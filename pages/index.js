import react ,{useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'
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
import { createClient } from 'contentful'
import { Image } from '@chakra-ui/react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import React from 'react'
export async function getStaticProps() {
  const client = createClient({
    space: "tv804lyjxtpt",
    accessToken:"uJSHOdqNGgrmX6l6TxTUhSbbStRnK4qzB-GR8zUpwr0",
  })
  const res = await client.getEntries({content_type: "supportICanOffer" })
  const resgallary = await client.getEntries({content_type: "gallary" })
  const resmyImageAction = await client.getEntries({content_type: "myImageAction" })

  return {
    props: {
      supportICanOffers: res.items,
      Gallary :resgallary.items,
      resmyImageActions: resmyImageAction.items
    },
    revalidate: 1
  }
}
export default function Home({supportICanOffers,Gallary,resmyImageActions}) {
  // #FF69B4
const width_Box = {
  sm: "350px",
  md: "150px",
  lg: "200px",
  xl: "300px",
  "2xl": "400px",
}




 
  return (
    <Box bg={"#FFFF"}>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      {/* How can i support you */}
      {/* <Center  bg="pink.500" h="50px" color="white" mb="10px" mt="10px">
       <Text fontSize="2xl" fontWeight="extrabold">How Can I Support You</Text> 
      </Center> */}
      {/* <Grid h="500px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}mb={10}>
        <GridItem rowSpan={2} colSpan={2} boxShadow="md" p="6" rounded="md" bg="white">
          <Image  src={nickywebsites[0].fields.image.fields.file.url} alt="Segun Adebayo"/>
          <Center h="50px" color="white">
            <Text fontSize="2xl" color="black" fontWeight="extrabold">
              {nickywebsites[0].fields.title}
              </Text> 
          </Center>
          <Container  textAlign="justify">
           {nickywebsites[0].fields.body}
          </Container>
        </GridItem>
        <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Image src={nickywebsites[1].fields.image.fields.file.url} alt='Dan Abramov' />
        </GridItem>
        <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center h="50px" color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">
             {nickywebsites[1].fields.title}
             </Text> 
          </Center>
          <Container  textAlign="justify">
            {nickywebsites[1].fields.body}
          </Container>
        </GridItem>
      </Grid>  */}
      {/* small bottom  */}
      {/* <SimpleGrid mt="14" columns={[1, null, 2]} spacing="20px">
          <Center  borderRadius="5" bg="pink.500"  as="button" boxShadow="md"  h="10" color="white">
            <SupportOffer />
          </Center>
          <Center  bg="pink.500"  as="button" boxShadow="md"  h="10" color="white">
            <OutProject/>
          </Center>
          <Center borderRadius="5" bg="pink.500"  as="button" boxShadow="md"  h="10" color="white">
            <FormEmail title="Contact" />
          </Center>
      </SimpleGrid> */}
      {/* packages available  */}
      <SimpleGrid minChildWidth="120px" spacing="40px" >
          <Center p="5" fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">SUPPORT I CAN OFFER</Center>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px" height="500px" >
        {/* cart one */}
        {supportICanOffers?.map((item,ind)=>{
          return(
            <Box  key={ind} boxShadow="md" bg="#FFFF" w={width_Box}  rounded="md" >
            <Box>
              <Image  h={200} src={item.fields.image.fields.file.url} alt="Segun Adebayo"/>
            </Box>
            <Box  borderBottomRadius="md" color="pink.500" p="5px">
              <Center fontWeight="extrabold">{item.fields.title} </Center>
              <Box textAlign="justify" noOfLines={6}>
                {documentToReactComponents(item.fields.body)}
              </Box>
              <Center w="100%" as="button" bg="pink.500" color="white" rounded="md">
                <ReadMore data={item.fields}/>
              </Center>
            </Box>
          </Box>
          )
        })}
        {/* cart end */}
      </SimpleGrid>
      {/* Gallery */}
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px">
          <Center p="3" fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">Gallery</Center>
      </SimpleGrid>
      <SimpleGrid mt="5" columns={[2, null, 4]} spacing="20px">
          {Gallary?.map((item,index)=>{
            return(
            <Center key={index}  bg="white.500"  as="button" boxShadow="md"  h="200" color="white">
               <Image h={200} src={item.fields.image.fields.file.url} alt="Segun Adebayo"/>
            </Center>
            )
          })}
      </SimpleGrid>
      <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center h="50px" color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">{resmyImageActions[0]?.fields?.title}</Text> 
          </Center>
          <Box textAlign="justify" >
          {documentToReactComponents(resmyImageActions[0].fields.body)}
          </Box>
        </GridItem>
    </Box>
  )
}
