import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  color,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Head() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme="blue"
        p={0}
        w={10}
        h={10}
        onClick={isOpen ? onClose : onOpen}
      >
        <BiMenuAltLeft size={20} />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>VideoHub</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} colorScheme="blue">
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button onClick={onClose} colorScheme="blue">
                  <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button onClick={onClose} colorScheme="blue">
                  <Link to={'/videos?category=free'}>free Videos</Link>
                </Button>
                <Button onClick={onClose} colorScheme="blue">
                  <Link to={'/upload'}>Upload Videos</Link>
                </Button>
              </VStack>
              <HStack pos={'absolute'} paddingTop={10}>
                <Button onClick={onClose} colorScheme="blue">
                  <Link to="/logIn">Log In</Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme="blue"
                  variant={'outline'}
                  _
                >
                  <Link to="/signUp">Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Button>
    </>
  );
}

export default Head;
