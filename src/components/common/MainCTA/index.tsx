import React from 'react';
import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';

type MainCTAProps = {
  // LINEボタンのURLを変更するためのプロパティ
  lineUrl?: string;
  // ボタンのテキストを変更するためのプロパティ
  buttonText?: string;
  // サブテキストを変更するためのプロパティ
  subText?: string;
};

// デフォルト値を設定
export const MainCTA = ({
  lineUrl = 'https://lin.ee/0iQNlSK',
  buttonText = 'LINEで無料相談する',
  subText = 'まずは気軽に話してみませんか？',
}: MainCTAProps) => {
  return (
    <Box
      as="section"
      bg="brand.light"
      py={{ base: 12, md: 16 }}
      className="section"
    >
      <Container maxW="container.md" textAlign="center">
        <VStack spacing={6}>
          <Heading as="h2" size="xl" color="brand.base">
            留学を考えている方へ
          </Heading>
          
          <Text fontSize="lg" color="gray.700">
            {subText}
          </Text>
          
          <Button
            as="a"
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            px={10}
            py={6}
            bg="#06c755"
            color="white"
            fontWeight="bold"
            _hover={{ bg: '#05a948', transform: 'translateY(-2px)' }}
            _active={{ bg: '#048b3a' }}
            transition="all 0.3s ease"
            boxShadow="md"
          >
            {buttonText}
          </Button>
          
          <Text fontSize="sm" color="gray.600" mt={4}>
            ★ 無料相談です。お気軽にお問い合わせください。
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
