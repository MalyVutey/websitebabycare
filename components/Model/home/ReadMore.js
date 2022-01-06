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
    <ModalHeader>What Can I Help You</ModalHeader>
    <ModalCloseButton />
    <Center>
     <Image 
       
        boxSize="300px"
        src={data.imageUrl}
        alt="cart more"
       />
    </Center>
    <ModalBody pb={6} textAlign="justify">
     <Text fontWeight='bold' mb='1rem'> You can scroll the content behind the modal</Text>
       {data.detail}
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