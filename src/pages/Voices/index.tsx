import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export const VoicesPage = () => {
  return (
    <Box as="section">
      {/* u30dau30fcu30b8u30d8u30c3u30c0u30fcu30b3u30f3u30ddu30fcu30cdu30f3u30c8 */}
      {/* <PageHeader 
        title="u4f53u9a13u8ac7u30fbu30b9u30c8u30fcu30eau30fcu7d39u4ecb"
        description="u5b9fu969bu306bu7559u5b66u3057u305fu5b66u751fu3084u4fddu8b77u8005u306eu58f0"
        bgColor="brand.light"
      /> */}

      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch">
          <Box as="section" className="section">
            <Heading as="h1" size="2xl" textAlign="center" mb={6}>
              u4f53u9a13u8ac7u30fbu30b9u30c8u30fcu30eau30fcu7d39u4ecb
            </Heading>
            <Text fontSize="xl" textAlign="center">
              u5b9fu969bu306bu7559u5b66u3057u305fu5b66u751fu3084u4fddu8b77u8005u306eu58f0
            </Text>
          </Box>
          
          {/* u4ee5u4e0bu306bu5404u30bbu30afu30b7u30e7u30f3u30b3u30f3u30ddu30fcu30cdu30f3u30c8u3092u8ffdu52a0u4e88u5b9a */}
          {/* Before/Afteru306eu5909u5316u3084u611fu60f3u3092u5199u771fu4ed8u304du3067u63b2u8f09u306au3069 */}
        </VStack>
      </Container>

      {/* CTAu30b3u30f3u30ddu30fcu30cdu30f3u30c8 */}
      {/* <MainCTA /> */}
    </Box>
  );
};
