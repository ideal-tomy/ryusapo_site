import React from 'react';
import { Box, Container, Heading, Text, Flex, Image, VStack, Grid, GridItem } from '@chakra-ui/react';

export const StorySection = () => {
  return (
    <Box as="section" py={16} bg="white">
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={10} alignItems="center">
          <GridItem>
            <VStack spacing={6} align="flex-start">
              <Text
                as="span"
                color="brand.accent"
                fontWeight="bold"
                fontSize="lg"
                textTransform="uppercase"
              >
                創業の背景
              </Text>
              <Heading as="h2" size="xl" color="brand.base">
                なぜ留サポを始めたのか
              </Heading>
              
              <Text fontSize="lg" color="gray.700" lineHeight="taller">
                現代の日本では、多くの若者が「教育環境や価値観の窮屈さ」によって本来の可能性を発揮できずにいます。
                また、親世代や祖父母世代に根付く"体裁主義"が、時に子どもの成長機会を妨げているという構造的課題も存在します。
              </Text>
              
              <Text fontSize="lg" color="gray.700" lineHeight="taller">
                留サポは、「体験留学」「サマーキャンプ」「短期海外渡航」などを通じて、
                環境を変えることで人生を変えるきっかけを提供したいという思いから始まりました。
              </Text>
              
              <Text fontSize="lg" color="gray.700" lineHeight="taller">
                単なる英語学習ではなく、若者の価値観転換と保護者の安心感を両立する
                教育的な留学サービスを目指しています。
              </Text>
            </VStack>
          </GridItem>
          
          <GridItem>
            <Image 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
              alt="若者たちが国際的な環境で学ぶ様子" 
              borderRadius="lg"
              boxShadow="lg"
              objectFit="cover"
              height="500px"
              width="100%"
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
