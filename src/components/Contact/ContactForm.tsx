import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export const ContactForm = () => {
  return (
    <Box as="section" bg="white" borderRadius="lg" boxShadow="md" p={{ base: 6, md: 8 }} width="full">
      <Box textAlign="center" mb={6}>
        <Heading as="h3" size="lg" mb={2} color="brand.base">
          お問い合わせフォーム
        </Heading>
        <Text color="gray.600">
          留学に関するご質問・ご相談はこちらから
        </Text>
      </Box>
      <Box
        as="iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSd0zT_D5h54lODf-foCtR2Me0coRfMTk5ICyH1xoeLQwQBZ1w/viewform?embedded=true"
        w="640px"
        h="800px"
        frameBorder={0}
      >
        読み込んでいます…
      </Box>
    </Box>
  );
};
