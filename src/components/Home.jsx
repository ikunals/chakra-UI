import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} h={'100vh'}>
          <Image src={img2} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'White'}
            {...headingOptions}
            size={['2xl', '4xl']}
          >
            Watch the Future
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img1} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'White'}
            {...headingOptions}
            size={['2xl', '4xl']}
          >
            Future of Gaming
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img3} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'White'}
            {...headingOptions}
            size={['2xl', '4xl']}
          >
            Gaming on console
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img4} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'White'}
            {...headingOptions}
            size={['2xl', '4xl']}
          >
            NightLife gaming
          </Heading>
        </Box>
      </Carousel>
    </>
  );
};

function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'Uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(-130degree)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            beatae quod a deleniti earum unde illum velit! Temporibus voluptate
            fugiat incidunt iure voluptatum consectetur saepe eos atque, vero,
            sunt nobis non quae tempore corrupti consequuntur numquam odit qui
            obcaecati illo. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae ipsa nemo voluptate ut vel illo atque laudantium
            veniam exercitationem recusandae in nulla quam, nisi ad quos neque
            doloremque mollitia soluta cum aut perferendis. Eveniet deleniti
            blanditiis alias et quis nisi!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
