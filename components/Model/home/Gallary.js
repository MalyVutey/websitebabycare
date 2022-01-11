import React from 'react'
import img1 from '../../../image/img1.jpg'
import img2 from '../../../image/img2.jpg'
import img3 from '../../../image/img3.jpg'
import img4 from '../../../image/img6.jpg'
import img5 from '../../../image/img7.jpg'
import img6 from '../../../image/img6.jpg'
import img7 from '../../../image/img7.jpg'
import img8 from '../../../image/img8.jpg'
import img9 from '../../../image/img8.jpg'
import Image from 'next/image'
import { SimpleGrid,Center} from '@chakra-ui/react'
export async function getStaticProps() {
    const client = createClient({
      space: "tv804lyjxtpt",
      accessToken:"uJSHOdqNGgrmX6l6TxTUhSbbStRnK4qzB-GR8zUpwr0",
    })
    const res = await client.getEntries({content_type: "gallary" })
  
    return {
      props: {
        gallarys: res.items
      },
      revalidate: 1
    }
  }
function Gallary({gallarys}) {
    console.log(gallarys)
    return (
        <>
        <SimpleGrid mt="5" columns={[2, null, 4]} spacing="20px">
          {/* <Center onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} h="200">
          {isHovering ? (
          <Image h={350} width={200} src={img1} alt="Segun Adebayo"/>
          ) : (
          <Image h={200}   src={img1} alt="Segun Adebayo"/>
          )}
          </Center> */}
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
        </>
    )
}

export default Gallary
