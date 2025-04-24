import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Button, VStack, HStack } from '@chakra-ui/react';
import { FaShieldAlt, FaCreditCard, FaPhone } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

type SecurityFeatureProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ icon, title, description }) => {
  return (
    <VStack
      align="flex-start"
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Flex
        w={12}
        h={12}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="brand.base"
        mb={4}
      >
        {icon}
      </Flex>
      <Heading as="h3" fontSize="xl" mb={2} color="brand.base">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

const securityFeatures = [
  {
    icon: <Icon as={FaShieldAlt} w={6} h={6} />,
    title: '安全体制の確立',
    description: '現地スタッフとの24時間連絡体制、緊急時対応プロトコル、保険サポートなど、お子様の安全を最優先に考えたシステムを整備しています。',
  },
  {
    icon: <Icon as={FaCreditCard} w={6} h={6} />,
    title: '費用の透明性',
    description: '留学にかかる費用をすべて明示。追加料金や隠れたコストがなく、安心して計画を立てられます。',
  },
  {
    icon: <Icon as={FaPhone} w={6} h={6} />,
    title: '定期的な状況報告',
    description: '留学中もお子様の様子を定期的にご報告。写真や動画も交えて、成長の様子をお伝えします。',
  },
];

export const ParentSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50" className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text
              color="brand.accent"
              fontWeight="bold"
              fontSize="lg"
              mb={3}
            >
              FOR PARENTS
            </Text>
            <Heading as="h2" size="2xl" mb={5} color="brand.base">
              保護者の皆様へ
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={8}>
              お子様の留学に関する不安を解消するためのサポート体制を整えています
            </Text>
          </Box>

          <Box
            p={8}
            bg="brand.light"
            borderRadius="xl"
            width="full"
            mb={8}
          >
            <Heading as="h3" size="lg" mb={6} textAlign="center" color="brand.base">
              こんな不安はありませんか？
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {securityFeatures.map((feature, index) => (
                <SecurityFeature key={index} {...feature} />
              ))}
            </SimpleGrid>
          </Box>

          <Button
            as={RouterLink}
            to="/parent"
            size="lg"
            colorScheme="blue"
            bg="brand.base"
            _hover={{ bg: 'blue.600' }}
            px={8}
          >
            親御さん向けページを見る
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
