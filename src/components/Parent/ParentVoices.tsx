import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Avatar, Flex, Icon, Image } from '@chakra-ui/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

type ParentVoiceProps = {
  name: string;
  relation: string;
  childInfo: string;
  quote: string;
  imageUrl: string;
};

const ParentVoice: React.FC<ParentVoiceProps> = ({ name, relation, childInfo, quote, imageUrl }) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      position="relative"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
      transition="all 0.3s ease"
    >
      <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'start' }}>
        <Avatar 
          size="xl" 
          src={imageUrl} 
          mb={{ base: 4, md: 0 }}
          mr={{ base: 0, md: 4 }}
          border="3px solid"
          borderColor="brand.light"
        />
        <VStack align="start" spacing={3} flex="1">
          <Icon as={FaQuoteLeft} color="brand.light" w={6} h={6} />
          <Text fontSize="md" fontStyle="italic" color="gray.600" pb={4}>
            {quote}
          </Text>
          <Icon as={FaQuoteRight} color="brand.light" w={6} h={6} alignSelf="flex-end" />
          <Box pt={2} borderTop="1px solid" borderColor="gray.200" width="100%">
            <Text fontWeight="bold" color="brand.base" mb={1}>
              {name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {relation}・{childInfo}
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

const parentVoices = [
  {
    name: '佐藤 明美',
    relation: '母親',
    childInfo: '高校2年生の息子が3週間のサマーキャンプに参加',
    quote: '最初は不安でしたが、留サポのスタッフの方が丁寧に説明してくださり安心して送り出せました。息子は帰国後、自分から積極的に行動するようになり、成長を実感しています。24時間体制のサポートが親としては非常に心強かったです。',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070',
  },
  {
    name: '田中 洋子',
    relation: '母親',
    childInfo: '大学1年生の娘が半年間の語学留学に参加',
    quote: '費用が明確で追加料金の心配がなかったのが決め手でした。娘は現地での生活に最初は苦労していましたが、日本語対応可能なスタッフがいつでもサポートしてくれたおかげで無事に留学を終えることができました。娘の自立心が格段に成長しました。',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070',
  }
];

export const ParentVoices = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50" className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg" mb={3}>
              PARENTS' VOICES
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              保護者の声
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              お子様を留学に送り出された保護者の方々の声をご紹介します
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} width="full">
            {parentVoices.map((voice, index) => (
              <ParentVoice key={index} {...voice} />
            ))}
          </SimpleGrid>

          <Box
            bg="brand.light"
            p={6}
            borderRadius="lg"
            width="full"
            mt={6}
            maxW="container.md"
            textAlign="center"
          >
            <Text fontSize="lg" fontWeight="medium" color="brand.base" mb={2}>
              安心してお任せいただける理由
            </Text>
            <Text>
              留サポでは留サポでは、海外大学卒業の留学経験豊富なスタッフが現地で生活していたからこそ知り得る情報をもとに、一人ひとりに寄り添ったサポート。
              スタッフ1名につき「限られた人数だけ」をお預かりすることで、行き届いたサポートを実現しています。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
