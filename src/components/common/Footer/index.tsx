import React from 'react';
import { Box, Container, Stack, SimpleGrid, Text, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const LOGO_PATH = '/src/assets/logo.png';

// フッターに表示するリンクカテゴリー
export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="brand.base"
      color="white"
      py={{ base: 8, md: 12 }}
      mt="auto"
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
          <Stack spacing={6} align={{ base: 'center', md: 'flex-start' }}>
            <Box>
              <Image
                src={LOGO_PATH}
                alt="留サポ"
                height="50px"
                fallbackSrc="https://via.placeholder.com/150x50?text=留サポ"
                filter="brightness(0) invert(1)"
              />
            </Box>
            <Text fontSize="sm">
              世界は、思ったより近い
            </Text>
          </Stack>

          <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              サイトマップ
            </Text>
            <Link as={RouterLink} to="/" _hover={{ color: 'brand.light' }}>
              トップページ
            </Link>
            <Link as={RouterLink} to="/student" _hover={{ color: 'brand.light' }}>
              中高生の方へ
            </Link>
            <Link as={RouterLink} to="/parent" _hover={{ color: 'brand.light' }}>
              保護者の方へ
            </Link>
            <Link as={RouterLink} to="/services" _hover={{ color: 'brand.light' }}>
              サービス紹介
            </Link>
            <Link as={RouterLink} to="/about" _hover={{ color: 'brand.light' }}>
              会社紹介
            </Link>
          </Stack>

          <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              サポート
            </Text>
            <Link as={RouterLink} to="/faq" _hover={{ color: 'brand.light' }}>
              よくある質問
            </Link>
            <Link as={RouterLink} to="/contact" _hover={{ color: 'brand.light' }}>
              お問い合わせ
            </Link>
            <Link as={RouterLink} to="/about" _hover={{ color: 'brand.light' }}>
              会社概要
            </Link>
            <Link 
              href="https://line.me/R/ti/p/@123abc"
              isExternal
              _hover={{ color: 'brand.light' }}
            >
              LINEで相談
            </Link>
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderStyle={'solid'} borderColor="gray.600" pt={4}>
          <Text textAlign="center" fontSize="sm">
            &copy; {new Date().getFullYear()} 留サポ. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
