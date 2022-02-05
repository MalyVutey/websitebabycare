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

      // <Flex display={{sm:"none",xl: "block"}}>
      //     <Box>
      //        <Center 
      //         color={location.pathname=== "/"? "#FFFF": ""}
      //         bg={location.pathname=== "/"? "pink.500": ""}>
      //          <Link href="/">Home</Link>
      //        </Center>
      //     </Box>
      //     <Box>
      //       <Center
      //        color={location.pathname=== "/about"? "#FFFF": ""}
      //        bg={location.pathname=== "/about"? "pink.500": ""}>
      //         <Link href="/about">About</Link>
      //       </Center>
      //     </Box>
      //     <Box> 
      //       <Center
      //        color={location.pathname=== "/service"? "#FFFF": ""}
      //        bg={location.pathname=== "/service"? "pink.500": ""}>
      //         <Link href="/service">Service</Link>
      //       </Center>
      //       </Box>
      //     <Box> 
      //       <Center
      //        color={location.pathname=== "/contact"? "#FFFF": ""}
      //        bg={location.pathname=== "/contact"? "pink.500": ""}>
      //        <Link href="/contact">Contact</Link>
      //       </Center>
      //     </Box>
      // </Flex>

<Grid templateColumns='repeat(4, 1fr)' gap={6}>
  <Link href="/">
    <GridItem w='100%' p="2" bg='pink.500' >
        <Center>home</Center>
    </GridItem>
  </Link>
  <Link href="/service">
    <GridItem w='100%' p="2" bg='pink.500' >
        <Center>service</Center>
    </GridItem>
  </Link>
  <Link href="/contact">
    <GridItem w='100%' p="2" bg='pink.500' >
        <Center>contact</Center>
    </GridItem>
  </Link>
  <Link href="/about">
    <GridItem w='100%' p="2" bg='pink.500' >
        <Center>about</Center>
    </GridItem>
  </Link>
</Grid>

  );
}
 
export default Navbar;