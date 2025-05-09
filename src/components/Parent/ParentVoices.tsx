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
    name: 'A.S',
    relation: '保護者',
    quote: '正解/不正解で成績を決める日本の教育に違和感を感じていましたが、海外留学をしたことで自分の意見や考えを尊重される環境でのびのびと成長し、卒業後は外資系企業で働いています。\n違いを受け入れ合う仲間たちとの出会いにも、本当に感謝しています。',
    imageUrl: './images/S__10854413.jpg',
  },
  {
    name: 'Y.H',
    relation: '保護者',
    quote: '得意・不得意の教科の差が激しく、日本の学校の定期テストや模試の成績はまちまちでした。しかし海外ではある領域がずば抜けて得意な方が評価されるため、留学へ行ってからは本人も楽しそうでした。\n一人娘なので心配でしたが、「離れている時間が子どもを成長させる」というモンテッソーリ教育の考え方を自分に言い聞かせていました。\n時々していたビデオ電話で娘の顔つきが変わっていくことに気づき、留学へ行かせて本当に良かったなと思いました。',
    imageUrl: './images/new_parent01.jpg',
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
