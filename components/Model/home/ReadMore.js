import React from 'react'
import { 
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalCloseButton,
 ModalBody,
 ModalFooter,
 Button,
 useDisclosure } from "@chakra-ui/react";
 import { Grid, GridItem,Image, Text,Center,Container,SimpleGrid  } from "@chakra-ui/react"
 import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function ReadMore({data}) {
 const { isOpen, onOpen, onClose } = useDisclosure()

 return (
  <>
   <Center w="100%" as="button" bg="pink.500" 
   color="white" rounded="md"  
   onClick={onOpen}>
    Read more</Center>

<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>{data.titile}</ModalHeader>
    <ModalCloseButton />
    <Center>
     {/* <Image 
        boxSize="300px"
        src={data.image.fields.file.url}
        alt="cart more"
       /> */}
    </Center>
    <ModalBody pb={6} textAlign="justify">
     <Text fontWeight='bold' mb='1rem'> You can scroll the content behind the modal</Text>
       {documentToReactComponents(data.body)}
    </ModalBody>
    <ModalFooter>
      <Button onClick={onClose} variant='ghost'>Back Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
  </>
 )
}

export default ReadMore