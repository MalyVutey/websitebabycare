import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { Center,Container } from "@chakra-ui/react";
import Image from 'next/image'
import logo from "../image/logo.jpg"
import img1  from "../image/1.jpg"
const Layout = ({children}) => {
  const images = [
    { url: img1 },
    { url: "https://www.southcountyhealth.org/media/service-line-photos/home-health/baby-mother-sleep-home.jpg" },
    { url: "https://calendarmedia.blob.core.windows.net/assets/bb1f4c99-1fc3-4f23-ac0e-de7422969941.jpg" },
    { url: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue186/baby-products_100.jpg" },
    { url: "https://charissfamily.com/wp-content/uploads/2020/02/How-to-Choose-a-Paediatrician-for-Your-New-Baby-2048x1024.jpeg" },
    { url: "https://sahyadrihospital.com/wp-content/uploads/2021/04/Newborns-Babies-Diseases.jpg" },
    { url: "https://www.wfmedia.com.au/wp-content/uploads/2018/08/AdobeStock_83836256-550x325.jpg" },
  ];
 return ( 
   <>
   <Navbar/>
   <div className="content">
   
     <Container className={styles.container}>
      
      {/* <Center bg="red">
        <Image width="100%" height="100%" src={logo} alt="log"/>
      </Center> */}
      <Center>
          <SimpleImageSlider
            width={896}
            height={400}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            loop={true}
          />
        </Center>
        {children}
        <Footer/>
      </Container>
   </div>
  </>
   
  );
}
 
export default Layout;