import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { Box, Center,Container } from "@chakra-ui/react";
import Image from 'next/image'
import logo from "../image/logo.jpg"
import img1  from "../image/1.jpg"

const Layout = ({children}) => {
  const images = [
    { url: "https://firebasestorage.googleapis.com/v0/b/nicky-12f15.appspot.com/o/Artboard%201%401%2C25x.png?alt=media&token=e82a559b-e0d4-4ef2-ae37-31634d29996f" },
    { url: "https://calendarmedia.blob.core.windows.net/assets/bb1f4c99-1fc3-4f23-ac0e-de7422969941.jpg" },
    { url: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue186/baby-products_100.jpg" },
    { url: "https://www.wfmedia.com.au/wp-content/uploads/2018/08/AdobeStock_83836256-550x325.jpg" },
    { url: "https://sahyadrihospital.com/wp-content/uploads/2021/04/Newborns-Babies-Diseases.jpg" },
    { url: "https://www.wfmedia.com.au/wp-content/uploads/2018/08/AdobeStock_83836256-550x325.jpg" },
  ];
 return ( 
   <Box bg={"#FFFF"}>
   <Navbar/>
   <div className="content">
     <Container className={styles.container}>
      <Box>
          <SimpleImageSlider
            width={"76.6%"}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            loop={true}
          />
        </Box>
        {children}
        <Footer/>
      </Container>
   </div>
  </Box>
   
  );
}
 
export default Layout;