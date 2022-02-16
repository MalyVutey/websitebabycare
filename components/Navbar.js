import Link from 'next/link'
import React, { useEffect,useState,useRef } from 'react'
import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react"
import { Stack, HStack, VStack,Radio,RadioGroup,Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Image from 'next/image'
import logo from "../image/logo.jpg"
import { useLocation } from 'react-router-dom';
import { Grid, GridItem,Box, Text,Center,Container,Input  } from "@chakra-ui/react"
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useRouter } from "next/router";

const Navbar = () => {
  const location = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState("left")
  const btnRef = useRef()
  console.log(location.pathname);
  const size = {
    sm: "50px",
    md: "150px",
    lg: "200px",
    xl: "250px",
    "2xl": "300px",
  }
 return ( 

<Flex display={{sm:"block",xl: "block"}}>
<Grid templateColumns='repeat(1, 1fr)' gap={4}>
  <GridItem w='100%' p="2" bg={"pink.300"}>
    <Image
        src={logo}
        alt="Picture of the author"
        width={50}
        height={50}
      />
    <Center width="50px"  bg={"white"} h="3px" marginBottom="5px"></Center>
    {/* <Center   bg={"red.500"} h="3px" marginBottom="5px"></Center> */}
    <Center  bg={"white"} h="3px"></Center>
  </GridItem>
  </Grid>
<Grid p="5"   
    borderTop='1px'
    borderBottom="1px"
    borderColor="red.500" templateColumns='repeat(8, 1fr)' gap={6}>
 
  <Link  href="/">
    <GridItem w='100%' p="2" 
    as="button"
    bg={location.pathname=== "/"? "pink.400": ""}
    borderRadius="12"
    border='1px'
    borderColor="red.500"
     >
        <Center  color={location.pathname=== "/"? "#FFFF": "pink.500"}>HOME</Center>
    </GridItem>
  </Link>
  <Link href="/about">
    <GridItem w='100%' p="2" 
    as="button"
    bg={location.pathname=== "/about"? "pink.400": ""}
    borderRadius="12"
    border='1px'
    borderColor="red.500">
        <Center  color={location.pathname=== "/about"? "#FFFF": "pink.500"}>ABOUT</Center>
    </GridItem>
  </Link>
  <Link href="/service">
    <GridItem w='100%' p="2" 
    as="button"
    bg={location.pathname=== "/service"? "pink.500": ""}
    borderRadius="12"
    border='1px'
    borderColor="red.500" >
        <Center  color={location.pathname=== "/service"? "#FFFF": "pink.500"}>SERVICES</Center>
    </GridItem>
  </Link>
  <Link href="/contact" >
    <GridItem w='100%' p="2" 
     as="button"
     bg={location.pathname=== "/contact"? "pink.500": ""}
     borderRadius="12"
     border='1px'
     borderColor="red.500" >
        <Center  color={location.pathname=== "/contact"? "#FFFF": "pink.500"}>CONTACT</Center>
    </GridItem>
  </Link>
  {/* <Link href="/admin">
    <GridItem w='100%' p="2" 
     bg={location.pathname=== "/admin"? "pink.500": ""}
     borderRadius="12"
     border='1px'
     borderColor="red.500" >
        <Center  color={location.pathname=== "/admin"? "#FFFF": "pink.500"}>ADMIN</Center>
    </GridItem>
  </Link> */}
</Grid>
</Flex>

  );
}
 
export default Navbar;