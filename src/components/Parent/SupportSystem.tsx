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
    title: '海外大卒のスタッフがサポート',
    description: '日本語、英語どちらでも対応可能なスタッフが引率。留学経験者だからわかる、初めての海外でも安心できる寄り添いサポート。',
    icon: <Icon as={FaUserFriends} w={6} h={6} />
  },
  {
    title: '24時間緊急サポート',
    description: 'サマーキャンプ、現地校見学サポート中のトラブルにも対応。いつでもすぐにサポートします。',
    icon: <Icon as={FaPhoneAlt} w={6} h={6} />
  },
  {
    title: 'プログラム後の進路相談',
    description: 'サマーキャンプ・現地校見学後も、次のアクションまで一貫サポート。「正規留学を本格的に検討したい」「出願準備を進めたい」といったご相談にも継続対応します。',
    icon: <Icon as={FaHeartbeat} w={6} h={6} />
  },
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
              留サポでは、お子様の安全を最優先事項と考えています。厳選された英会話コンサルティング社 Engrowthとの提携、
              プログラム期間中の24時間体制のサポート、お子様が安心して海外で学び、
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
