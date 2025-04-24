import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export const AboutPage = () => {
  return (
    <Box as="section">
      {/* u30dau30fcu30b8u30d8u30c3u30c0u30fcu30b3u30f3u30ddu30fcu30cdu30f3u30c8 */}
      {/* <PageHeader 
        title="u904bu55b6u4f1au793eu30fbu7406u5ff5"
        description="u7559u30b5u30ddu306eu904bu55b6u7406u5ff5u3001u4ee3u8868u30e1u30c3u30bbu30fcu30b8u3001u4f1au793eu6982u8981"
        bgColor="brand.light"
      /> */}

      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch">
          <Box as="section" className="section">
            <Heading as="h1" size="2xl" textAlign="center" mb={6}>
              u904bu55b6u4f1au793eu30fbu7406u5ff5
            </Heading>
            <Text fontSize="xl" textAlign="center">
              u7559u30b5u30ddu306eu904bu55b6u7406u5ff5u3001u4ee3u8868u30e1u30c3u30bbu30fcu30b8u3001u4f1au793eu6982u8981
            </Text>
          </Box>
          
          {/* u4ee5u4e0bu306bu5404u30bbu30afu30b7u30e7u30f3u30b3u30f3u30ddu30fcu30cdu30f3u30c8u3092u8ffdu52a0u4e88u5b9a */}
          {/* u4fe1u983eu6027u3068u5171u611fu3092u9ad8u3081u308bu30b9u30c8u30fcu30eau30fcu30d1u30fcu30c8u306au3069 */}
        </VStack>
      </Container>

      {/* CTAu30b3u30f3u30ddu30fcu30cdu30f3u30c8 */}
      {/* <MainCTA /> */}
    </Box>
  );
};
