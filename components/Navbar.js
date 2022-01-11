import Link from 'next/link'
import react, { useEffect,useState } from 'react'
import { useDisclosure } from "@chakra-ui/react"
import { Stack, HStack, VStack,Radio,RadioGroup,Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Image from 'next/image'
import logo from "../image/logo.jpg"
import { Grid, GridItem,Box, Text,Center,Container,Input  } from "@chakra-ui/react"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState("right")
 return ( 
  <nav>
      <div className="containNavbar">
        <div className="logo">
          <Image width={60} height={60}  src={logo} alt="log"/>
        </div>
        <div className="navbar">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/service"><a>Service</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
        <Input p={6} placeholder='search' borderRadius={5} pl="10" w="20%"/>
      </div>
      
  </nav>
  );
}
 
export default Navbar;