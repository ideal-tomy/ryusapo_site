import React from 'react';
import { Box, Container, Heading, Text, Flex, HStack, VStack, Icon, Circle, Divider, Stack, Image } from '@chakra-ui/react';
import { FaUmbrellaBeach, FaSchool, FaFileSignature } from 'react-icons/fa';

// 画像をインポート
import students01Image from '../../assets/images/students01.png';

type SupportStepProps = {
  title: string;
  description: string;
  icon: React.ReactElement;
  isLast?: boolean;
};

const SupportStep: React.FC<SupportStepProps> = ({ title, description, icon, isLast = false }) => {
  return (
    <Flex flex={1} direction="column" align="center">
      <Circle size="60px" bg="brand.accent" color="white" mb={4}>
        {icon}
      </Circle>
      <VStack spacing={2} textAlign="center">
        <Heading as="h3" size="md" color="brand.base">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="md">
          {description}
        </Text>
      </VStack>
      {!isLast && (
        <Divider
          display={{ base: 'none', md: 'block' }}
          orientation="horizontal"
          position="absolute"
          right="-50%"
          top="30px"
          width="100%"
          borderColor="brand.light"
          borderWidth="2px"
        />
      )}
    </Flex>
  );
};

const supportSteps = [
  {
    title: 'サマーキャンプ',
    description: '本当に留学したいかまだ考えている、短期留学をしてみたい、海外での生活が自分に合っているか、お試し期間がほしい方に。',
    icon: <Icon as={FaUmbrellaBeach} w={6} h={6} />
  },
  {
    title: '現地校見学サポート',
    description: '実際に現地の様子を見て比べてみたい、その学校にいる留学生の生の声を聞きたい方に。',
    icon: <Icon as={FaSchool} w={6} h={6} />
  },
  {
    title: '志望校選び＆出願サポート',
    description: 'どの学校が自分に合っているか分からない、英語での願書作成はハードルが高い、伸ばしたい自分の強みを客観的に言語化して欲しい方に。',
    icon: <Icon as={FaFileSignature} w={6} h={6} />
  }
];

export const SupportTimeline = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="gray.400" fontWeight="bold" fontSize="lg" mb={3}>
              SUPPORT SYSTEM
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              あなたをサポートする体制
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
            留学のフェーズに合わせて、留サポのスタッフがあなたの挑戦を総合的にバックアップします。
            </Text>
          </Box>

          <Box w="100%" px={{ base: 4, md: 12 }} py={8}>
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="flex-start"
              position="relative"
              spacing={{ base: 10, md: 0 }}
            >
              {supportSteps.map((step, index) => (
                <Box 
                  key={index} 
                  mb={{ base: 10, md: 0 }}
                  position="relative"
                  width={{ base: '100%', md: '33%' }}
                >
                  <SupportStep 
                    {...step} 
                    isLast={index === supportSteps.length - 1} 
                  />
                </Box>
              ))}
            </Stack>
          </Box>

          <Box
            bg="brand.light"
            p={8}
            borderRadius="lg"
            boxShadow="md"
            width="full"
            mt={4}
          >
            <Heading as="h3" size="md" mb={4} color="brand.base" textAlign="center">
              LINEサポートでいつでも相談
            </Heading>
            <Text textAlign="center">
              現地についても日本語で相談可能。わからないことや不安なことがあれば、いつでもLINEで質問できます。写真や音声メッセージも送れるので安心です。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
