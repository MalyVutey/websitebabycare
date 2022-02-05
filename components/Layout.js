import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { Box, Center,Container } from "@chakra-ui/react";
import Image from 'next/image'
import logo from "../image/logo.jpg"
import cover  from "../image/cover.png"
import img1  from "../image/1.jpg"
import { createClient } from "contentful";
export async function getStaticProps() {
  const client = createClient({
    space: "tv804lyjxtpt",
    accessToken:"uJSHOdqNGgrmX6l6TxTUhSbbStRnK4qzB-GR8zUpwr0",
  })
  
  const converImage = await client.getEntries({content_type: "converImage"})
  return {
    props: {
      resconverImage : converImage.items
    },
    revalidate: 1
  }
}
const Layout = ({children}) => {
 return ( 
   <Box bg={"#FFFF"}>
   <Navbar/>
   <div className="content">
       {children}
    <Footer/>
   </div>
  </Box>
   
  );
}
 
export default Layout;