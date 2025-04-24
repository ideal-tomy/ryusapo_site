import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, VStack, Icon, Divider } from '@chakra-ui/react';
import { FaShieldAlt, FaHandHoldingHeart, FaUserFriends, FaPhoneAlt, FaHeartbeat, FaHospital } from 'react-icons/fa';

type SupportFeatureProps = {
  title: string;
  description: string;
  icon: React.ReactElement;
};

const SupportFeature: React.FC<SupportFeatureProps> = ({ title, description, icon }) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
      transition="all 0.3s ease"
      height="100%"
    >
      <Flex direction="column" height="100%">
        <Flex align="center" mb={4}>
          <Flex
            w={12}
            h={12}
            align="center"
            justify="center"
            color="white"
            rounded="full"
            bg="brand.base"
            mr={3}
          >
            {icon}
          </Flex>
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </Flex>
        <Text color="gray.600" flex="1">
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

const supportFeatures = [
  {
    title: '現地パートナー校との連携',
    description: '厳選された現地パートナー校と提携し、皆様のお子様が安全かつ充実した環境で学べるようサポートしています。学校スタッフとも定期的に連携を取り、状況を常に把握しています。',
    icon: <Icon as={FaUserFriends} w={6} h={6} />
  },
  {
    title: '24時間緊急サポート',
    description: '24時間対応可能な緊急連絡先を用意。何か問題が発生した場合でも、いつでもすぐにサポートします。日本語対応スタッフが常駐しています。',
    icon: <Icon as={FaPhoneAlt} w={6} h={6} />
  },
  {
    title: '健康管理サポート',
    description: '体調不良や怪我などの健康問題にも迅速に対応。現地医療機関との連携体制を整え、必要な場合は迅速に適切な医療が受けられるようサポートします。',
    icon: <Icon as={FaHeartbeat} w={6} h={6} />
  },
  {
    title: '海外保険手続きサポート',
    description: '万が一の際に備えて、適切な海外旅行保険への加入をサポート。保険の選び方から手続き、緊急時の保険適用までしっかりとサポートします。',
    icon: <Icon as={FaShieldAlt} w={6} h={6} />
  },
  {
    title: '保護者への定期報告',
    description: 'お子様の様子を定期的に保護者の方へ報告。学習の進捗、現地での生活の様子、活動の様子などを写真と共にお伝えします。',
    icon: <Icon as={FaHandHoldingHeart} w={6} h={6} />
  },
  {
    title: '医療機関へのアクセス',
    description: '現地の信頼できる医療機関をあらかじめ調査・連携。言語の壁がある中でも適切な医療を受けられるよう、医療通訳サービスも必要に応じて提供します。',
    icon: <Icon as={FaHospital} w={6} h={6} />
  }
];

export const SupportSystem = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="brand.base" fontWeight="bold" fontSize="lg" mb={3}>
              SAFETY FIRST
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              安心のサポート体制
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              お子様の安全を最優先に考え、出発前から帰国後まで万全のサポート体制を整えています
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full">
            {supportFeatures.map((feature, index) => (
              <SupportFeature key={index} {...feature} />
            ))}
          </SimpleGrid>

          <Divider my={8} />

          <Box
            bg="brand.light"
            p={8}
            borderRadius="lg"
            boxShadow="md"
            width="full"
          >
            <Heading as="h3" size="md" mb={4} color="brand.base" textAlign="center">
              留サポの安全への取り組み
            </Heading>
            <Text textAlign="center" mb={4}>
              留サポでは、お子様の安全を最優先事項と考えています。厳選されたパートナー校との連携、
              24時間体制のサポート、緊急時の対応プロトコルなど、お子様が安心して海外で学び、
              成長できる環境づくりに全力で取り組んでいます。
            </Text>
            <Text textAlign="center" fontWeight="bold" color="brand.base">
              お子様の貴重な経験を、安心してお任せください。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
