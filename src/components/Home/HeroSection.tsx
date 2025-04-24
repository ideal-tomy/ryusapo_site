import React from 'react';
import { Box, Container, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// LINE公式アカウントのURL
const LINE_URL = 'https://line.me/R/ti/p/@123abc';

export const HeroSection = () => {
  return (
    <Box
      as="section"
      h="90vh"
      minH="600px"
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      display="flex"
      alignItems="center"
      textAlign="center"
    >
      {/* 背景オーバーレイ */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 47, 95, 0.7)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Stack spacing={6} maxW="container.md" mx="auto">
          <Heading
            as="h1"
            size="4xl"
            fontWeight="bold"
            lineHeight="1.2"
            mb={4}
          >
            留学を、もっと身近に。
          </Heading>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            mb={8}
          >
            世界が変わるきっかけを、10代のうちに。
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={4}
            mt={8}
          >
            <Button
              as={RouterLink}
              to="/student"
              size="lg"
              colorScheme="yellow"
              color="gray.800"
              fontWeight="bold"
              px={8}
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              transition="all 0.3s ease"
            >
              本人向けサポートを見る
            </Button>

            <Button
              as={RouterLink}
              to="/parent"
              size="lg"
              colorScheme="blue"
              variant="outline"
              px={8}
              _hover={{
                bg: "rgba(255,255,255,0.2)",
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
            >
              親御さん向けサポートを見る
            </Button>

            <Button
              as="a"
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              colorScheme="green"
              px={8}
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              transition="all 0.3s ease"
            >
              LINEで相談する
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
