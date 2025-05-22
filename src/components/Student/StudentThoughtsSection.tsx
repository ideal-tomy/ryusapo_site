import React from 'react';
import { Box, SimpleGrid, Image, Stack } from '@chakra-ui/react';

// import studentsBoy from 'assets/images/students_boy.png'; // Removed
// import studentsGirl from 'assets/images/students_girl03.png'; // Removed
// import studentsBoyGirl from 'assets/images/students_boy_girl.png'; // Removed

const fluffyBalloonStyle = {
  position: 'relative',
  bg: 'white',
  borderRadius: '40% / 50%',
  border: '2.5px solid #3b5998',
  p: 4,
  mb: 4,
  textAlign: 'center',
  color: 'black',
  fontWeight: 'normal',
  boxShadow: 'none',
  _after: {
    content: '""',
    position: 'absolute',
    bottom: '-18px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '36px',
    height: '28px',
    background: 'white',
    border: '2.5px solid #3b5998',
    borderTop: 'none',
    borderRadius: '0 0 50% 50%/0 0 100% 100%',
    zIndex: 1,
  },
};

export const StudentThoughtsSection = () => (
  <Box py={8} bg="gray.50">
    <Stack spacing={8} maxW="container.lg" mx="auto">
      <SimpleGrid columns={1} spacing={0}>
        <Image src="/images/thinking02.png" alt="男子高校生" width="100%" height="auto" />
      </SimpleGrid>
    </Stack>
  </Box>
); 