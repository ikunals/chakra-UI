import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://cdn.videvo.net/videvo_files/video/premium/2018-12/large_watermarked/181125_04_Christmas_24_preview.mp4',
    'https://cdn.videvo.net/videvo_files/video/premium/video0192/large_watermarked/Boy%20with%20binoculars%20lying%20on%20the%20grass_preview.mp4',
    'https://media.istockphoto.com/id/473200987/video/blowing-bubbles-in-the-park.mp4?s=mp4-640x640-is&k=20&c=31Eqv27CG5xm5-41eBFMBiN-Pu6JsgWkzufvGjQ1vB0=',
    'https://media.istockphoto.com/id/1072087456/video/a-child-draws-in-nature.mp4?s=mp4-640x640-is&k=20&c=tOfPwg95nlKquRHcQVgs5uowgeDIGAFxqVljoGGHAEo=',
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Bideo</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            tempora quasi doloribus voluptas, nam aut?
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'Stretch'}
        p={8}
        spacing={8}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme="Blue"
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
