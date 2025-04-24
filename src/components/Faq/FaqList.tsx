import React from 'react';
import {
  Box,
  Container,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
  Divider,
  Badge
} from '@chakra-ui/react';

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
  category: number; // 0: 全て, 1: 本人向け, 2: 親御さん向け
};

type FaqListProps = {
  faqs: FaqItem[];
  activeCategory: number;
};

export const FaqList: React.FC<FaqListProps> = ({ faqs, activeCategory }) => {
  // カテゴリーでフィルタリング（0は「全て」なのでフィルタしない）
  const filteredFaqs = activeCategory === 0
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory || faq.category === 0);

  return (
    <Box as="section" py={8} bg="white">
      <Container maxW="container.lg">
        <VStack spacing={4} align="stretch">
          {filteredFaqs.length > 0 ? (
            <Accordion allowMultiple defaultIndex={[]}>
              {filteredFaqs.map((faq) => (
                <AccordionItem 
                  key={faq.id}
                  border="none"
                  mb={4}
                  bg="white"
                  boxShadow="sm"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <h3>
                    <AccordionButton 
                      py={4} 
                      px={5}
                      _hover={{ bg: 'gray.50' }}
                      _expanded={{ bg: 'brand.light', color: 'brand.base' }}
                    >
                      <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                        {faq.question}
                      </Box>
                      <AccordionIcon boxSize={6} />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} pt={2} px={5} bg="gray.50">
                    <Box display="flex" mb={3}>
                      <Badge
                        colorScheme={faq.category === 1 ? "blue" : faq.category === 2 ? "green" : "gray"}
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {faq.category === 1 ? '本人向け' : faq.category === 2 ? '親御さん向け' : '共通'}
                      </Badge>
                    </Box>
                    <Text fontSize="md" whiteSpace="pre-wrap">
                      {faq.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Box textAlign="center" py={10}>
              <Heading as="h4" size="md" color="gray.500">
                質問が見つかりませんでした
              </Heading>
              <Text mt={2} color="gray.500">
                他のカテゴリを選択してみてください
              </Text>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
};
