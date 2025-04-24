import React from 'react';
import { Box, Container, Heading, Text, Flex, HStack, VStack, Icon, Circle, Divider, Stack } from '@chakra-ui/react';
import { FaPlaneDeparture, FaGlobeAsia, FaPlaneArrival } from 'react-icons/fa';

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
    title: '出発前',
    description: '出国手続きの案内、現地情報の共有、オリエンテーションなど、あなたの準備をサポートします。',
    icon: <Icon as={FaPlaneDeparture} w={6} h={6} />
  },
  {
    title: '滞在中',
    description: '現地スタッフによる24時間サポート、LINEでの相談対応、緊急時の対応など、あなたを常にサポートします。',
    icon: <Icon as={FaGlobeAsia} w={6} h={6} />
  },
  {
    title: '帰国後',
    description: '体験の振り返り、次のステップのアドバイス、修了証の発行など、帰国後もサポートを続けます。',
    icon: <Icon as={FaPlaneArrival} w={6} h={6} />
  }
];

export const SupportTimeline = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg" mb={3}>
              SUPPORT SYSTEM
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              あなたをサポートする体制
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              出発前から帰国後まで、留サポのスタッフがあなたの留学を総合的にバックアップします
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
              現地にいても日本語で相談可能。わからないことや不安なことがあれば、
              いつでもLINEで質問できます。写真や音声メッセージも送れるので安心です。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
