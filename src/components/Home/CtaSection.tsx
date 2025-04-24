import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MainCTA } from '../common/MainCTA';

export const CtaSection = () => {
  return (
    <Box 
      as="section" 
      py={{ base: 16, md: 20 }} 
      bg="brand.base" 
      color="white"
      className="section"
    >
      <Container maxW="container.xl">
        <VStack spacing={8} align="center" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            一歩踏み出す勇気があなたの世界を変える
          </Heading>
          <Text fontSize="xl" maxW="container.md" mb={8}>
            まずは気軽にLINEで相談、または資料請求から。
            あなたの留学への第一歩をサポートします。
          </Text>
          
          <MainCTA />
          
          <Box pt={8}>
            <Button
              as={RouterLink}
              to="/faq"
              variant="outline"
              size="lg"
              color="white"
              borderColor="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              よくある質問を見る
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
