import react ,{useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'
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
import Footer from '../components/Footer'
export async function getStaticProps() {
  const client = createClient({
    space: "tv804lyjxtpt",
    accessToken:"uJSHOdqNGgrmX6l6TxTUhSbbStRnK4qzB-GR8zUpwr0",
  })
  const res = await client.getEntries({content_type: "supportICanOffer" })
  const resgallary = await client.getEntries({content_type: "gallary" })
  const resmyImageAction = await client.getEntries({content_type: "myImageAction" })
  const converImage = await client.getEntries({content_type: "converImage"})
  return {
    props: {
      supportICanOffers: res.items,
      Gallary :resgallary.items,
      resmyImageActions: resmyImageAction.items,
      converImage : converImage.items
    },
    revalidate: 1
  }
}
export default function Home({supportICanOffers,Gallary,resmyImageActions,converImage}) {
  // #FF69B4
const width_Box = {
  sm: "250px",
  md: "150px",
  lg: "200px",
  xl: "300px",
  "2xl": "460px",
}

// console.log(converImage[0]?.fields?.image?.fields?.file?.url,"testin image")


 
  return (
    <Box bg={"#FFFF"}>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <Box>
          <Image  src={"https:"+converImage[0]?.fields?.image?.fields?.file?.url} alt="log"/>
      </Box>
      <SimpleGrid minChildWidth="120px" spacing="40px" >
          <Center p="5" fontSize="20" fontWeight="extrabold" borderBottomWidth="3px" borderBottomColor="pink.500">SUPPORT I CAN OFFER</Center>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="20px" >
        {/* cart one */}
        {supportICanOffers?.map((item,ind)=>{
          return(
            <Center  key={ind}  as="button" boxShadow="md"  color="white" >
             <Box borderBottomRadius="md" p="5px">
               <Image src={"https:"+item?.fields?.image?.fields?.file?.url} alt="Segun Adebayo"/>
                <Center color="pink.500" fontWeight="extrabold">{item?.fields?.title} </Center>
                <Box textAlign="justify" color="pink.500"  noOfLines={10}>
                  {item.fields.body}
                </Box>
                <Center w="100%" as="button"  color="white" rounded="md">
                  <ReadMore data={item?.fields}/>
              </Center>
            </Box>
          </Center>
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
            <Center key={index}  bg="white.500"  as="button" boxShadow="md"  color="white">
              <Box borderBottomRadius="md" color="pink.500" p="5px">
               <Image src={"https:"+item?.fields?.image?.fields?.file?.url} alt="Segun Adebayo"/>
              </Box>
            </Center>
            )
          })}
      </SimpleGrid>
      <GridItem colSpan={3} boxShadow="md" p="6" rounded="md" bg="white">
          <Center h="50px" color="white">
           <Text fontSize="2xl" color="black" fontWeight="extrabold">{resmyImageActions[0]?.fields?.title}</Text> 
          </Center>
          <Box textAlign="justify" >
          {resmyImageActions[0].fields.body}
          </Box>
        </GridItem>
      <Footer/>
    </Box>
  )
}
