import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { Box, Center,Container } from "@chakra-ui/react";
import Image from 'next/image'
import logo from "../image/logo.jpg"
import cover  from "../image/cover.png"
import img1  from "../image/1.jpg"

const Layout = ({children}) => {
 return ( 
   <Box bg={"#FFFF"}>
   <Navbar/>
   <div className="content">
     <Container className={styles.container}>
      <Box>
          {/* <SimpleImageSlider
            width={"76.6%"}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            loop={true}
          /> */}
           <Image   src={img1} alt="log"/>
        </Box>
        {children}
        <Footer/>
      </Container>
   </div>
  </Box>
   
  );
}
 
export default Layout;