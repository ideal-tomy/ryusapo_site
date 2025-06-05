import React from 'react';
import { Box, Container, Grid, GridItem, Heading, Text, Flex, Icon } from '@chakra-ui/react';
import { FaComments } from 'react-icons/fa';

// 共通コンポーネントのインポート
import { PageHeader } from '../../components/common/PageHeader';

// お問い合わせページ固有コンポーネントのインポート
import { ContactForm } from '../../components/Contact/ContactForm';
import { ContactMethods } from '../../components/Contact/ContactMethods';

export const ContactPage = () => {
  return (
    <Box as="main">
      {/* 1. ページヘッダー */}
      <PageHeader 
        title="お問い合わせ"
        description="留学に関するご相談・お問い合わせはこちらから"
        bgImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070"
        height={{ base: "250px", md: "300px" }}
        textColor="white"
      />
      
      {/* 2. お問い合わせページの見出し */}
      <Box bg="gray.50" py={12}>
        <Container maxW="container.xl" px={{ base: 4 }}>
          <Flex direction="column" align="center" textAlign="center" mb={10}>
            <Icon as={FaComments} boxSize={12} color="brand.accent" mb={4} />
            <Heading as="h2" size="xl" color="brand.base" mb={3}>
              留学について、どんなことでもお気軽にご相談ください
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
            専門カウンセラーが生徒一人ひとりの進路や夢に寄り添って、最善・最適な道を一緒に考えます。留学プログラムに関する質問、費用の相談、
              手続きの進め方など、どんなご質問でもお気軽にお問い合わせください。
            </Text>
          </Flex>

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            {/* 3. お問い合わせフォーム */}
            <GridItem>
              <ContactForm />
            </GridItem>
            
            {/* 4. その他のお問い合わせ方法 (復元) */}
            <GridItem>
              <ContactMethods />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
